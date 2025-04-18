import moment from 'moment';
import Show from "@/models/Show";
import dbConnect from '@/app/lib/dbConnect';
import Artist from '@/models/Artist';
import Venue from '@/models/Venue';
import ViewToggle from './viewToggle';
import ListView from './listView';
import MapView from './mapView';

export default async function Page({ params, searchParams }: { 
    params: { date: string },
    searchParams: { view?: string }
}) {
    await dbConnect();
    const { date } = await params;
    const view = searchParams.view || 'list'; // Default to list view
    
    const startOfDay = new Date(date);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);
    
    // Fixed query to use startTime field instead of dateTime
    const shows = await Show.find({ 
        startTime: { 
            $gte: startOfDay, 
            $lte: endOfDay 
        } 
    });
    
    if (!shows.length) {
        return (
            <div>
                <h3 className="text-xl mb-4">{moment(date).format('MMM DD YYYY')}</h3>
                <ViewToggle currentView={view} date={date} />
                <div className="mt-4">No shows found for {moment(date).format('MMM DD YYYY')}!</div>
            </div>
        );
    }
    
    // Extract unique artist and venue aliases from the shows
    const artistAliases = [...new Set(shows.map(show => show.artist))];
    const venueAliases = [...new Set(shows.map(show => show.venue))];
    
    // Only fetch the artists and venues we need
    const artists = await Artist.find({ alias: { $in: artistAliases } });
    const venues = await Venue.find({ alias: { $in: venueAliases } });
    
    const artistMap = artists.reduce((acc, artist) => {
        acc[artist.alias] = artist;
        return acc;
    }, {} as Record<string, any>);
    
    const venueMap = venues.reduce((acc, venue) => {
        acc[venue.alias] = venue;
        return acc;
    }, {} as Record<string, any>);

    return (
        <div>
            <h3 className="text-xl mb-4">{moment(date).format('MMM DD YYYY')}</h3>
            <ViewToggle currentView={view} date={date} />
            
            <div className="mt-4">
                {view === 'list' ? (
                    <ListView 
                        shows={shows} 
                        artistMap={artistMap} 
                        venueMap={venueMap} 
                    />
                ) : (
                    <MapView 
                        shows={shows} 
                        artistMap={artistMap} 
                        venueMap={venueMap}
                    />
                )}
            </div>
        </div>
    );
};

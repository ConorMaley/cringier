import Artist, { IArtist } from '@/models/Artist';
import Show, { IShow } from '@/models/Show';
import Venue, { IVenue } from '@/models/Venue';
import Link from 'next/link';

export default async function Page({ params }: { params: { page: string } }) {
    const { page } = await params;
    const shows = await Show.find<IShow>({}, null, { limit: 10, skip: 10 * (parseInt(page) - 1) });
    if (!shows || shows.length === 0) {
        return <div className="text-4xl">No shows found</div>;
    }

    //need to get the artists and venues for each show
    const venues = await Venue.find<IVenue>({}, null, { sort: { name: 1 } });
    const venuesByAlias = venues.reduce((acc, venue) => {
        acc[venue.alias] = venue;
        return acc;
    }, {} as { [alias: string]: IVenue });

    const artists = await Artist.find<IArtist>({}, null, { sort: { name: 1 } });
    const artistsByAlias = artists.reduce((acc, artist) => {
        acc[artist.alias] = artist;
        return acc;
    }, {} as { [alias: string]: IArtist });

    return (
        <div className="mx-2">
            {shows.map((show) => (  
                <div key={String(show._id)}>
                    <Link href={`/admin/show/${show.id}`}>
                        <div className="hover:bg-gray-700">
                            <h1 className="text-2xl">{show.title}</h1>
                            <p className="text-sm">{show.startTime.toDateString()} {show.endTime ? ` - ${show.endTime.toDateString()}` : ''}</p>
                            <p className="text-sm">Artist: {artistsByAlias[show.artist]?.name || 'N/A'}</p>
                            <p className="text-sm">Venue: {venuesByAlias[show.venue]?.name || 'N/A'}</p>
                            <p className="text-sm">Address: {venuesByAlias[show.venue].address || 'N/A'}</p>
                            <p className="text-xs italic">{show.description || 'N/A'}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
};

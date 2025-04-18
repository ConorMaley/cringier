import Venue from "@/models/Venue";
import ShowForm from "../_components/showForm";
import Artist from "@/models/Artist";
import { mongooseDocsToJSON } from "../_helpers/dataHelpers";

export default async function Layout({ children }: {
    children: React.ReactNode,
}) {
    const venues = await Venue.find({}, {}, { sort: { name: 1 } })
    const artists = await Artist.find({}, {}, { sort: { name: 1 } })
    console.log({venues, artists})
    return (
        <div>
            <h5 className="text-3xl">Shows</h5>
            {children}
            <div className="mt-3">
                <h5 className="text-2xl">Add new show</h5>
                <ShowForm 
                    venues={venues.map(venue => venue.toJSON())} 
                    artists={artists.map(artist => artist.toJSON())} 
                />
            </div>
        </div>
    );
}
import Venue, { IVenue } from '@/models/Venue';
import Link from 'next/link';

export default async function Page({ params }: { params: { page: string } }) {
    const { page } = await params;
    const venues = await Venue.find<IVenue>({}, null, { limit: 10, skip: 10 * (parseInt(page) - 1) });
    if (!venues || venues.length === 0) {
        return <div className="text-4xl">No venues found</div>;
    }

    return (
        <div className="mx-2">
            {venues.map((venue) => (
                <div key={String(venue._id)}>
                    <Link href={`/admin/venue/${venue.alias}`}>
                        <div className="hover:bg-gray-700">
                            <h1 className="text-2xl">{venue.name}</h1>
                            <p className="text-sm">Address: {venue.address || 'N/A'}</p>
                            <p className="text-xs italic">{venue.description || 'N/A'}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
};

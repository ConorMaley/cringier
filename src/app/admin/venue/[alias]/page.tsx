import Venue, { IVenue } from '@/models/Venue';

export default async function Page({ params }: { params: { alias: string } }) {
    const { alias } = await params;
    const venue = await Venue.findOne<IVenue>({ alias });
    if (!venue) {
        return <div className="text-4xl">Venue {alias} not found!</div>;
    }
    return (
        <div>
            <h5 className="text-3xl">{venue.alias}</h5>
            <div>
                <div>Name: {venue.name}</div>
                <div>Description: {venue.description}</div>
                <div>Address: {venue.address}</div>
                <div>Phone: {venue.phone}</div>
                <div>URL: {venue.url ? <a href={venue.url} target="_blank">{venue.url}</a> : 'N/A'}</div>
            </div>
            TODO editable form fields
        </div>
    )
};

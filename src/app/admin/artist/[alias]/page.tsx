import Artist, { IArtist } from '@/models/Artist';

export default async function Page({ params }: { params: { alias: string } }) {
    const { alias } = await params;
    const artist = await Artist.findOne<IArtist>({ alias });
    if (!artist) {
        return <div className="text-4xl">Artist {alias} not found!</div>;
    }
    return (
        <div>
            <h5 className="text-3xl">{artist.alias}</h5>
            <div>
                <div>Name: {artist.name}</div>
                <div>Description: {artist.description}</div>
                <div>Genres: {artist.genres ? artist.genres.join(', ') : 'None :('}</div>
                <div>URL: {artist.url ? <a href={artist.url} target="_blank">{artist.url}</a> : 'N/A'}</div>
            </div>
            TODO editable form fields
        </div>
    )
};

import Artist, { IArtist } from '@/models/Artist';
import Link from 'next/link';

export default async function Page({ params }: { params: { page: string } }) {
    const { page } = await params;
    const artists = await Artist.find<IArtist>({}, null, { limit: 10, skip: 10 * (parseInt(page) - 1) });
    if (!artists || artists.length === 0) {
        return <div className="text-4xl">No artists found</div>;
    }

    return (
        <div>
            {artists.map((artists) => (
                <div key={String(artists._id)}>
                    <Link href={`/admin/artist/${artists.alias}`}>
                        <div className="border-solid border-green-300 border-2 hover:border-transparent hover:bg-gray-700">
                            <h3>{artists.name}</h3>
                            <p>{artists.genres}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
};

import ArtistForm from "../_components/artistForm";

export default async function Layout({ children }: {
    children: React.ReactNode,
}) {
    return (
        <div>
            <h5 className="text-2xl">Artists</h5>
            {children}
            <h5 className="text-2xl">Add new artist</h5>
            <ArtistForm />
        </div>
    );
}
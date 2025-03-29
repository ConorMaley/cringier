import VenueForm from "../_components/venueForm";

export default async function Layout({ children }: {
    children: React.ReactNode,
}) {
    return (
        <div>
            <h5 className="text-3xl">Venues</h5>
            {children}
            <div className="mt-3">
                <h5 className="text-2xl">Add new venue</h5>
                <VenueForm />
            </div>
        </div>
    );
}
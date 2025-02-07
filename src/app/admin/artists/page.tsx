import { redirect } from "next/navigation";

export default async function Page() {
    return redirect('/admin/artists/1')
};

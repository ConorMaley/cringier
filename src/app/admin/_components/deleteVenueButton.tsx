"use client";

import { useActionState } from "react";
import { deleteVenue } from "@/app/actions/deleteVenue";
import { useRouter } from "next/navigation";

export default function DeleteVenueButton({ alias }: { alias: string }) {
    const router = useRouter();
    const [state, action, pending] = useActionState(() => deleteVenue({ alias }), null);
    
    if (pending) {
        return (
            <div>Deleting...</div>
        )
    }

    if (state === true) {
        // show a toast maybe?
        router.push('/admin/venues');
    }

  return (
    <div>
        <form action={action} className="flex flex-col">
            <button 
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                type="submit"
            >
                Delete Venue
            </button>
        </form>
    </div>
  );
}

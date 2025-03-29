'use server';

import Venue from "@/models/Venue";
import dbConnect from "../lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function deleteVenue({ alias }: { alias: string }) {
    try {
        await dbConnect();
    
        await Venue.deleteOne({ alias });

        revalidatePath(`/admin/venue/${alias}`);

        return true;
    } catch (error) {
        console.error(error);

        return false;
    }
}
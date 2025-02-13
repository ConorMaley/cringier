'use server';

import Artist from "@/models/Artist";
import dbConnect from "../lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function deleteArtist({ alias }: { alias: string }) {
    try {
        await dbConnect();
    
        await Artist.deleteOne({ alias });

        revalidatePath(`/admin/artist/${alias}`);

        return true;
    } catch (error) {
        console.error(error);

        return false;
    }
}
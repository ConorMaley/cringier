'use server';

import Artist from "@/models/Artist";
import dbConnect from "../lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function createArtist(_: any, formData: FormData) {
    try {
        const name = formData.get('name') as string;
        const alias = formData.get('alias') as string;
        const description = formData.get('description');
        const genres = formData.get('genres');
        const url = formData.get('url');
    
        const createParams = { name, alias, description, genres, url };

        await dbConnect();
    
        await Artist.create(createParams);

        // oh that's slick
        revalidatePath('/admin/artists');

        return true;
    } catch (error) {
        console.error(error);

        return false;
    }
}
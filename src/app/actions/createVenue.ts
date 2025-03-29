'use server';

import Venue from "@/models/Venue";
import dbConnect from "../lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function createVenue(_: any, formData: FormData) {
    try {
        const name = formData.get('name') as string;
        const alias = formData.get('alias') as string;
        const address = formData.get('address');
        const description = formData.get('description');
        const phone = formData.get('phone');
        const url = formData.get('url');
    
        const createParams = { name, alias, address, description, phone, url };

        await dbConnect();
    
        await Venue.create(createParams);

        revalidatePath('/admin/venues');

        return true;
    } catch (error) {
        console.error(error);

        return false;
    }
}
'use server';

import Show from "@/models/Show";
import dbConnect from "../lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function createShow(_: any, formData: FormData) {
    try {
        const artistAlias = formData.get('artist_alias') as string;
        const venueAlias = formData.get('venue_alias') as string;
        const title = formData.get('title');
        const startTime = formData.get('start_time') as string;
        const endTime = formData.get('end_time') as string;
        const description = formData.get('description');
        
        // Validate that end time is after start time
        const startDate = new Date(startTime);
        const endDate = new Date(endTime);
        
        if (endDate <= startDate) {
            return { error: "End time must be after start time" };
        }
    
        const createParams = { 
            artist: artistAlias, 
            venue: venueAlias, 
            title, 
            startTime: startDate, 
            endTime: endDate, 
            description 
        };

        await dbConnect();
    
        await Show.create(createParams);

        revalidatePath('/admin/shows');

        return { success: true };
    } catch (error) {
        console.error(error);

        return { error: "Failed to create show" };
    }
}
import mongoose from 'mongoose';

export interface IVenue extends mongoose.Document {
    name: string;
    alias: string;
    description?: string;
    address?: string;
    phone?: string;
    url?: string;
}

const venueSchema = new mongoose.Schema({
    name: { type: String, required: true },
    alias: { type: String, required: true },
    description: { type: String },
    address: { type: String },
    phone: { type: String },
    url: { type: String },
});

export default mongoose.models.Venue || mongoose.model<IVenue>('Venue', venueSchema);
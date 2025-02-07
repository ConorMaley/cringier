import mongoose from "mongoose";

export interface Genre extends mongoose.Document {
    name: string;
    alias: string;
    description?: string;
}

const genreSchema = new mongoose.Schema({
    name: { type: String, required: true },
    alias: { type: String, required: true },
    description: { type: String },
});

export default mongoose.models.Genre || mongoose.model<Genre>("Genre", genreSchema);
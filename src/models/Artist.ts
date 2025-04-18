import mongoose from "mongoose";

export interface IArtist extends mongoose.Document {
    name: string;
    alias: string;
    description?: string;
    genres?: string[];
    url?: string;
}

const artistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    alias: { type: String, required: true },
    description: { type: String },
    genres: { type: [String] },
    url: { type: String },
}, {
    timestamps: true, 
    toObject: {
        transform: function (doc, ret) {
            delete ret.__v;
            delete ret._id;
        }
    }
}
);

export default mongoose.models.Artist || mongoose.model<IArtist>("Artist", artistSchema);
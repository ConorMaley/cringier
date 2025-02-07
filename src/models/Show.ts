import mongoose from 'mongoose';

export interface Show extends mongoose.Document {
    title: string;
    description: string;
    dateTime: Date;
    venue: string;
}

const showSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    dateTime: { type: Date, required: true },
    venue: { type: String, required: true },
});

export default mongoose.models.Show ||  mongoose.model<Show>('Show', showSchema);
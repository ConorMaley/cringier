import mongoose from 'mongoose';

export interface IShow extends mongoose.Document {
    startTime: Date;
    endTime?: Date;
    venue: string; // venue alias
    artist: string; // artist alias
    title?: string;
    description?: string;
}

const showSchema = new mongoose.Schema({
    startTime: { type: Date, required: true },
    endTime: { type: Date },
    venue: { type: String, required: true },
    artist: { type: String, required: true },
    title: { type: String },
    description: { type: String },
});

export default mongoose.models.Show ||  mongoose.model<IShow>('Show', showSchema);
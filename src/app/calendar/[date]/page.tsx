import moment from 'moment';
import Show from "@/models/Show";
import dbConnect from '@/app/lib/dbConnect';

export default async function Page({ params }: { params: { date: string } }) {
    await dbConnect(); // there should be an easier way to "globally" connect app to db
    const { date } = await params;
    const shows = await Show.find({ dateTime: { $gte: new Date(date), $lt: new Date(date + "T23:59:59.999Z") } }); 
    
    if (!shows.length) {
        return <div>No shows found!</div>;
    }

    return (
        <div>
            <h3>{moment(date).format('MMM DD YYYY')}</h3>
            {shows.map((show) => (
                <div key={show.id}>
                    <h2>{show.title}</h2>
                    <p>{show.description}</p>
                </div>
            ))}
        </div>
    )
};

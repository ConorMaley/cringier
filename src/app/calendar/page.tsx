import { redirect } from 'next/navigation';
import moment from 'moment';

export default async function Page() {
    const currentDate = moment().format('YYYY-MM-DD');
    return redirect(`/calendar/${currentDate}`);
};

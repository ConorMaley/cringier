import moment from "moment";
import DatePicker from "../../_components/date-picker";

export default async function Layout({ children, params }: {
    children: React.ReactNode,
    params: { date: string }
  }) {
    const { date } = await params;
    return (
        <div>
            <DatePicker date={moment(date).format('YYYY-MM-DD')}/>
            {children}
        </div>
    );
}
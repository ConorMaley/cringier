'use client';

import moment from "moment";
import { useRouter } from "next/navigation";

export default function DatePicker({
    date,
  }: {
    date: string
  }) {
    const router = useRouter();

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newDate = e.target.value;
      router.push(`/calendar/${newDate}`);
    };

    return (
      <div>
        <input
          type="date"
          value={moment(date).format('YYYY-MM-DD')}
          onChange={handleDateChange}
        />
      </div>
    )
}
'use client';

import moment from "moment";

export default function DatePicker({
    date,
  }: {
    date: string
  }) {
    return (
      <div>
        <input
          type="date"
          value={moment(date).format('YYYY-MM-DD')}
        //   onChange={(e) => setDate(new Date(e.target.value))}
        />
      </div>
    )
}
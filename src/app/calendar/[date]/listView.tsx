'use client';

import moment from 'moment';
import { IShow } from '@/models/Show';

interface ListViewProps {
  shows: IShow[];
  artistMap: Record<string, any>;
  venueMap: Record<string, any>;
}

export default function ListView({ shows, artistMap, venueMap }: ListViewProps) {
  return (
    <div>
      {shows.map((show) => (
        <div key={show.id} className="mb-4 p-3 border rounded">
          <h2 className="text-xl font-bold">{show.title}</h2>
          {artistMap[show.artist] && (
            <p className="font-medium">Artist: {artistMap[show.artist].name}</p>
          )}
          {venueMap[show.venue] && (
            <p>Venue: {venueMap[show.venue].name}</p>
          )}
          <p>Start: {moment(show.startTime).format('h:mm A')}</p>
          {show.endTime && (
            <p>End: {moment(show.endTime).format('h:mm A')}</p>
          )}
          <p className="text-sm mt-2">{show.description}</p>
        </div>
      ))}
    </div>
  );
}
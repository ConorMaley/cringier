'use client';

import { IShow } from '@/models/Show';

interface MapViewProps {
  shows: IShow[];
  artistMap: Record<string, any>;
  venueMap: Record<string, any>;
}

export default function MapView({ shows, artistMap, venueMap }: MapViewProps) {
  return (
    <div className="border rounded p-6 text-center">
      <div className="text-xl mb-4">Map View - Coming Soon</div>
      <p className="text-gray-500">
        This feature is currently under development. In the future, you will be able to
        see all shows for this date displayed on an interactive map.
      </p>
      <div className="mt-6 p-4 bg-gray-100 rounded">
        <h3 className="font-bold mb-2">TODO:</h3>
        <ul className="text-left list-disc pl-6">
          <li>Integrate a mapping library (Google Maps, Mapbox, etc.)</li>
          <li>Plot venue locations on the map</li>
          <li>Add tooltips with show/artist information</li>
          <li>Add filters for show types</li>
          <li>Implement location-based recommendations</li>
        </ul>
      </div>
      
      <div className="mt-6">
        <h3 className="font-bold mb-2">Shows scheduled for this date:</h3>
        <ul className="text-left">
          {shows.map((show) => (
            <li key={show.id} className="mb-2">
              <span className="font-medium">{show.title}</span> at {venueMap[show.venue]?.name || 'Unknown venue'}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
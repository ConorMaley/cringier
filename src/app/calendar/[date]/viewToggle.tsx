'use client';

import Link from 'next/link';

export default function ViewToggle({ currentView, date }: { currentView: string, date: string }) {
  return (
    <div className="flex space-x-2 border rounded p-2 inline-block">
      <Link 
        href={`/calendar/${date}?view=list`} 
        className={`px-4 py-2 rounded ${currentView === 'list' 
          ? 'bg-blue-500 text-white' 
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
      >
        List View
      </Link>
      <Link 
        href={`/calendar/${date}?view=map`} 
        className={`px-4 py-2 rounded ${currentView === 'map' 
          ? 'bg-blue-500 text-white' 
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
      >
        Map View
      </Link>
    </div>
  );
}
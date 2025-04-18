"use client"

import { createShow } from "@/app/actions/createShow";
import { IArtist } from "@/models/Artist";
import { IVenue } from "@/models/Venue";
import { useActionState } from "react";

export default function ShowForm({ venues, artists }: { venues: IVenue[]; artists: IArtist[] }) {
    const [state, action, pending] = useActionState(createShow, null);
    return (
        <div>
            <form action={action} className="flex flex-col">
                <div>
                    <label
                        className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                        htmlFor="title"
                    >
                        Title
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        type="text"
                        id="title"
                        name="title"
                        required
                    />
                </div>
                <div>
                    <label
                        className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                        htmlFor="artist"
                    >
                        Artist
                    </label>
                    <select
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="artist"
                        name="artist_alias"
                        required
                    >
                        {artists.map((artist) => (
                            <option key={artist.alias} value={artist.alias}>
                                {artist.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label
                        className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                        htmlFor="venue"
                    >
                        Venue
                    </label>
                    <select
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="venue"
                        name="venue_alias"
                        required
                    >
                        {venues.map((venue) => (
                            <option key={venue.alias} value={venue.alias}>
                                {venue.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label
                        className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                        htmlFor="start_time"
                    >
                        Start time
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        type="date"
                        id="start_time"
                        name="start_time"
                        required
                    />
                </div>
                <div>
                    <label
                        className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                        htmlFor="end_time"
                    >
                        End time
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        type="date"
                        id="end_time"
                        name="end_time"
                        required
                    />
                </div>
                <div>
                    <label
                        className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                        htmlFor="description"
                    >
                        Description
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        type="text"
                        id="description"
                        name="description"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    disabled={pending}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
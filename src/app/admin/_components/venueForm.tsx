"use client";

import { createVenue } from "@/app/actions/createVenue";
import { useActionState } from "react";

interface PopulateAliasEvent extends React.ChangeEvent<HTMLInputElement> {}

export default function VenueForm() {
  const [state, action, pending] = useActionState(createVenue, null);

  const populateAlias = (e: PopulateAliasEvent): void => {
    const name = e.target.value;
    const alias = name
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^a-z0-9-]/g, "");
    const aliasInput = document.getElementById("alias") as HTMLInputElement | null;
    if (aliasInput) {
      aliasInput.value = alias;
    }
  };

  return (
    <div>
      <form action={action} className="flex flex-col">
        <div>
          <label
            className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            id="name"
            name="name"
            onChange={populateAlias}
            required
          />
        </div>
        <div>
          <label
            className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
            htmlFor="alias"
          >
            Alias
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            id="alias"
            name="alias"
            required
          />
        </div>
        <div>
          <label
            className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
            htmlFor="description"
          >
            description
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            id="description"
            name="description"
          />
        </div>
        <div>
          <label
            className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            id="phone"
            name="phone"
          />
        </div>
        <div>
            <label
                className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                htmlFor="address"
            >
                Address
            </label>
            <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="text"
                id="address"
                name="address"
            />
        </div>
        <div>
          <label
            className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
            htmlFor="url"
          >
            URL
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            id="url"
            name="url"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          disabled={pending}
        >
          Submit
        </button>
        {pending && <p>Submitting...</p>}
      </form>
    </div>
  );
}

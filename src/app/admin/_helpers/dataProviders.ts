import Venue from "@/models/Venue";
import { cache } from "react";

// TODO
export const getAllVenues = cache(async () => {
    return Venue.find({}, {}, { sort: { name: 1 } });
});


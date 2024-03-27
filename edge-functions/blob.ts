import { getStore } from "@netlify/blobs";
import type { Context } from "@netlify/edge-functions";


export default async (req:Request, context: Context) => {
    const Homes = getStore("Homes");
    await Homes.set("place",  "Chennai", {metadata: {India: true}})
    await Homes.set("place", "California", {metadata: {India: false}})

    return new Response ("Values set in the Homes store")
}

import { readDatabase } from "@/helpers/dbHelpers"
import { NextResponse } from "next/server";

export const GET = async () => {
    const data = JSON.parse(readDatabase());
// we need to use JSON.parse to convert the JSON string data coming from the server into a javascript object
    console.log(data, "data")
    return NextResponse.json(data)
}
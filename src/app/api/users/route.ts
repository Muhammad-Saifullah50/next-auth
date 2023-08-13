import { readDatabase } from "@/helpers/dbHelpers";
import { writeDatabase } from "@/helpers/dbHelpers";
import { NextResponse } from "next/server";
import { User } from "@/types";

// export const GET = async () => {
//   const data = JSON.parse(readDatabase());
//   // we need to use JSON.parse to convert the JSON string data coming from the server into a javascript object
//   console.log(data, "data");
//   return NextResponse.json(data);
// };

export const GET = async () => {
    const data = JSON.parse(readDatabase());
    console.log(data, "data")
    const newData: User = {
        id: "78887",
        name: "Obaidullah",
        email: "obaid@gmail.com",
        password: "989899"

    }
    console.log( writeDatabase(newData))

}
// this file will be used for creating functions that will be useful for updating and deleteing data in database

import path from "path";
import fs from "fs"
import { User } from "@/types";

const databasePath = path.join(process.cwd(), "src/database/db.json")
// This variable tells where our database file is located, so that we can read and write from it.  process.cwd() gives us the current working directory, and trhe second argument specifies where the db file is in the directory
console.log(databasePath, 'databasePath');

export const readDatabase = () => {
    const db = databasePath
    const dbResponse = fs.readFileSync(db, 'utf-8')
    // fs is a nodejs core module that allows us to access teh file system to  store, access, and manage data on our operating system
    // readFileSync is also a buit in node js module which allows us to read from a file 
    // utf-8 converts the data recieved into human readable string
    console.log(dbResponse);
    return dbResponse // returning the dbResponse variable from the function
}

export const writeDatabase = async (newData: User) => {
    const db = databasePath;
    const newUserData = newData
    console.log(newUserData, "newUserData")
    const updatedData = await db.users.push(newUserData)
}

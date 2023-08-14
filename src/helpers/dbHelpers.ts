// this file will be used for creating functions that will be useful for updating and deleteing data in database

import path from "path";
import fs from "fs"
import { User } from "@/types";
import { v4 as uuidv4 } from 'uuid';
import { UserDataType } from "@/types";
const databasePath = path.join(process.cwd(), "src/database/db.json")
// This variable tells where our database file is located, so that we can read and write from it.  process.cwd() gives us the current working directory, and trhe second argument specifies where the db file is in the directory
console.log(databasePath, 'databasePath');

export const readDatabase = () => {
    const db = databasePath
    const dbResponse = fs.readFileSync(db, 'utf-8')
    // fs is a nodejs core module that allows us to access teh file system to  store, access, and manage data on our operating system
    // readFileSync is also a buit in node js module which allows us to read from a file 
    // utf-8 converts the data recieved into human readable string
    const data = JSON.parse(dbResponse)
    console.log(data);
    return data // returning the dbResponse variable from the function
}

export const writeDatabase = (newData: User) => {
    try {
        const db = readDatabase();
        if (db instanceof Error) {
            return db
        }
        // if db is as error , it will return it and the return statement will block the executin of the code 
        const users = JSON.parse(JSON.stringify(db))
        // we are making a deep copy of the db object. it will make another object just like the db.
        users.users.push(newData)
        // we are pushing the new data into the users array in the users variable
        fs.writeFileSync(databasePath, JSON.stringify(users, null, 2))
        // fs.writefilesync module allows us to write to a file in our operating system 
        return users

    } catch (error: any) {
        throw new Error(error.message)
        // error handling
    }
}

export const generateUniqueId = () => { // this will generate a unique id for us using the uuid npm package
    const id = uuidv4();
    return id // returning the generated id
}

export const findExistingUser = (userData: UserDataType) => { // this will find if the user in the incoming requested is already registered or not
    const data = readDatabase();
    // console.log(data)

    const existingUser = data.users.find((user: User) => {
        return (user.name === userData.name) ||
            (user.email === userData.email) ||
            (user.password === userData.password)
    }) // checks the either name, email or password is present in the users array in the database

    return existingUser // Return the existingUser if match is found , otherwise returns undefined  
}
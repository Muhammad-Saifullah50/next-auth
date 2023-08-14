import { findExistingUser } from "@/helpers/dbHelpers";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcryptjs from 'bcryptjs'

export const POST = async (request: NextRequest) => {
    // POST request as we will be sending data to the server
    try {
        const requestbody = await request.json()
        // converting the incoming request into json format to deal with it and saving it in requestbody variable

        if (!requestbody.name || !requestbody.email || !requestbody.password) {
            // checking if any of these proprties name, email and id are not present using OR operator
            return NextResponse.json({ // returning an error response
                message: "name, email or password not provided",
                status: 400,
            });
        }
        const existingUser = findExistingUser(requestbody)
        // dchecking that user xists or not using the findExistingUser function

        if (!existingUser) { // throw error if user is not signed up
            return NextResponse.json({ message: "user not signed up", status: 400 })
        }
        const storedPasswordHash = existingUser.password
        // retrieving the hash in database

        // console.log(storedPasswordHash)
        const passwordMatch = await bcryptjs.compare(requestbody.password, storedPasswordHash) // bcryptjs.compare will automatically convert the provided password inti hash and compare it with the hash in db
        // using await is must because it will take time to convert our password to hash

        // the salt is alresady included in the hash

        if (!passwordMatch) {
            return NextResponse.json({ message: "password is incorrect", status: 400 })
        }

        let userid = existingUser._id // extracting userid
        let username = existingUser.name // extracting username 
        let useremail = existingUser.email // extracting useremail

        let payload = {
            userid,
            username,
            useremail
        }
        // creating the payload for the jwt token
        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY!, { expiresIn: "1d" })
        // console.log(token)

        // jwt.sign() is used to create a jwt token. it takes a payload and the secret key as parameters. the expidresIn is an optional param, used to specify the expiry of the token

        const response = NextResponse.json({ message: "login successful", status: 200 })

        response.cookies.set('token', token, { httpOnly: true })
        // setting cookies along with the response
        // HTTP-only cookies are cookies that are inaccessible to JavaScript running in the browser. it is a security feature
        return response
        // returning successful response 

    }
    catch (error: any) {
        throw new Error(error.message) // error handling
    }


};

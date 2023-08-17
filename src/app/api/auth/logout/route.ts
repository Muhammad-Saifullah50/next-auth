import { NextResponse } from "next/server";

export const POST = () => {
    try {

        const response = NextResponse.json({ message: "logout successful", status: 200 }
        )
        response.cookies.delete("token") // deleting the token on logout
        return response 
    } catch (error: any) {
        throw new Error(error.message)
    }

}

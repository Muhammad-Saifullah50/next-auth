import { NextRequest, NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
    let pathName = request.nextUrl.pathname // pathname is the path part of a url like /api/x/y 
    // console.log(pathName, "pathname");
    let token = request.cookies.get("token")?.value || ""
    // console.log(token, "token");

    const publicPath = pathName == '/login' || pathName == "/signup"
    // console.log(publicPath, "publicPath");

    if (!publicPath && !token) { // user is requesting a private path with no token , it will be redirected to /login to get his token
        return NextResponse.redirect(new URL('/login', request.nextUrl))

    }
    if (publicPath && token) {
        return NextResponse.redirect(new URL('/dashboard', request.nextUrl))

    }
}

export const config = {
    matcher: [
        "/login",
        '/signup',
        "/dashboard",
    ]
}
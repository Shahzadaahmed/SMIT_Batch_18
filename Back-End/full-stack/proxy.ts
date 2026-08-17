import { NextRequest, NextResponse } from "next/server";
import { publicRoutes, privateRoutes } from "./src/utils/routes";

export const proxy = (req: NextRequest) => {

    const cookieVal = req.cookies.get('token')?.value
    // console.log('Cookie:', cookieVal);

    const path = req.nextUrl.pathname;
    // console.log('Path:', path);
    // console.log('Full Url:', req.url);

    if (cookieVal && publicRoutes.includes(path)) {
        console.log('Accessing public routes');
        return NextResponse.redirect(new URL('/', req.url));
    }

    if (!cookieVal && privateRoutes.includes(path)) {
        console.log('Accessing private routes');
        return NextResponse.redirect(new URL('/login', req.url));
    };
};
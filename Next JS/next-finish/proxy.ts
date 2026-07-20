import { NextRequest, NextResponse } from "next/server";
import { publicRoutes, privateRoutes } from "./src/utils/routes";

export const proxy = (req: NextRequest) => {
    // return NextResponse.json({
    //     message: "All pages are locked by proxy!"
    // });

    // return NextResponse.next();

    const cookieVal = req.cookies.get('token')?.value;
    const path = req.nextUrl.pathname;
    // console.log('Full Url:', req.url);

    if (cookieVal && publicRoutes.includes(path)) {
        return NextResponse.redirect(new URL('/', req.url));
    };

    if (!cookieVal && privateRoutes.includes(path)) {
        return NextResponse.redirect(new URL('/login', req.url));
    };
};
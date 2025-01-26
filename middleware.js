import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = (path) => {
    return [
        "/dashboard",
        "/events",
        "/meetings",
        "/availability"
    ].some(route => path.startsWith(route));
};

export default clerkMiddleware((auth, req) => {
    if (!auth().userId && isProtectedRoute(req.nextUrl.pathname)) {
        return NextResponse.redirect(new URL('/sign-in', req.url));
    }
});

export const config = {
    matcher: [
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        '/(api|trpc)(.*)',
    ],
};




import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
    try {
        const { password } = await request.json();
        const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

        if (!ADMIN_PASSWORD) {
            return NextResponse.json({ success: false, error: "Admin password not configured" }, { status: 500 });
        }

        if (password === ADMIN_PASSWORD) {
            // Set a cookie
            const cookieStore = await cookies();
            cookieStore.set("admin_token", "authenticated", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                maxAge: 60 * 60 * 24 * 7, // 1 week
                path: "/",
            });

            return NextResponse.json({ success: true });
        } else {
            return NextResponse.json({ success: false, error: "Invalid password" }, { status: 401 });
        }
    } catch (error) {
        return NextResponse.json({ success: false, error: "An error occurred" }, { status: 500 });
    }
}

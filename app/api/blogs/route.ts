import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import BlogPost from "@/lib/models";

export async function GET() {
    try {
        await dbConnect();
        const posts = await BlogPost.find({}).sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: posts });
    } catch (error) {
        return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
    }
}

export async function POST(request: Request) {
    try {
        await dbConnect();
        const body = await request.json();

        // Simple slug generation if not provided
        if (!body.slug && body.title) {
            body.slug = body.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)+/g, "");
        }

        const post = await BlogPost.create(body);
        return NextResponse.json({ success: true, data: post }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
    }
}

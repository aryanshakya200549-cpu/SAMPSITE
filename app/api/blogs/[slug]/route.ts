import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import BlogPost from "@/lib/models";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    // Await the params object
    const { slug } = await params;

    try {
        await dbConnect();
        const post = await BlogPost.findOne({ slug });
        if (!post) {
            return NextResponse.json({ success: false, error: "Post not found" }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: post });
    } catch (error) {
        return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
    }
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;

    try {
        await dbConnect();
        const body = await request.json();
        const post = await BlogPost.findOneAndUpdate({ slug }, body, {
            new: true,
            runValidators: true,
        });
        if (!post) {
            return NextResponse.json({ success: false, error: "Post not found" }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: post });
    } catch (error) {
        return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;

    try {
        await dbConnect();
        const deletedPost = await BlogPost.findOneAndDelete({ slug });
        if (!deletedPost) {
            return NextResponse.json({ success: false, error: "Post not found" }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: {} });
    } catch (error) {
        return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
    }
}

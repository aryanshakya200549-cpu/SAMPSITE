import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar } from "lucide-react";
import dbConnect from "@/lib/db";
import BlogPost, { IBlogPost } from "@/lib/models";

// Force dynamic rendering
export const dynamic = "force-dynamic";

async function getPost(slug: string) {
    try {
        const conn = await dbConnect();
        if (!conn) return null;

        const post = await BlogPost.findOne({ slug });
        return post ? JSON.parse(JSON.stringify(post)) : null;
    } catch (error) {
        console.error("Failed to fetch post:", error);
        return null;
    }
}

// Correctly type the props for dynamic routes in Next.js 15
interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="bg-white min-h-screen pb-20">
            <div className="bg-[#F0F4F8] py-12 border-b border-[#E2E8F0]">
                <div className="container mx-auto px-4 max-w-3xl">
                    <Link
                        href="/blogs"
                        className="inline-flex items-center text-[#526D82] hover:text-[#52796F] mb-8 transition-colors"
                    >
                        <ArrowLeft className="mr-2" size={18} /> Back to Blog
                    </Link>

                    <h1 className="text-3xl md:text-5xl font-bold mb-6 text-[#2F3E46] leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center text-[#64748B]">
                        <Calendar size={18} className="mr-2" />
                        <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                    </div>
                </div>
            </div>

            <article className="container mx-auto px-4 max-w-3xl py-12">
                {post.youtubeVideoId && (
                    <div className="mb-10 aspect-video rounded-2xl overflow-hidden bg-black shadow-lg">
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${post.youtubeVideoId}`}
                            title={post.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}

                {post.coverImage && !post.youtubeVideoId && (
                    <div className="mb-10 rounded-2xl overflow-hidden bg-[#FAFAF9] shadow-lg border border-[#E2E8F0]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={post.coverImage} alt={post.title} className="w-full h-auto" />
                    </div>
                )}

                <div className="prose prose-lg max-w-none text-[#334155] prose-headings:text-[#2F3E46] prose-a:text-[#52796F] prose-strong:text-[#2F3E46]">
                    <div className="whitespace-pre-wrap font-serif leading-relaxed">
                        {post.content}
                    </div>
                </div>
            </article>
        </div>
    );
}

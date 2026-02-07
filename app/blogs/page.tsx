import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import dbConnect from "@/lib/db";
import BlogPost, { IBlogPost } from "@/lib/models";

// Force dynamic rendering since we want to see new posts immediately
export const dynamic = "force-dynamic";

async function getPosts() {
    try {
        const conn = await dbConnect();
        if (!conn) return [];

        // Check if model is registered (should be if we imported it, but standard mongoose pattern handles it)
        const posts = await BlogPost.find({}).sort({ createdAt: -1 });
        return JSON.parse(JSON.stringify(posts)); // Serialize for client
    } catch (error) {
        console.error("Failed to fetch posts:", error);
        return [];
    }
}

export default async function BlogIndex() {
    const posts = await getPosts();

    return (
        <div className="bg-white min-h-screen pb-20">
            <section className="relative py-20 bg-[#F0F4F8] border-b border-[#E2E8F0]">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#2F3E46]">
                        Latest <span className="text-gradient">Insights</span>
                    </h1>
                    <p className="text-xl text-[#526D82] max-w-2xl mx-auto">
                        Articles on psychology, wellness, and self-discovery.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 mt-16 text-center">
                {posts.length === 0 ? (
                    <div className="py-20">
                        <p className="text-xl text-[#526D82]">
                            {process.env.MONGODB_URI ? "No posts found. Check back soon!" : "Database not configured. Content is unavailable."}
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post: IBlogPost & { _id: string }) => (
                            <Link key={post._id} href={`/blogs/${post.slug}`} className="group">
                                <div className="bg-[#FAFAF9] rounded-2xl overflow-hidden shadow-md border border-[#E2E8F0] transition-all hover:scale-[1.02] hover:shadow-xl h-full flex flex-col hover:border-[#A4C3B2]">
                                    {/* Image Placeholder */}
                                    <div className="h-48 bg-[#E0F2F1] w-full object-cover">
                                        {post.coverImage ? (
                                            /* eslint-disable-next-line @next/next/no-img-element */
                                            <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-[#94A3B8] bg-gradient-to-tr from-[#E0F2F1] to-[#F0F4F8]">
                                                <span className="text-4xl text-[#A4C3B2]">Format Quote</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-6 flex flex-col flex-grow text-left">
                                        <div className="flex items-center text-sm text-[#64748B] mb-3">
                                            <Calendar size={14} className="mr-2" />
                                            {new Date(post.createdAt).toLocaleDateString()}
                                        </div>
                                        <h2 className="text-xl font-bold mb-3 text-[#2F3E46] group-hover:text-[#52796F] transition-colors line-clamp-2">
                                            {post.title}
                                        </h2>
                                        <p className="text-[#526D82] line-clamp-3 mb-4 flex-grow">
                                            {post.excerpt}
                                        </p>
                                        <span className="text-[#52796F] font-semibold text-sm flex items-center mt-auto">
                                            Read Article <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

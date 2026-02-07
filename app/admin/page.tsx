"use client";

import { useState, useEffect } from "react";
import { Lock, Plus, Trash2, Edit, LogOut, Save, X } from "lucide-react";

interface Post {
    _id: string;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    coverImage?: string;
    youtubeVideoId?: string;
}

export default function AdminDashboard() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState<Post[]>([]);

    // Editor State
    const [editingPost, setEditingPost] = useState<Partial<Post> | null>(null);
    const [isEditorOpen, setIsEditorOpen] = useState(false);

    // Check auth on load (simple check)
    useEffect(() => {
        // In a real app, verify token with backend. 
        // Here we just check if we have "access".
    }, []);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simple API call to verify password
        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password }),
            });

            if (res.ok) {
                setIsAuthenticated(true);
                fetchPosts();
            } else {
                alert("Incorrect password");
            }
        } catch (err) {
            console.error(err);
            alert("Login failed");
        } finally {
            setLoading(false);
        }
    };

    const fetchPosts = async () => {
        try {
            const res = await fetch("/api/blogs");
            const json = await res.json();
            if (json.success && Array.isArray(json.data)) {
                setPosts(json.data);
            } else {
                setPosts([]);
            }
        } catch (err) {
            console.error(err);
            setPosts([]);
        }
    };


    const handleDelete = async (slug: string) => {
        if (!confirm("Are you sure you want to delete this post?")) return;

        try {
            await fetch(`/api/blogs/${slug}`, { method: "DELETE" });
            fetchPosts();
        } catch (error) {
            console.error(error);
            alert("Failed to delete");
        }
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingPost) return;

        const isNew = !editingPost._id;
        const url = isNew ? "/api/blogs" : `/api/blogs/${editingPost.slug}`;
        const method = isNew ? "POST" : "PUT";

        try {
            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(editingPost)
            });

            if (res.ok) {
                setIsEditorOpen(false);
                setEditingPost(null);
                fetchPosts();
            } else {
                const err = await res.json();
                alert(err.error || "Failed to save");
            }
        } catch (error) {
            console.error(error);
            alert("Error saving post");
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F0F4F8]">
                <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-[#E2E8F0]">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-[#E0F2F1] rounded-full text-[#52796F]">
                            <Lock size={32} />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-center mb-6 text-[#2F3E46]">Admin Access</h2>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-[#CBD5E1] outline-none focus:ring-2 focus:ring-[#52796F] text-[#334155]"
                            placeholder="Enter Password"
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#52796F] hover:bg-[#354F52] text-white font-bold py-3 rounded-lg transition-colors"
                        >
                            {loading ? "Checking..." : "Access Dashboard"}
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F0F4F8] text-[#334155]">
            {/* Admin Navbar */}
            <nav className="bg-white border-b border-[#E2E8F0] px-6 py-4 flex justify-between items-center shadow-sm">
                <h1 className="text-xl font-bold text-[#2F3E46]">Admin Dashboard</h1>
                <button
                    onClick={() => setIsAuthenticated(false)}
                    className="flex items-center text-[#526D82] hover:text-[#EF4444]"
                >
                    <LogOut size={18} className="mr-2" /> Logout
                </button>
            </nav>

            <div className="container mx-auto p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold text-[#2F3E46]">Blog Posts</h2>
                    <button
                        onClick={() => {
                            setEditingPost({ title: "", slug: "", content: "", excerpt: "" });
                            setIsEditorOpen(true);
                        }}
                        className="bg-[#52796F] hover:bg-[#354F52] text-white px-4 py-2 rounded-lg flex items-center transition-colors shadow-sm"
                    >
                        <Plus size={18} className="mr-2" /> New Post
                    </button>
                </div>

                {/* Post List */}
                <div className="bg-white rounded-xl shadow-sm border border-[#E2E8F0] overflow-hidden">
                    {posts.length === 0 ? (
                        <div className="p-8 text-center text-[#94A3B8]">
                            No posts yet. Create your first one!
                        </div>
                    ) : (
                        <div className="divide-y divide-[#E2E8F0]">
                            {posts.map((post) => (
                                <div key={post._id} className="p-6 flex items-center justify-between hover:bg-[#FAFAF9] transition-colors">
                                    <div>
                                        <h3 className="font-semibold text-lg text-[#2F3E46]">{post.title}</h3>
                                        <p className="text-sm text-[#64748B] mt-1 line-clamp-1">{post.excerpt}</p>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <button
                                            onClick={() => {
                                                setEditingPost(post);
                                                setIsEditorOpen(true);
                                            }}
                                            className="p-2 text-[#526D82] hover:bg-[#E0F2F1] hover:text-[#52796F] rounded-lg transition-colors"
                                        >
                                            <Edit size={18} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(post.slug)}
                                            className="p-2 text-[#526D82] hover:bg-red-50 hover:text-[#EF4444] rounded-lg transition-colors"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Editor Modal */}
            {isEditorOpen && editingPost && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col border border-[#E2E8F0]">
                        {/* Modal Header */}
                        <div className="px-6 py-4 border-b border-[#E2E8F0] flex justify-between items-center">
                            <h3 className="text-xl font-bold text-[#2F3E46]">
                                {editingPost._id ? "Edit Post" : "New Post"}
                            </h3>
                            <button
                                onClick={() => setIsEditorOpen(false)}
                                className="text-[#94A3B8] hover:text-[#334155]"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 overflow-y-auto flex-grow">
                            <form id="post-form" onSubmit={handleSave} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-[#334155] mb-1">Title</label>
                                        <input
                                            type="text"
                                            required
                                            value={editingPost.title}
                                            onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                                            className="w-full px-4 py-2 rounded-lg border border-[#CBD5E1] focus:ring-2 focus:ring-[#52796F] outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#334155] mb-1">Slug (URL)</label>
                                        <input
                                            type="text"
                                            required
                                            value={editingPost.slug}
                                            onChange={(e) => setEditingPost({ ...editingPost, slug: e.target.value })}
                                            className="w-full px-4 py-2 rounded-lg border border-[#CBD5E1] focus:ring-2 focus:ring-[#52796F] outline-none"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#334155] mb-1">Excerpt</label>
                                    <textarea
                                        required
                                        rows={2}
                                        value={editingPost.excerpt}
                                        onChange={(e) => setEditingPost({ ...editingPost, excerpt: e.target.value })}
                                        className="w-full px-4 py-2 rounded-lg border border-[#CBD5E1] focus:ring-2 focus:ring-[#52796F] outline-none"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-[#334155] mb-1">Cover Image URL</label>
                                        <input
                                            type="text"
                                            value={editingPost.coverImage || ""}
                                            onChange={(e) => setEditingPost({ ...editingPost, coverImage: e.target.value })}
                                            className="w-full px-4 py-2 rounded-lg border border-[#CBD5E1] focus:ring-2 focus:ring-[#52796F] outline-none"
                                            placeholder="https://..."
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#334155] mb-1">YouTube Video ID</label>
                                        <input
                                            type="text"
                                            value={editingPost.youtubeVideoId || ""}
                                            onChange={(e) => setEditingPost({ ...editingPost, youtubeVideoId: e.target.value })}
                                            className="w-full px-4 py-2 rounded-lg border border-[#CBD5E1] focus:ring-2 focus:ring-[#52796F] outline-none"
                                            placeholder="e.g. dQw4w9WgXcQ"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#334155] mb-1">Content (Markdown)</label>
                                    <textarea
                                        required
                                        rows={10}
                                        value={editingPost.content}
                                        onChange={(e) => setEditingPost({ ...editingPost, content: e.target.value })}
                                        className="w-full px-4 py-2 rounded-lg border border-[#CBD5E1] focus:ring-2 focus:ring-[#52796F] outline-none font-mono text-sm"
                                    />
                                </div>
                            </form>
                        </div>

                        {/* Modal Footer */}
                        <div className="px-6 py-4 border-t border-[#E2E8F0] flex justify-end gap-3 bg-[#F8FAFC]">
                            <button
                                onClick={() => setIsEditorOpen(false)}
                                className="px-4 py-2 text-[#526D82] hover:text-[#334155] font-medium"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                form="post-form"
                                className="bg-[#52796F] hover:bg-[#354F52] text-white px-6 py-2 rounded-lg font-bold flex items-center shadow-lg shadow-[#52796F]/20"
                            >
                                <Save size={18} className="mr-2" /> Save Post
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

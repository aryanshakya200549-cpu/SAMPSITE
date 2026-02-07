import mongoose from "mongoose";

export interface IBlogPost extends mongoose.Document {
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    coverImage: string;
    youtubeVideoId?: string;
    createdAt: Date;
    updatedAt: Date;
}

const BlogPostSchema = new mongoose.Schema<IBlogPost>(
    {
        title: {
            type: String,
            required: [true, "Please provide a title for this post."],
            maxlength: [100, "Title cannot be more than 100 characters"],
        },
        slug: {
            type: String,
            required: [true, "Please provide a slug"],
            unique: true,
            index: true,
        },
        content: {
            type: String,
            required: [true, "Please provide the content"],
        },
        excerpt: {
            type: String,
            required: [true, "Please provide an excerpt"],
            maxlength: [200, "Excerpt cannot be more than 200 characters"],
        },
        coverImage: {
            type: String,
            required: false,
        },
        youtubeVideoId: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.BlogPost ||
    mongoose.model<IBlogPost>("BlogPost", BlogPostSchema);

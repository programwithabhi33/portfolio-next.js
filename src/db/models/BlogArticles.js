import mongoose from "mongoose";

const blogArticleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    slug: {type: String, required: true, unique: true},
    category: { type: String },
    createdAt: { type: Date, default: Date.now },
});

export const BlogArticle = mongoose.models.BlogArticle || mongoose.model('BlogArticle', blogArticleSchema);
import mongoose from "mongoose";

const blogArticleSchema = new mongoose.Schema({
    title: String,
    description: String,
    slug: String
});

export const BlogArticle = mongoose.models.BlogArticle || mongoose.model('BlogArticle', blogArticleSchema);
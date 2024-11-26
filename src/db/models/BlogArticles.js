const blogArticleSchema = new mongoose.Schema({
    title: String,
    description: Text,
    createdAt: Date.now() 
});

export const BlogArticle = mongoose.model('BlogArticle', blogArticleSchema);
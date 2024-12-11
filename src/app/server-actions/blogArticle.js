"use server"
import { BlogArticle } from "@/db/models/BlogArticles";
import { checkConnectionBeforeMakingDBAction } from "./checkConnection";

async function getBlogArticlesFromDB(){
    return await BlogArticle.find()
}
export async function getBlogArticles(){
 return checkConnectionBeforeMakingDBAction(getBlogArticlesFromDB)
}
export async function createSampleBlogArticle(){
    let article = await new BlogArticle({title: "sample blog title", description: "sample blog description", slug: "slug"})
    article.save();
}
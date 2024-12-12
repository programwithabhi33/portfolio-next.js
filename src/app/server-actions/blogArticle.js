"use server"
import { BlogArticle } from "@/db/models/BlogArticles";
import { checkConnectionBeforeMakingDBAction } from "./checkConnection";

async function getBlogArticlesFromDB(){
    return await BlogArticle.find()
}
export async function getBlogArticles(){
 return checkConnectionBeforeMakingDBAction(getBlogArticlesFromDB)
}
async function getBlogArticlesFromSlugFromDB(slug){
    return await BlogArticle.find({slug})
}
export async function getBlogArticlesFromSlug(slug){
 return checkConnectionBeforeMakingDBAction(getBlogArticlesFromSlugFromDB, slug)
}
"use server"
import { connectToDb } from "@/db/connection";
import { BlogArticle } from "@/db/models/BlogArticles";

//await connectToDb();
export async function getBlogArticles(){
    return await BlogArticle.find()
}

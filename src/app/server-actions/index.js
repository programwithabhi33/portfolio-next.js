import { connectToDb } from "@/db/connection";
import { getBlogArticles } from "./blogArticle";

await connectToDb();
export { getBlogArticles }
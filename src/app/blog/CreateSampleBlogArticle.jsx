"use client";
import { createSampleBlogArticle } from "../server-actions/blogArticle";

const CreateSampleBlog = () => {
    const onClickFn = () => {
        createSampleBlogArticle();
    }
    return (
        <div>
            <button onClick={onClickFn}>Create Sample Blog Article</button>
        </div>
    )
}

export default CreateSampleBlog

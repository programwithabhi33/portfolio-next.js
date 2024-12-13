import { getBlogArticlesFromSlug } from '@/app/server-actions/blogArticle'
import React from 'react'
import BlogNotFound from './BlogNotFound';

const page = async ({ params }) => {
    const slug = await params.slug
    const blogArticle = await getBlogArticlesFromSlug(slug);
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            {blogArticle[0]?<div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-12">
                    <div className="p-12 md:w-full flex flex-col items-start">
                        <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">{blogArticle[0]?.title}</h2>
                        <p className="leading-relaxed mb-8">{blogArticle[0]?.content}</p>
                    </div> 
                </div>
            </div>: <BlogNotFound/>}
        </section>
    )
}

export default page

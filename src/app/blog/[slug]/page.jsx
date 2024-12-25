import { getBlogArticlesFromSlug } from '@/app/server-actions/blogArticle'
import React from 'react'
import BlogNotFound from './BlogNotFound';
import ChangeNavTitleBySlug from './ChangeNavTitleBySlug';

const page = async ({ params }) => {
    const slug = await params.slug
    const blogArticle = await getBlogArticlesFromSlug(slug);
    const markup = { __html: blogArticle[0]?.content }
    return (
        <>
            <ChangeNavTitleBySlug navTitle={blogArticle[0]?.title} />
            <section className="text-gray-600 body-font overflow-hidden overflow-x-auto">
                {blogArticle[0] ? <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap">
                        <div className="md:p-12 md:w-full flex flex-col items-start flex-wrap">
                            <div dangerouslySetInnerHTML={markup} className="flex flex-wrap leading-relaxed mb-8" />
                        </div>
                    </div>
                </div> : <BlogNotFound />}
            </section>
        </>
    )
}

export default page

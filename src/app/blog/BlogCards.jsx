import React from 'react'
import { getBlogArticles } from '../server-actions';

const BlogCards = async() => {
    const blogCardsData = await getBlogArticles();
    return (
        <div>
            <section className="text-gray-600 body-font" >
                <div className="container px-5 py-12 mx-auto">
                    {blogCardsData.map(article => {
                        return <div className="flex flex-wrap -m-4" key={article._id}>
                            <div className="p-4 w-full">
                                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-4 pb-4 rounded-lg overflow-hidden text-start relative">
                                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{article.title}</h1>
                                    <p className="leading-relaxed mb-3">{article.description}.</p>
                                    <a className="text-indigo-500 inline-flex items-center cursor-pointer">Read More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </section>
        </div>
    )
}

export default BlogCards

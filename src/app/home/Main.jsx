import Image from "next/image"
import "../../../public/css/home/main.css"

const Main = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-12 mx-auto flex flex-col">
                    <div className="lg:w-4/6 mx-auto">
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                    <Image src={'/me.jpeg'} width={150} height={150} className="rounded-lg" alt="Abhishek Biranje" />
                                </div>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Abhishek Biranje</h2>
                                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                    <p className="text-base">Passionate about computer science.</p>
                                    <p className="text-base">Also known as <b>programwithabhi</b> on the internet.</p>
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p className="leading-relaxed text-lg mb-4">
                                    I&apos;m a full-stack developer with expertise in JavaScript, NodeJS, React, and proficiency in PHP frameworks like Laravel, CodeIgniter, etc. I like to do backend, networking, and DevOps stuff as well.
                                </p>
                                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                                    <a target="__blank" href="https://github.com/programwithabhi33" className="ml-3 text-gray-500 cursor-pointer">
                                        <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38v-1.32c-2.22.48-2.69-1.07-2.69-1.07-.36-.91-.88-1.15-.88-1.15-.72-.49.06-.48.06-.48.79.06 1.21.81 1.21.81.71 1.21 1.87.86 2.33.66.07-.52.28-.86.51-1.06-1.77-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.68 7.68 0 0 1 4.01 0c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.47v2.18c0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                                        </svg>
                                    </a>
                                    <a target="__blank" href="https://linkedin.com/in/programwithabhi" className="ml-3 text-gray-500 cursor-pointer">
                                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                        </svg>
                                    </a>
                                    <a target="__blank" href="https://x.com/programwithabhi" className="ml-3 text-gray-500 cursor-pointer">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Main

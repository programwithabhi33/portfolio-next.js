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
                                    <Image src={'/me.jpeg'} width={150} height={150} className="rounded-lg" alt="Abhishek Biranje"/>
                                </div>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Abhishek Biranje</h2>
                                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                    <p className="text-base">Passionate about computer science.</p>
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p className="leading-relaxed text-lg mb-4">I&aposm full stack developer with expert in JavaScript, NodeJS, React and also proficient in PHP framework&aposs like laravel, codeigniter, etc. I like to do backend, networking and devops stuff as well.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Main

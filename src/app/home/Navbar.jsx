"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const Navbar = () => {
    const [navbarTitle, setNavbarTitle] = useState("Hi Abhishek Here!");
    const pathName = usePathname();
    useEffect(_=>{
        let navbarTitleContainVariable;
        if(pathName == "/") navbarTitleContainVariable = "Hi Abhishek Here!";
        else if(pathName == "/blog" || pathName.startsWith("/blog")) navbarTitleContainVariable = "Abhishek's Blog";
        else navbarTitleContainVariable = "Contact Abhishek";

        setNavbarTitle(navbarTitleContainVariable);
    }, [pathName])
    
    return (
        <nav className="sticky top-0 z-10 bg-white">
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
                    <span className="flex items-center text-gray-900 mb-4 md:mb-0">
                        <span className="text-xl font-semibold">{navbarTitle}</span>
                    </span>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link href={"/"} className={`mr-5 text-gray-500 hover:text-gray-900 ${pathName == "/" ? "text-indigo-500": ""}`}>Home</Link>
                        <Link href={"/blog"} className={`mr-5 text-gray-500 hover:text-gray-900 ${pathName == "/blog" || pathName.startsWith("/blog") ? "text-indigo-500": ""}`}>Blog</Link>
                        <Link href={"/contact"} className={`mr-5 text-gray-500 hover:text-gray-900 ${pathName == "/contact" ? "text-indigo-500": ""}`}>Contact Me</Link>
                    </nav>
                </div>
            </header>
        </nav>
    )
}

export default Navbar

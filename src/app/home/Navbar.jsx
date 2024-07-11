import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-10 bg-white">
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Image src={"/logo.png"} width={50} height={50} alt="LogoImage"/>
                        <span className="text-xl font-semibold uppercase">Programwithabhi</span>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link href={"/"} className="mr-5 hover:text-gray-900">Home</Link>
                        <Link href={"/blog"} className="mr-5 hover:text-gray-900">Blog</Link>
                        <Link href={"/contact"} className="mr-5 hover:text-gray-900">Contact Me</Link>
                    </nav>
                </div>
            </header>
        </nav>
    )
}

export default Navbar

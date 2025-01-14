"use client";
import { changeTitle } from "@/slices/navbar/navTitleSlice";
import { debounce } from "@/utility/functions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
const toggleDarkMode = () => {
  document.documentElement.classList.toggle("dark");
}
const Navbar = () => {
  const pathName = usePathname();
  const dispatch = useDispatch();
  const navbarRef = useRef(null);
  const darkModeRef = useRef(null);

  useEffect(() => {
    const navbarClassList = ["shadow", "shadow-md"];
    const navbar = navbarRef.current;
    const handleScroll = debounce(function () {
      if (window.scrollY > 50) {
        navbar.classList.add(...navbarClassList);
      } else {
        navbar.classList.remove(...navbarClassList);
      }
    }, 100);

    window.addEventListener("scroll", handleScroll);
    darkModeRef.current.addEventListener("click",toggleDarkMode);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if(darkModeRef.current) darkModeRef.current.removeEventListener("click", toggleDarkMode);
    };
  });

  useEffect(() => {
    let navbarTitleContainVariable;
    if (pathName == "/") {
      navbarTitleContainVariable = "Hi, Abhishek here";
    } else if (pathName == "/blog") {
      navbarTitleContainVariable = "Abhishek's blogs";
    } else if (pathName == "/contact") {
      navbarTitleContainVariable = "Contact to Abhishek";
    }
    dispatch(changeTitle(navbarTitleContainVariable));
  }, [pathName]);
  const navTitle = useSelector((state) => state.navTitle.text);
  return (
    <nav ref={navbarRef} className="sticky top-0 z-10 bg-slate-200/75 dark:bg-black">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <span className="flex items-center text-gray-900 mb-2 md:mb-0">
            <span className="text-xl font-semibold">{navTitle}</span>
          </span>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link
              href={"/"}
              className={`mr-5 text-gray-600 hover:text-gray-900 ${pathName == "/" ? "text-indigo-900 font-semibold" : ""}`}
            >
              Home
            </Link>
            <Link
              href={"/blog"}
              className={`mr-5 text-gray-600 hover:text-gray-900 ${pathName == "/blog" || pathName.startsWith("/blog") ? "text-indigo-900 font-semibold" : ""}`}
            >
              Blog
            </Link>
            <Link
              href={"/contact"}
              className={`mr-5 text-gray-600 hover:text-gray-900 ${pathName == "/contact" ? "text-indigo-900 font-semibold" : ""}`}
            >
              Contact Me
            </Link>
            <button ref={darkModeRef}>Toggle Dark Mode</button>
          </nav>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;

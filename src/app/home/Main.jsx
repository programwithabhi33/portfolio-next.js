import Image from "next/image";
import "../../../public/css/home/main.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Main = () => {
  return (
    <>
      <section className="text-gray-600 body-font bg-gradient-to-r from-sky-100 to-red-100">
        <div className="container px-5 py-12 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="w-full text-center sm:pr-8 sm:py-8">
                <div className="w-30 h-30 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <Image
                    src={"/me.jpeg"}
                    width={250}
                    height={250}
                    className="rounded-full object-contain w-[150px] h-[150px] xl:object-cover xl:w-[250px] xl:h-[250px]"
                    alt="Abhishek Biranje"
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h1 className="font-medium title-font m-4 text-gray-900 text-2xl xl:text-4xl">
                    Abhishek Biranje
                  </h1>
                  <p className="text-xl xl:text-2xl">
                    Passionate about computer science.
                  </p>
                  <p className="text-xl xl:text-2xl">
                    Also known as{" "}
                    <b className="underline decoration-indigo-500">
                      programwithabhi
                    </b>{" "}
                    on the Internet.
                  </p>
                </div>
              </div>
              <div className="flex flex-col align-center justify-center w-full sm:pl-8 sm:py-8 sm:border-l border-gray-400 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-xl xl:text-2xl mb-4">
                  I&apos;m a Full Stack Developer with expertise in{" "}
                  <span className="underline decoration-sky-500 font-medium">
                    JavaScript
                  </span>
                  ,
                  <span className="underline decoration-pink-500 font-medium">
                    NodeJS
                  </span>
                  ,{" "}
                  <span className="underline decoration-yellow-500 font-medium">
                    React
                  </span>
                  , and proficiency in{" "}
                  <span className="underline decoration-purple-500 font-medium">
                    PHP
                  </span>{" "}
                  frameworks like{" "}
                  <span className="underline decoration-rose-500 font-medium">
                    Laravel
                  </span>
                  ,{" "}
                  <span className="underline decoration-lime-500 font-medium">
                    CodeIgniter
                  </span>
                  , etc. I like to do Backend, Networking, and DevOps stuff as
                  well.
                </p>
                <span className="inline-flex sm:mt-0 mt-4 justify-center sm:justify-start">
                  <p className="text-xs xl:text-sm font-medium title-font grid items-center text-gray-500/75">
                    checkout my social links here
                  </p>
                  <div className="grid items-center mr-2">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </div>
                  <a
                    target="__blank"
                    href="https://github.com/programwithabhi33"
                    className="text-gray-500 cursor-pointer grid items-center"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                  <a
                    target="__blank"
                    href="https://linkedin.com/in/programwithabhi"
                    className="ml-3 text-gray-500 cursor-pointer grid items-center"
                  >
                    <FaLinkedin className="text-2xl" />
                  </a>
                  <a
                    target="__blank"
                    href="https://x.com/programwithabhi"
                    className="ml-3 text-gray-500 cursor-pointer grid items-center"
                  >
                    <FaXTwitter className="text-2xl" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;

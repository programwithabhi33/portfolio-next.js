import { GiProgression } from "react-icons/gi";
export const AboutMyResumeAndMore = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-4 mx-auto flex flex-wrap">
        <div className="md:w-1/2 w-full my-4 px-4">
          <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2">
            My Resume
          </h2>
          <p className="leading-relaxed text-base">
            Highly skilled and enthusiastic Full Stack Developer with 5+ years
            of problem solving and hands on coding expereince.
          </p>
          <a target="__blank" href="/files/my-resume.pdf" className="text-indigo-500 inline-flex items-center cursor-pointer my-2 px-2 border rounded boarder-2 border-gray-400 hover:bg-gray-500 hover:text-gray-100 transition delay-200 ease-in-out hover:scale-105 duration-300">
            Check out my resume here
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
          </a>
        </div>
        <div className="md:w-1/2 w-full my-4 px-4 flex items-center justify-center">
          <GiProgression className="text-2xl" />
          <p className="leading-relaxed mx-2 text-base">
            Bachelor of Computer Science
          </p>
        </div>
      </div>
    </section>
  );
};

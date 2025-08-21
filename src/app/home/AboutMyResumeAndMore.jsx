import { GiProgression } from "react-icons/gi";
import { MyResumeModalUtility } from "./MyResumeModalUtility";
export const AboutMyResumeAndMore = () => {
  return (
    <>
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
            <MyResumeModalUtility />
          </div>
          <div className="md:w-1/2 w-full my-4 px-4 flex items-center justify-center">
            <GiProgression className="text-2xl" />
            <p className="leading-relaxed mx-2 text-base">
              Bachelor of Computer Science
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export const AboutMyResumeAndMore = () => {
  return (
    <section className="text-gray-600 body-font border-t-2 border-gray-200 border-opacity-60">
      <div className="container px-5 py-4 mx-auto flex flex-wrap">
        <div className="md:w-1/2 w-full my-4 px-4">
          <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2">
            My Resume
          </h2>
          <p className="leading-relaxed text-base">
            Highly skilled and enthusiastic Full Stack Developer with 5+ years
            of problem solving and hands on coding expereince.
          </p>
          <a className="text-indigo-500 inline-flex items-center cursor-pointer my-2 px-2 border rounded boarder-2 border-gray-400 hover:bg-gray-500 hover:text-gray-100 transition delay-200 ease-in-out hover:scale-105 duration-300">
            Check out my resume here
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div className="md:w-1/2 w-full my-4 px-4">
          <p className="leading-relaxed text-base">
            Taxidermy bushwick celiac master cleanse microdosing seitan. Fashion
            axe four dollar toast truffaut, direct trade kombucha brunch
            williamsburg keffiyeh gastropub tousled squid meh taiyaki drinking
            vinegar tacos.
          </p>
        </div>
      </div>
    </section>
  );
};

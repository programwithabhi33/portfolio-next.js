export const ProjectContribution = () => {
  return (
    <section className="text-gray-600 body-font bg-gradient-to-r from-yellow-100/50 to-indigo-100">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-col flex-wrap w-full mb-20 justify-center align-center">
          <div className="text-center w-full mb-4 lg:mb-0">
            <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Project Contributions
            </h2>
          </div>
          <p className="lg:w-2/3 w-full mx-auto leading-relaxed text-gray-500 text-center">
            I have contributed to a variety of projects with different modules
            and features. Here are some of the projects I have worked on:
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow shadow-lg">
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                SiloCloud
              </h2>
              <p className="leading-relaxed text-base">
                A cloud management platform with varieties of features and
                modules like storage, chat, social media, event management,
                subscription module and many more of related to cloud things.
              </p>
              <a
                className="cursor-pointer mt-3 text-indigo-500 inline-flex items-center transition delay-400 ease-in-out hover:scale-110 duration-300"
                href="https://silocloud.com"
                target="__blank"
              >
                Visit Here
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
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow shadow-lg">
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Storage | SiloCloud
              </h2>
              <p className="leading-relaxed text-base">
                A storage management platform with features like file upload,
                download, delete, share, etc. with a user-friendly interface
                using react and backend with Laravel and own file management
                system.
              </p>
              <a
                className="cursor-pointer mt-3 text-indigo-500 inline-flex items-center transition delay-400 ease-in-out hover:scale-110 duration-300"
                href="https://storage.silocloud.io"
                target="__blank"
              >
                Visit Here
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
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow shadow-lg">
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                SiloTalk
              </h2>
              <p className="leading-relaxed text-base">
                A chat application with features like one-to-one and group
                chat with file sharing and emojis and also video calling feature using
                React meta framework (Next.js) and Firebase modules{" "}
              </p>
              <a
                className="cursor-pointer mt-3 text-indigo-500 inline-flex items-center transition delay-400 ease-in-out hover:scale-110 duration-300"
                href="https://talk.silocloud.io"
                target="__blank"
              >
                Visit Here
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
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow shadow-lg">
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                TheRealFlow
              </h2>
              <p className="leading-relaxed text-base">
                A Music distribution platform with features like managing
                artist&apos;s, talent aquasitions, etc,. with highly custimized
                revenue module using PHP framework CodeIgniter and MySQL.
              </p>
              <a
                className="cursor-pointer mt-3 text-indigo-500 inline-flex items-center transition delay-400 ease-in-out hover:scale-110 duration-300"
                href="https://therealflow.com"
                target="__blank"
              >
                Visit Here
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
          </div>
        </div>
      </div>
    </section>
  );
};

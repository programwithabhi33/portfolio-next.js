export const WhatIDo = () => {
  return (
    <section className="text-gray-600 body-font border-t-2 border-b-2 border-gray-200 border-opacity-80 bg-gradient-to-r from-fuchsia-100 to-cyan-100">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            What I Do
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            I’m not just a developer—I’m a creator of digital solutions. With
            expertise in full-stack development, cloud integrations, and DevOps,
            I transform ideas into robust and impactful applications. Whether
            it's crafting seamless user experiences, optimizing backend systems,
            or integrating AI, I thrive on solving complex challenges with
            innovative technology.{" "}
          </p>
        </div>
        <div className="flex flex-wrap">
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-300 border-opacity-80">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Frontend Development
            </h2>
            <p className="leading-relaxed text-base mb-4">
              I specialize in building responsive, user-friendly interfaces with
              React with Next.js, and Tailwind CSS. From dynamic web applications to
              interactive mobile experiences, I create seamless digital
              solutions that captivate users and drive engagement.
            </p>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-300 border-opacity-80">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Backend Development
            </h2>
            <p className="leading-relaxed text-base mb-4">
              I build scalable backend systems with Node.js, Express with 
              MongoDB and MySQL. From RESTful APIs to microservices, I architect
              high-performance solutions that power applications with speed and
              reliability. I also have experience with PHP and Python frameworks like
              Laravel, CodeIgniter and Django.
            </p>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-300 border-opacity-80">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Cloud Integrations 
            </h2>
            <p className="leading-relaxed text-base mb-4">
              I leverage cloud services like Google Cloud to
              deploy, scale, and secure applications (also exploring AWS). From serverless
              architectures to containerized solutions, I optimize cloud
              infrastructure to deliver high availability and performance.
            </p>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 xl:border-r-2 border-gray-300 border-opacity-80">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Computer Networking
            </h2>
            <p className="leading-relaxed text-base mb-4">
              I have hands-on experience with network design, configuration, and
              troubleshooting. From setting up secure VPNs to optimizing
              network performance, I ensure seamless connectivity and
              reliability for applications and users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

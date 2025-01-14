"use client";
import { useState, useRef, useEffect } from "react";

export const MyResumeModalUtility = () => {
  const [openResumeModal, setOpenResumeModal] = useState(false);
  const toggleModal = (value) => {
    setOpenResumeModal(value);
  };

  return (
    <>
      <a
        className="text-indigo-500 inline-flex items-center cursor-pointer my-2 px-2 border rounded boarder-2 border-gray-400 hover:bg-gray-500 hover:text-gray-100 transition delay-200 ease-in-out hover:scale-105 duration-300"
        onClick={(e) => {
          e.preventDefault();
          toggleModal(!openResumeModal);
        }}
      >
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
      <MyResumeModal
        openResumeModal={openResumeModal}
        toggleModal={toggleModal}
      />
    </>
  );
};

export const MyResumeModal = ({ openResumeModal, toggleModal }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const modal = modalRef.current;
    if (openResumeModal) {
      modal.classList.remove("hidden");
      setTimeout(() => {
        if (modal.classList.contains("opacity-0", "scale-95")) {
          modal.classList.remove("opacity-0", "scale-95");
        }
        modal.classList.add("opacity-100", "scale-100");
      }, 10);
    } else {
      if (modal.classList.contains("opacity-100", "scale-100")) {
        modal.classList.remove("opacity-100", "scale-100");
      }
      modal.classList.add("opacity-0", "scale-95");
      setTimeout(() => {
        modal.classList.add("hidden");
      }, 300);
    }
  }, [openResumeModal]);

  return (
    <div
      ref={modalRef}
      id="resumeModal"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 hidden opacity-0 transform scale-95 transition-opacity transition-transform duration-300"
    >
      <div className="bg-white rounded-lg shadow-xl w-11/12 md:w-3/4 lg:w-1/2 h-3/4">
        <div className="flex justify-between items-center py-2 px-4">
          <h2 className="text-xl font-semibold">My Resume</h2>
          <button
            id="closeModal"
            className="text-gray-500 hover:text-gray-700 text-2xl"
            onClick={(_) => toggleModal(false)}
          >
            &times;
          </button>
        </div>
        <div className="p-4 h-[calc(100%-65px)]">
          <iframe src="/files/my-resume.pdf" className="w-full h-full"></iframe>
        </div>
      </div>
    </div>
  );
};

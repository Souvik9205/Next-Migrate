import React from "react";
import WorkBody from "../Extra components/WorkBody";

function Portfolio() {
  return (
    <div>
      <section className="bg-secondary py-[120px]">
        <div className="container">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12" data-aos="fade-up">
              <div className="font-bold font-Syne text-center leading-none flex flex-wrap flex-col gap-y-2 mb-10">
                <span className="text-orange text-xl">Portfolio</span>
                <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                  My recent
                  <span className="relative z-[1] before:rounded-full before:bg-primary before:block before:absolute before:top-[4px] before:left-[-6px] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">
                    w
                  </span>
                  ork
                </h3>
              </div>
            </div>
            <div className="col-span-12">
              <WorkBody />
            </div>
          </div>
          <div className="col-span-12 mt-12" data-aos="fade-up">
            <div className="flex group">
              <a
                href="/projects"
                className="flex items-center justify-center flex-wrap btn-primary grow"
              >
                View All Project
                <span className="inline-block ml-3 group-hover:animate-arrow-move-up">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7"
                      stroke="currentColor"
                      strokeOpacity="0.9"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 7H17V17"
                      stroke="currentColor"
                      strokeOpacity="0.9"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;

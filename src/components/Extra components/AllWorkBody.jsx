"use client";
import React, { useEffect, useState } from "react";
import { builder } from "@builder.io/sdk";

builder.init("c6deead7e9874e8fbd32018bf8815dca");

const WorkBodyAll = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    async function fetchContent() {
      try {
        const data = await builder.getAll("projects", {
          prerender: false,
        });
        setProject(data);
      } catch (error) {
        console.error("Error fetching Builder.io content:", error);
      }
    }
    fetchContent();
  }, []);
  if (project == 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="grid grid-cols-12 gap-6">
      {project.map((post) => {
        const { title, category, img } = post.data;
        return (
          <div
            key={post.id}
            className="col-span-12 md:col-span-6 lg:col-span-5 justify-around"
            data-aos="flip-down"
          >
            <div className="overflow-hidden relative rounded-[20px] group before:absolute before:left-0 before:right-0 before:contents before:bg-black-600 before:w-full before:h-full before:opacity-0 hover:before:opacity-80 before:transition-opacity before:duration-300 h-full">
              <img
                className="w-full h-full"
                src={img || "assets/images/projects/project1.png"}
                alt="project1"
              />
              <div className="absolute bottom-[-150px] left-6 right-6 transition-all duration-300 group-hover:bottom-6">
                <div className="flex flex-wrap items-center justify-between text-white hover:text-orange group">
                  <h4 className="font-bold font-Syne text-center leading-10 text-[17px] sm:text-[20px] xl:text-[24px] 2xl:text-[28px] capitalize peer">
                    <a className="transition-all" href="/project-details">
                      {title}
                    </a>
                  </h4>
                  <a
                    href="/project-details"
                    className="peer-hover:animate-arrow-move-up"
                  >
                    <svg
                      width={40}
                      height={40}
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M30.8839 9.11612C31.372 9.60427 31.372 10.3957 30.8839 10.8839L10.8839 30.8839C10.3957 31.372 9.60427 31.372 9.11612 30.8839C8.62796 30.3957 8.62796 29.6043 9.11612 29.1161L29.1161 9.11612C29.6043 8.62796 30.3957 8.62796 30.8839 9.11612Z"
                        fill="currentColor"
                        fillOpacity="0.9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.5 10C12.5 9.30964 13.0596 8.75 13.75 8.75H30C30.6904 8.75 31.25 9.30964 31.25 10V26.25C31.25 26.9404 30.6904 27.5 30 27.5C29.3096 27.5 28.75 26.9404 28.75 26.25V11.25H13.75C13.0596 11.25 12.5 10.6904 12.5 10Z"
                        fill="currentColor"
                        fillOpacity="0.9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default WorkBodyAll;

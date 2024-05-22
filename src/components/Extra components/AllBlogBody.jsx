"use client";
import React, { useEffect, useState } from "react";
import { builder } from "@builder.io/sdk";

builder.init("c6deead7e9874e8fbd32018bf8815dca");

const BuilderBlogAll = () => {
  const [blogContent, setBlogContent] = useState([]);

  useEffect(() => {
    async function fetchContent() {
      try {
        const data = await builder.getAll("blog", {
          prerender: false,
        });
        setBlogContent(data);
        // console.log(data);
      } catch (error) {
        console.error("Error fetching Builder.io content:", error);
      }
    }
    fetchContent();
  }, []);

  if (blogContent == 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {blogContent.map((post) => {
        const { title, category, date, img } = post.data; // Accessing nested properties in data
        return (
          <div key={post.id} data-aos="zoom-in-up">
            <div
              data-aos="zoom-in-up"
              className="rounded-[20px] overflow-hidden mb-6"
            >
              <img
                className="w-full h-48 object-cover m-3 rounded-xl" // Fixed size and object-fit to maintain aspect ratio
                src={img || "assets/images/blog/blog1.png"} // Fallback image
                alt="blog image"
              />
              <div className="flex flex-wrap flex-col gap-3">
                <ul className="flex flex-wrap text-sm font-normal font-Inter leading-tight">
                  <li className="relative z-[1] before:rounded-full before:bg-black-800 before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[15px] before:-z-[1] before:w-[8px] before:h-[8px] pl-[30px]">
                    <a className="text-black-text-800" href="#">
                      {category}
                    </a>
                  </li>
                  <li className="relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[15px] before:-z-[1] before:w-[8px] before:h-[8px] pl-[30px]">
                    <a className="text-orange" href="#">
                      {date}
                    </a>
                  </li>
                </ul>
                <div className="flex justify-between items-end text-black-800 hover:text-orange group">
                  <h4 className="font-bold font-Syne transition-all leading-8 text-[18px] md:text-[20px] 2xl:text-[22px]">
                    <a href="/blog-details">{title}</a>
                  </h4>
                  <a
                    href="/blog-details"
                    className="group-hover:animate-arrow-move-up"
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
export default BuilderBlogAll;

import React from "react";
import BuilderBlog from "../Extra components/BlogBody";

function Blog() {
  return (
    <div>
      <section className="bg-white py-[120px]">
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-12" data-aos="fade-up">
              <div className="font-bold font-Syne text-center leading-none flex flex-wrap flex-col gap-y-2 mb-10">
                <span className="text-orange text-xl">Blog</span>
                <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                  My blog
                  <span className="relative z-[1] before:rounded-full before:bg-primary before:block before:absolute before:top-[8px] before:left-[20px] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[69px] before:h-[36px] lg:before:h-[48px] xl:before:h-[69px]">
                    po
                  </span>
                  st
                </h3>
              </div>
            </div>
          </div>
          <BuilderBlog />
        </div>
      </section>
    </div>
  );
}

export default Blog;

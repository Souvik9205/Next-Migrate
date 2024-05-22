import React from "react";
import WorkBody from "../Extra components/WorkBody";

function Work() {
  return (
    <div>
      <section className="bg-white pb-[120px]">
        <div className="container">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12" data-aos="flip-down">
              <div className="font-bold font-Syne text-center leading-none flex flex-wrap flex-col gap-y-2 mb-10">
                <span className="text-orange text-xl">Portfolio</span>
                <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                  Related{" "}
                  <span className="relative z-[1] before:rounded-full before:bg-primary before:block before:absolute before:top-[8px] before:left-[32px] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">
                    wo
                  </span>
                  rk
                </h3>
              </div>
            </div>
            <div className="col-span-12">
              <WorkBody />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Work;

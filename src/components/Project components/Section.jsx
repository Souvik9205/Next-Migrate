import React from "react";
import WorkBodyAll from "../Extra components/AllWorkBody";

function Section() {
  return (
    <div>
      <section className="bg-white pt-20 pb-[120px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-6">
            <div
              className="col-span-12"
              data-aos="flip-down"
              data-aos-delay={400}
            >
              <div className="font-bold font-Syne text-center leading-none flex flex-wrap flex-col gap-y-2 mb-10">
                <span className="text-orange text-xl">Portfolio</span>
                <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                  My recent{" "}
                  <span className="relative z-[1] before:rounded-full before:bg-primary before:block before:absolute before:top-[4px] before:left-[-6px] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">
                    w
                  </span>
                  ork
                </h3>
              </div>
            </div>
          </div>
          <WorkBodyAll />
        </div>
      </section>
    </div>
  );
}

export default Section;

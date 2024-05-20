"use clent";
import React from "react";
import TestimonalBody from "../Extra components/TestimonalBody";

function Testimonals() {
  return (
    <div>
      <section className="bg-white py-[120px] testimonial" data-aos="fade-up">
        <div className="px-8 xl:pr-0 xl:pl-[4%] 2xl:pl-[6%] 3xl:pl-[17%]">
          <div className="font-bold font-Syne leading-none flex flex-wrap flex-col gap-y-2 md:text-center xl:text-left mb-10">
            <span className="text-orange text-xl">Testimonial</span>
            <h3 className="inline-block text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
              <span className="relative z-[1] before:rounded-full before:bg-primary before:block before:absolute before:top-[4px] before:left-[-2px] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">
                Cl
              </span>
              ient <br className="hidden xl:inline-block" />
              feedback
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonals;

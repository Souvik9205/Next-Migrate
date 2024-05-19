import React from "react";

function Tab() {
  return (
    <div>
      <section className="featured-properties py-[80px] lg:py-[100px]">
        <div className="container" data-aos="zoom-out">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="font-bold font-Syne text-center leading-none flex flex-wrap flex-col gap-y-2 mb-4">
                <span className="text-orange text-xl">Resume</span>
                <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                  All over my details find he
                  <span className="relative before:rounded-full before:bg-primary before:block before:absolute before:top-[8px] before:left-[15px] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">
                    re.
                  </span>
                  ..
                </h3>
              </div>
              <div className="tabs flex flex-wrap justify-center gap-4 mt-8 mb-14">
                <button
                  data-tab="about_me_tab"
                  className="tab-btn justify-between items-center inline-flex group active"
                >
                  About me
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
                </button>
                <button
                  data-tab="experience_tab"
                  className="tab-btn justify-between items-center inline-flex group"
                >
                  Experience
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
                </button>
                <button
                  data-tab="education_tab"
                  className="tab-btn justify-between items-center inline-flex group"
                >
                  Education
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
                </button>
                <button
                  data-tab="skills_tab"
                  className="tab-btn justify-between items-center inline-flex group"
                >
                  Skills
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
                </button>
                <button
                  data-tab="awards_tab"
                  className="tab-btn justify-between items-center inline-flex group"
                >
                  Awards
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
                </button>
              </div>
            </div>
            <div className="col-span-12">
              <div id="about_me_tab" className="tab-content active relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-0">
                  <img src="assets/images/about/about3.png" alt="about me" />
                  <div>
                    <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">
                      Based in German
                    </h4>
                    <p className="paragraph mb-7">
                      Mark Henry,
                      <span className="text-black-800">Product Designer</span>,
                      based in German. That is where I come in. A lover of
                      words, a wrangler of copy. Here to create copy that not
                      only reflects who you are and what you stand for,
                    </p>
                    <p className="paragraph mb-14">
                      but words that truly land with those that read them,
                      calling your audience in and making them want more.
                    </p>
                    <ul className="flex-col gap-3 inline-flex">
                      <li className="gap-10 inline-flex items-center">
                        <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                          Name
                        </span>
                        <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                          Mark Henry
                        </span>
                      </li>
                      <li className="gap-10 inline-flex items-center">
                        <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                          Nationality
                        </span>
                        <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                          Germany
                        </span>
                      </li>
                      <li className="gap-10 inline-flex items-center">
                        <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                          Phone
                        </span>
                        <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                          +(2) 870 174 302
                        </span>
                      </li>
                      <li className="gap-10 inline-flex items-center">
                        <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                          Email
                        </span>
                        <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                          hello@henry.com
                        </span>
                      </li>
                      <li className="gap-10 inline-flex items-center">
                        <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                          Experience
                        </span>
                        <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                          12+ years
                        </span>
                      </li>
                      <li className="gap-10 inline-flex items-center">
                        <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                          Freelance
                        </span>
                        <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                          Available
                        </span>
                      </li>
                      <li className="gap-10 inline-flex items-center">
                        <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                          Skype
                        </span>
                        <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                          henry.halk23
                        </span>
                      </li>
                      <li className="gap-10 inline-flex items-center">
                        <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                          Language
                        </span>
                        <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                          German, English
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="experience_tab" className="tab-content relative">
                <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">
                  Experience
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                  <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap flex-col gap-8 justify-between">
                    <span className="text-sm font-normal font-Inter leading-tight text-black-text-800">
                      03/216 – Running
                    </span>
                    <div>
                      <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                        Axtra
                      </p>
                      <h4 className="font-bold font-Syne leading-normal text-2xl text-black-800">
                        Lead digital marketer
                      </h4>
                    </div>
                  </div>
                  <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap flex-col gap-8 justify-between">
                    <span className="text-sm font-normal font-Inter leading-tight text-black-text-800">
                      03/2008 – 07/2011
                    </span>
                    <div>
                      <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                        Axtra
                      </p>
                      <h4 className="font-bold font-Syne leading-normal text-2xl text-black-800">
                        JavaScript developer
                      </h4>
                    </div>
                  </div>
                  <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap flex-col gap-8 justify-between">
                    <span className="text-sm font-normal font-Inter leading-tight text-black-text-800">
                      03/2008 – 07/2011
                    </span>
                    <div>
                      <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                        Axtra
                      </p>
                      <h4 className="font-bold font-Syne leading-normal text-2xl text-black-800">
                        Product designer
                      </h4>
                    </div>
                  </div>
                  <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap flex-col gap-8 justify-between">
                    <span className="text-sm font-normal font-Inter leading-tight text-black-text-800">
                      03/2008 – 07/2011
                    </span>
                    <div>
                      <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                        Axtra
                      </p>
                      <h4 className="font-bold font-Syne leading-normal text-2xl text-black-800">
                        UX researcher
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div id="education_tab" className="tab-content">
                <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">
                  Education
                </h4>
                <div className="grid grid-cols-1 gap-6">
                  <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-[30px] md:gap-[60px] lg:gap-[104px]">
                    <span className="text-sm font-normal font-Inter leading-tight text-black-text-800">
                      003/2008 – 07/2011
                    </span>
                    <div className="flex-1">
                      <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                        Axtra
                      </p>
                      <h4 className="font-bold font-Syne leading-normal text-2xl text-black-800">
                        BA Business Management
                      </h4>
                    </div>
                  </div>
                  <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-[30px] md:gap-[60px] lg:gap-[104px]">
                    <span className="text-sm font-normal font-Inter leading-tight text-black-text-800">
                      03/2008 – 07/2011
                    </span>
                    <div className="flex-1">
                      <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                        Axtra
                      </p>
                      <h4 className="font-bold font-Syne leading-normal text-2xl text-black-800">
                        BA Business Management
                      </h4>
                    </div>
                  </div>
                  <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-[30px] md:gap-[60px] lg:gap-[104px]">
                    <span className="text-sm font-normal font-Inter leading-tight text-black-text-800">
                      03/2008 – 07/2011
                    </span>
                    <div className="flex-1">
                      <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                        Axtra
                      </p>
                      <h4 className="font-bold font-Syne leading-normal text-2xl text-black-800">
                        BA Business Management
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div id="skills_tab" className="tab-content">
                <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">
                  Skills
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                  <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                    <img
                      className="items-start"
                      src="assets/images/skills/vs-code.png"
                      alt="icons"
                    />
                    <div className="flex flex-wrap gap-1 flex-1 flex-col">
                      <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">
                        React JS
                      </h4>
                      <p className="text-sm font-normal font-Inter leading-none text-black-800">
                        (90%)
                      </p>
                    </div>
                  </div>
                  <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                    <img
                      className="items-start"
                      src="assets/images/skills/figma.png"
                      alt="icons"
                    />
                    <div className="flex flex-wrap gap-1 flex-1 flex-col">
                      <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">
                        Figma
                      </h4>
                      <p className="text-sm font-normal font-Inter leading-none text-black-800">
                        (70%)
                      </p>
                    </div>
                  </div>
                  <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                    <img
                      className="items-start"
                      src="assets/images/skills/framer.png"
                      alt="icons"
                    />
                    <div className="flex flex-wrap gap-1 flex-1 flex-col">
                      <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">
                        Framer
                      </h4>
                      <p className="text-sm font-normal font-Inter leading-none text-black-800">
                        (80%)
                      </p>
                    </div>
                  </div>
                  <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                    <img
                      className="items-start"
                      src="assets/images/skills/framer.png"
                      alt="icons"
                    />
                    <div className="flex flex-wrap gap-1 flex-1 flex-col">
                      <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">
                        Framer
                      </h4>
                      <p className="text-sm font-normal font-Inter leading-none text-black-800">
                        (80%)
                      </p>
                    </div>
                  </div>
                  <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                    <img
                      className="items-start"
                      src="assets/images/skills/framer.png"
                      alt="icons"
                    />
                    <div className="flex flex-wrap gap-1 flex-1 flex-col">
                      <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">
                        Framer
                      </h4>
                      <p className="text-sm font-normal font-Inter leading-none text-black-800">
                        (80%)
                      </p>
                    </div>
                  </div>
                  <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                    <img
                      className="items-start"
                      src="assets/images/skills/framer.png"
                      alt="icons"
                    />
                    <div className="flex flex-wrap gap-1 flex-1 flex-col">
                      <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">
                        Framer
                      </h4>
                      <p className="text-sm font-normal font-Inter leading-none text-black-800">
                        (80%)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="awards_tab" className="tab-content">
                <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">
                  Awards
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-8 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white group flex flex-wrap flex-col gap-8">
                    <div className="flex items-start justify-between">
                      <img src="assets/images/awards/w-dot.png" alt="icons" />
                      <span className="font-normal text-sm font-Inter text-black-text-800">
                        2018
                      </span>
                    </div>
                    <div>
                      <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                        Winner
                      </p>
                      <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">
                        01X Developer Award
                      </h4>
                    </div>
                  </div>
                  <div className="p-8 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white group flex flex-wrap flex-col gap-8">
                    <div className="flex items-start justify-between">
                      <img src="assets/images/awards/webby.png" alt="icons" />
                      <span className="font-normal text-sm font-Inter text-black-text-800">
                        2018
                      </span>
                    </div>
                    <div>
                      <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                        Winner
                      </p>
                      <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">
                        01X Developer Award
                      </h4>
                    </div>
                  </div>
                  <div className="p-8 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white group flex flex-wrap flex-col gap-8">
                    <div className="flex items-start justify-between">
                      <img src="assets/images/awards/fwa.png" alt="icons" />
                      <span className="font-normal text-sm font-Inter text-black-text-800">
                        2018
                      </span>
                    </div>
                    <div>
                      <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                        Winner
                      </p>
                      <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">
                        01X Developer Award
                      </h4>
                    </div>
                  </div>
                  <div className="p-8 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white group flex flex-wrap flex-col gap-8">
                    <div className="flex items-start justify-between">
                      <img
                        src="assets/images/awards/wordpress.png"
                        alt="icons"
                      />
                      <span className="font-normal text-sm font-Inter text-black-text-800">
                        2018
                      </span>
                    </div>
                    <div>
                      <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                        Winner
                      </p>
                      <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">
                        01X Developer Award
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tab;

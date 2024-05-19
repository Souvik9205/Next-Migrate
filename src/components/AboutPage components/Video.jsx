import React from "react";

function Video() {
  return (
    <div>
      <div className="bg-white pb-[120px]">
        <div className="container">
          <div className="grid grid-cols-1">
            <div className="relative" data-aos="zoom-in-up">
              <img
                className="rounded-2xl"
                src="assets/images/video/video.png"
                alt="video image"
              />
              <a
                href="https://www.youtube.com/watch?v=mSC6GwizOag&ab_channel=TailwindLabs"
                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 play-button transition-all duration-200 hover:scale-105 group"
              >
                <svg
                  width={100}
                  height={100}
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="fill-primary group-hover:fill-yellow transition-all duration-300"
                    cx={50}
                    cy={50}
                    r={50}
                  />
                  <path
                    className="stroke-black-800 group-hover:stroke-white"
                    d="M43 41L57 50L43 59V41Z"
                    strokeOpacity="0.9"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;

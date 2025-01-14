"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";
import { builder } from "@builder.io/sdk";
import "swiper/css";

builder.init("c6deead7e9874e8fbd32018bf8815dca");

const TestimonalBody = () => {
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    async function fetchContent() {
      try {
        const data = await builder.getAll("feedbacks", {
          prerender: false,
        });
        setFeedback(data);
        // console.log(data);
      } catch (error) {
        console.error("Error fetching Builder.io content:", error);
      }
    }
    fetchContent();
  }, []);

  if (!feedback) {
    return <div>Loading...</div>;
  }

  return (
    <Swiper
      breakpoints={{
        576: {
          slidesPerView: 2,
          spaceBetween: 45,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 45,
        },
      }}
      className="pt-20 w-full"
    >
      {feedback.map((item) => {
        const { title, description, clientName } = item.data;
        return (
          <SwiperSlide key={item.id}>
            <span className="inline-block mb-5 sm:mb-8">
              <svg
                width={48}
                height={48}
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.75 13.5L21.75 30C21.7475 32.3862 20.7985 34.6739 19.1112 36.3612C17.4239 38.0485 15.1362 38.9975 12.75 39C12.3522 39 11.9706 38.842 11.6893 38.5607C11.408 38.2794 11.25 37.8978 11.25 37.5C11.25 37.1022 11.408 36.7206 11.6893 36.4393C11.9706 36.158 12.3522 36 12.75 36C14.3413 36 15.8674 35.3679 16.9926 34.2426C18.1179 33.1174 18.75 31.5913 18.75 30V28.5H7.5C6.70435 28.5 5.94129 28.1839 5.37868 27.6213C4.81607 27.0587 4.5 26.2956 4.5 25.5L4.5 13.5C4.5 12.7044 4.81607 11.9413 5.37868 11.3787C5.94129 10.8161 6.70435 10.5 7.5 10.5L18.75 10.5C19.5456 10.5 20.3087 10.8161 20.8713 11.3787C21.4339 11.9413 21.75 12.7044 21.75 13.5ZM40.5 10.5H29.25C28.4544 10.5 27.6913 10.8161 27.1287 11.3787C26.5661 11.9413 26.25 12.7044 26.25 13.5L26.25 25.5C26.25 26.2956 26.5661 27.0587 27.1287 27.6213C27.6913 28.1839 28.4544 28.5 29.25 28.5H40.5V30C40.5 31.5913 39.8679 33.1174 38.7426 34.2426C37.6174 35.3679 36.0913 36 34.5 36C34.1022 36 33.7206 36.158 33.4393 36.4393C33.158 36.7206 33 37.1022 33 37.5C33 37.8978 33.158 38.2794 33.4393 38.5607C33.7206 38.842 34.1022 39 34.5 39C36.8862 38.9975 39.1739 38.0485 40.8612 36.3612C42.5485 34.6739 43.4975 32.3862 43.5 30V13.5C43.5 12.7044 43.1839 11.9413 42.6213 11.3787C42.0587 10.8161 41.2957 10.5 40.5 10.5Z"
                  fill="#080808"
                  fillOpacity="0.9"
                />
              </svg>
            </span>
            <h3 className="text-black-text-800 text-[16px] sm:text-lg xl:text-xl font-bold font-Syne leading-7 mb-4">
              {title}
            </h3>
            <p className="text-black-text-800 text-[16px] sm:text-lg xl:text-xl font-bold font-Syne leading-7 mb-4">
              {description}
            </p>
            <h4 className="flex flex-wrap items-center gap-4 text-black-800 text-[16px] sm:text-lg font-extrabold font-Syne leading-7">
              <span>
                <svg
                  width={48}
                  height={2}
                  viewBox="0 0 48 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 1H48" stroke="#080808" strokeOpacity="0.4" />
                </svg>
              </span>
              {clientName}
            </h4>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonalBody;

import React from "react";

function Brand() {
  return (
    <div>
      <div className="bg-white brandCarousel" data-aos="flip-down">
        <div className="container">
          <div className="swiper py-6 border-t border-b border-black-text-100">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img
                  className="mx-auto block"
                  src="assets/images/brand/logo1.svg"
                  alt=" brandlogo"
                />
              </div>
              <div className="swiper-slide">
                <img
                  className="mx-auto block"
                  src="assets/images/brand/logo2.svg"
                  alt=" brandlogo"
                />
              </div>
              <div className="swiper-slide">
                <img
                  className="mx-auto block"
                  src="assets/images/brand/logo3.svg"
                  alt=" brandlogo"
                />
              </div>
              <div className="swiper-slide">
                <img
                  className="mx-auto block"
                  src="assets/images/brand/logo4.svg"
                  alt=" brandlogo"
                />
              </div>
              <div className="swiper-slide">
                <img
                  className="mx-auto block"
                  src="assets/images/brand/logo5.svg"
                  alt=" brandlogo"
                />
              </div>
              <div className="swiper-slide">
                <img
                  className="mx-auto block"
                  src="assets/images/brand/logo6.svg"
                  alt=" brandlogo"
                />
              </div>
              <div className="swiper-slide">
                <img
                  className="mx-auto block"
                  src="assets/images/brand/logo3.svg"
                  alt=" brandlogo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brand;

import React from "react";
import Style from "../components/Style";
import Header from "../components/page components/Header";
import OffsetMenu from "../components/page components/OffsetMenu";
import Hero from "../components/page components/Hero";
import Service from "../components/page components/Service";
import About from "../components/page components/About";
import Section from "../components/page components/Section";
import Portfolio from "../components/page components/Portfolio";
import Testimonals from "../components/page components/Testimonals";
import Brand from "../components/page components/Brand";
import Blog from "../components/page components/Blog";
import Pricing from "../components/page components/Pricing";
import Footer from "../components/page components/Footer";
import TestimonalBody from "../components/Extra components/TestimonalBody";

const page = () => {
  return (
    <>
      <Style />
      <div className="overflow-x-hidden">
        {/* Header */}
        <Header />
        <OffsetMenu />

        {/* Hero */}
        <Hero />

        {/* Service */}
        <Service />

        {/* About */}
        <About />

        {/* Section */}
        <Section />

        {/* Portfolio */}
        <Portfolio />

        {/* Testimonals */}
        <div className="flex flex-col my-5 pl-10 ml-10 xl:flex-row gap-x-[55px] 2xl:gap-x-[100px] 3xl:gap-x-[165px]">
          <Testimonals />
          <TestimonalBody />
        </div>

        {/* Brand */}
        <div className="bg-white " data-aos="flip-down">
          <div className="container">
            <Brand />
          </div>
        </div>

        {/* Blog */}
        <Blog />

        {/* Pricing */}
        <Pricing />

        {/* Footer */}
        <Footer />

        <script src="assets/js/vendor/modernizr-3.11.7.min.js"></script>
        <script src="assets/js/vendor/jquery-3.6.0.min.js"></script>
        <script src="assets/js/vendor/jquery-migrate-3.3.2.min.js"></script>

        <script src="assets/js/plugins/aos.js"></script>
        <script src="assets/js/plugins/swiper-bundle.min.js"></script>
        <script src="assets/js/plugins/jquery.waypoints.js"></script>
        <script src="assets/js/plugins/jquery.counterup.min.js"></script>

        <script src="assets/js/main.js"></script>
      </div>
    </>
  );
};

export default page;

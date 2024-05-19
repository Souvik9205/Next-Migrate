import React from "react";
import Style from "@/components/Style";
import Header from "@/components/page components/Header";
import OffsetMenu from "@/components/page components/OffsetMenu";
import Testimonals from "@/components/page components/Testimonals";
import Brand from "@/components/page components/Brand";
import About from "@/components/AboutPage components/About";
import Experience from "@/components/AboutPage components/Experience";
import Video from "@/components/AboutPage components/Video";
import Tab from "@/components/AboutPage components/Tab";
import Footer from "@/components/AboutPage components/Footer";

function page() {
  return (
    <div>
      <Style />
      <div class="overflow-x-hidden">
        {/* Header */}
        <Header />
        <OffsetMenu />

        {/* About me */}
        <About />

        {/* Experience */}
        <Experience />

        {/* Video */}
        <Video />

        {/* Tab */}
        <Tab />

        {/* Testimonals */}
        {/* <Testimonals /> */}

        {/* Brand */}
        {/* <Brand /> */}

        {/* Footer */}
        <Footer />

        <script src="assets/js/vendor/modernizr-3.11.7.min.js"></script>
        <script src="assets/js/vendor/jquery-3.6.0.min.js"></script>
        <script src="assets/js/vendor/jquery-migrate-3.3.2.min.js"></script>
        <script src="assets/js/plugins/aos.js"></script>
        <script src="assets/js/plugins/swiper-bundle.min.js"></script>
        <script src="assets/js/plugins/jquery.magnific-popup.min.js"></script>
        <script src="assets/js/main.js"></script>
      </div>
    </div>
  );
}

export default page;

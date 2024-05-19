import React from "react";
import Style from "@/components/Style";
import Header from "@/components/page components/Header";
import OffsetMenu from "@/components/page components/OffsetMenu";
import Blog from "@/components/page components/Blog";
import Footer from "@/components/AboutPage components/Footer";
import Hero from "@/components/Blog-details components/Hero";

function page() {
  return (
    <>
      <Style />
      <div class="overflow-x-hidden">
        {/* Header */}
        <Header />
        <OffsetMenu />

        {/* Hero */}
        <Hero />

        {/* Blog */}
        <Blog />

        {/* Footer */}
        <Footer />

        <script src="assets/js/vendor/modernizr-3.11.7.min.js"></script>
        <script src="assets/js/vendor/jquery-3.6.0.min.js"></script>
        <script src="assets/js/vendor/jquery-migrate-3.3.2.min.js"></script>
        <script src="assets/js/plugins/aos.js"></script>
        <script src="assets/js/main.js"></script>
      </div>
    </>
  );
}

export default page;

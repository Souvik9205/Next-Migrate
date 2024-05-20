import React from "react";
import Style from "../../components/Style";
import Headers from "../../components/page components/Headers";
import OffsetMenu from "../../components/page components/OffsetMenu";
import Blog from "../../components/page components/Blog";
import Footer from "../../components/AboutPage components/Footer";
import Hero from "../../components/Blog-details components/Hero";

function page() {
  return (
    <>
      <Style />
      <div class="overflow-x-hidden">
        {/* Header */}
        <Headers />
        <OffsetMenu />

        {/* Hero */}
        <Hero />

        {/* Blog */}
        <Blog />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default page;

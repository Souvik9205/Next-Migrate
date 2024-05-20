import React from "react";
import Style from "../../components/Style";
import Headers from "../../components/page components/Headers";
import OffsetMenu from "../../components/page components/OffsetMenu";
import Footer from "../../components/AboutPage components/Footer";
import Blogs from "../../components/Blog-details components/Blogs";

function page() {
  return (
    <>
      <Style />
      <div class="overflow-x-hidden">
        {/* Header */}
        <Headers />
        <OffsetMenu />

        {/* Blogs */}
        <Blogs />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default page;

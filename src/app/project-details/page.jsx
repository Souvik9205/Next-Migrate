import React from "react";
import Style from "../../components/Style";
import Headers from "../../components/page components/Headers";
import OffsetMenu from "../../components/page components/OffsetMenu";
import Footer from "../../components/AboutPage components/Footer";
import Hero from "../../components/Project components/Hero";
import Work from "../../components/Project components/Work";

function page() {
  return (
    <>
      <Style />
      <div class="overflow-x-hidden">
        {/* Header */}
        <Headers />
        <OffsetMenu />

        {/* Hero */}
        <div className="pt-5">
          <Hero />
        </div>

        {/* Work */}
        <Work />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default page;

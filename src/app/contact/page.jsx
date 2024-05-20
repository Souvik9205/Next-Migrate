import React from "react";
import Style from "../../components/Style";
import Headers from "../../components/page components/Headers";
import OffsetMenu from "../../components/page components/OffsetMenu";
import Footer from "../../components/AboutPage components/Footer";
import Contract from "../../components/Contract";

function page() {
  return (
    <>
      <Style />
      <div className="overflow-x-hidden">
        {/* Header */}
        <Headers />
        <OffsetMenu />

        {/* Contact */}
        <div className="pt-5">
          <Contract />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default page;

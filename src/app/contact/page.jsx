import React from "react";
import Style from "@/components/Style";
import Header from "@/components/page components/Header";
import OffsetMenu from "@/components/page components/OffsetMenu";
import Footer from "@/components/AboutPage components/Footer";
import Contract from "@/components/Contract";

function page() {
  return (
    <>
      <Style />
      <div class="overflow-x-hidden">
        {/* Header */}
        <Header />
        <OffsetMenu />

        {/* Contact */}
        <div className="pt-5">
          <Contract />
        </div>

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

import Style from "@/components/style";
import Script from "@/components/Script";
import Header from "@/components/page components/Header";
import OffsetMenu from "@/components/page components/OffsetMenu";
import Hero from "@/components/page components/Hero";

const page = () => {
  return (
    <>
      <Style />
      <div className="overflow-x-hidden">
        {/* Header */}
        <Header />
        <OffsetMenu />

        {/* Hero */}
        {/* <Hero /> */}
        {/* Service */}
        {/* About */}

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

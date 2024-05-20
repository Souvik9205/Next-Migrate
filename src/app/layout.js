import "./globals.css";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script src="assets/js/vendor/modernizr-3.11.7.min.js" />
        <Script src="assets/js/vendor/jquery-3.6.0.min.js" />
        <Script src="assets/js/vendor/jquery-migrate-3.3.2.min.js" />

        <Script src="assets/js/plugins/aos.js" />
        <Script src="assets/js/plugins/swiper-bundle.min.js" />
        <Script src="assets/js/plugins/jquery.waypoints.js" />
        <Script src="assets/js/plugins/jquery.counterup.min.js" />
        <Script src="assets/js/plugins/jquery.magnific-popup.min.js" />

        <Script src="assets/js/main.js" />
      </head>
      <body>{children}</body>
    </html>
  );
}

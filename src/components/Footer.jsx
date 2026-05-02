import { Link } from "react-router-dom";
import FooterLogo from "../assets/SS-Logo-Footer.png";

const Footer = () => {
  return (
    <section id="FooterSection" className="bg-blue text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between md:items-start">
          <div className="flex justify-center md:justify-start">
            <Link to={"/"}>
              <img
                src={FooterLogo}
                alt="SettleSmartFooterLogo"
                className="
      max-h-52
      scale-125
      sm:scale-110
      md:scale-125
      lg:scale-150
      origin-center md:origin-left
    "
              />
            </Link>
          </div>
          <div>
            <h4 className="font-semibold text-xl md:text-2xl mb-6 md:mb-8 font-oswald tracking-wide">
              Quick Links
            </h4>
            <div className="flex flex-col space-y-3 md:space-y-4 text-lg md:text-xl text-gray-400 font-montserrat">
              <Link
                className="cursor-pointer hover:text-white transition-colors"
                to={"/"}
              >
                Home
              </Link>
              <Link
                className="cursor-pointer hover:text-white transition-colors"
                to={"/about"}
              >
                About
              </Link>
              <Link
                className="cursor-pointer hover:text-white transition-colors"
                to={"/customerreview"}
              >
                Customer Review
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-xl md:text-2xl mb-6 md:mb-8 font-oswald tracking-wide">
              Where to Find Us
            </h4>
            <div className="space-y-3 md:space-y-4 text-lg md:text-xl text-gray-400 font-montserrat">
              <a
                href="https://wa.me/4915234637712"
                className="cursor-pointer block hover:text-white transition-colors"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa-solid fa-address-book mr-4"></i>Contact Number
              </a>
              <a
                href="mailto:sion.jeremi@horbach.de"
                className="cursor-pointer block hover:text-white transition-colors"
              >
                <i className="fa-solid fa-envelope mr-4"></i>Email
              </a>
              <a
                href="https://www.instagram.com/settlesmart.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer block hover:text-white transition-colors"
              >
                <i className="fa-brands fa-instagram mr-4"></i>Instagram
              </a>
              <p className="cursor-pointer block hover:text-white transition-colors">
                <i className="fa-solid fa-location-dot mr-4"></i>
                Physical Address
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-600">
          © 2025 SettleSmart Financial Advisory. All rights reserved.
          <a href="/privacypolicy" className="block cursor-pointer hover:underline">Privacy Policy</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;

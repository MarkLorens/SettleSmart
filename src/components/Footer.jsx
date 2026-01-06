import FooterLogo from "../assets/SS-Logo-Footer.png";

const Footer = () => {
  return (
    <section id="FooterSection" className="bg-blue text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between md:items-start">
          <div className="flex justify-center md:justify-start">
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
          </div>
          <div>
            <h4 className="font-semibold text-xl md:text-2xl mb-6 md:mb-8">
              Quick Links
            </h4>
            <ul className="space-y-3 md:space-y-4 text-lg md:text-xl text-gray-400">
              <li>Home</li>
              <li>About</li>
              <li>Customer Review</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-xl md:text-2xl mb-6 md:mb-8">
              Where to Find Us
            </h4>
            <div className="space-y-3 md:space-y-4 text-lg md:text-xl text-gray-400">
              <p>
                <i className="fa-solid fa-address-book mr-4"></i>Contact Number
              </p>
              <p>
                <i className="fa-solid fa-envelope mr-4"></i>Email
              </p>
              <p>
                <i className="fa-brands fa-instagram mr-4"></i>Instagram
              </p>
              <p>
                <i className="fa-solid fa-location-dot mr-4"></i>
                Physical Address
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-600">
          © 2025 SettleSmart Financial Advisory. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Footer;

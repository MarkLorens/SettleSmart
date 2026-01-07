import Logo from "../assets/SS-Logo-11.png";

const Navbar = () => {
  return (
    <section
      id="header"
      className="bg-white shadow-sm fixed w-full top-5 right-1/2 translate-x-1/2 z-50 max-h-20 max-w-7xl px-4 rounded-4xl"
    >
      <div className="px-6 max-h-20">
        <div className="flex justify-between items-center max-h-20">
          <div id="Logo">
            <img src={Logo} alt="SettleSmart Logo" className="scale-50" />
          </div>
          <nav id="Items" className="hidden md:flex space-x-8 text-lg">
            <a
              href="#"
              className="text-gray-600 hover:text-blue transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue transition-colors"
            >
              Customer Review
            </a>
          </nav>
          <button className="bg-blue text-white px-8 py-4 rounded-4xl hover:bg-blue/80 transition colors font-semibold cursor-pointer">
            Contact
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

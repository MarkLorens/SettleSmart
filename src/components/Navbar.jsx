import Logo from "../assets/SS-Logo-11.png";

const Navbar = () => {
  return (
    <section id="header" className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div id="Logo">
            <img
              src={Logo}
              alt="SettleSmart Logo"
              className="h-full max-h-16"
            />
          </div>
          <nav id="Items" className="hidden md:flex space-x-8">
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
          <button>Contact</button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

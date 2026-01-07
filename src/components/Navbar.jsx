import Logo from "../assets/SS-Logo-11.png";
import SmallLogo from "../assets/SS-Logo-Footer.png";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="header"
      className="md:bg-white lg:shadow-sm fixed w-full top-5 right-1/2 translate-x-1/2 z-50
                 max-h-20 md:max-w-7xl px-4 rounded-4xl font-oswald bg-blue/90 backdrop-blur-md max-w-sm md:backdrop-blur-none"
    >
      <div className="px-6 max-h-20 relative">
        <div className="flex justify-between items-center max-h-20">
          <div id="Logo" className="hidden md:block">
            <img src={Logo} className="scale-50 cursor-pointer" />
          </div>
          <div id="Logo" className="md:hidden">
            <img
              src={SmallLogo}
              className="scale-45 origin-left cursor-pointer"
            />
          </div>
          <nav
            id="Items"
            className="hidden md:flex space-x-8 text-xl tracking-wider font-semibold"
          >
            <a className="hover:text-gray-800 transition-colors text-gold underline cursor-pointer">
              Home
            </a>
            <a className="hover:text-gray-800 transition-colors cursor-pointer">
              About
            </a>
            <a className="hover:text-gray-800 transition-colors cursor-pointer">
              Customer Review
            </a>
          </nav>
          <button
            className="hidden md:block bg-blue text-white px-8 py-4 rounded-4xl
                             hover:bg-blue/80 transition font-semibold cursor-pointer"
          >
            Contact
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden text-3xl cursor-pointer hover:font-bold text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div
            className="absolute right-6 top-25 w-56 bg-white rounded-2xl shadow-lg
                       flex flex-col gap-4 p-6 text-lg font-semibold"
          >
            <a className="hover:text-gray-800 text-gold cursor-pointer transition-colors">
              Home
            </a>
            <a className="hover:text-gray-800 cursor-pointer transition-colors">
              About
            </a>
            <a className="hover:text-gray-800 cursor-pointer transition-colors">
              Customer Review
            </a>

            <button
              className="mt-2 bg-blue text-white py-3 rounded-2xl
                               hover:bg-blue/80 transition cursor-pointer"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;

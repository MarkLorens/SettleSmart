import SmallLogo from "../../assets/SS-Logo-Footer.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="header"
      className="shadow-[0px_0px_28px_-4px_rgba(234,179,8,0.5)] text-white fixed w-full top-5 right-1/2 translate-x-1/2 z-50
                 max-h-20 md:max-w-7xl px-4 rounded-4xl font-oswald bg-blue/90 backdrop-blur-md max-w-sm md:backdrop-blur-none"
    >
      <div className="px-6 max-h-20 relative">
        <div className="flex justify-between items-center max-h-20">
          <div id="Logo">
            <NavLink to={"/"}>
              <img
                src={SmallLogo}
                className="h-40 lg:h-50 w-auto cursor-pointer"
              />
            </NavLink>
          </div>
          <nav
            id="Items"
            className="hidden md:flex space-x-8 text-xl tracking-wider font-semibold"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-2xl transition-all cursor-pointer
                ${isActive ? "text-gold" : "text-white"}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-2xl transition-all cursor-pointer
                ${isActive ? "text-gold" : "text-white"}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/customerreview"
              className={({ isActive }) =>
                `hover:text-2xl transition-all cursor-pointer
                ${isActive ? "text-gold" : "text-white"}`
              }
            >
              Customer Review
            </NavLink>
          </nav>
          <NavLink to="/contactform"
            className="hidden md:block bg-gold text-white px-8 py-4 rounded-4xl
                             hover:bg-gold/80 transition font-semibold cursor-pointer"
          >
            Contact
          </NavLink>

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
                       flex flex-col gap-4 p-6 text-lg font-semibold text-gray-800"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-2xl transition-all cursor-pointer
                ${isActive ? "text-gold" : "text-black"}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-2xl transition-all cursor-pointer
                ${isActive ? "text-gold" : "text-black"}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/customerreview"
              className={({ isActive }) =>
                `hover:text-2xl transition-all cursor-pointer
                ${isActive ? "text-gold" : "text-black"}`
              }
            >
              Customer Review
            </NavLink>

            <NavLink to="/contactform"
              className="mt-2 bg-gold text-white py-3 rounded-2xl
                               hover:bg-gold/80 transition cursor-pointer"
            >
              Contact
            </NavLink>
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;

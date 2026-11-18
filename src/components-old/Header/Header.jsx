import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../assets/logos/starbuck_2.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Shrink logic (desktop + mobile)
      setHasScrolled(currentScrollY > 50);

      // Mobile hide/show logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling DOWN
        setShowNav(false);
        setIsOpen(false);
      } else {
        // scrolling UP
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 z-50 w-full
      bg-header-light/90
      drop-shadow-md
      text-header-text-dark
      backdrop-blur-xs
      transition-all duration-300 
      ${showNav ? "translate-y-0" : "-translate-y-full"}
      lg:translate-y-0`}
    >
      <div
        className={`mx-auto max-w-7xl px-6 flex items-center
        justify-between transition-all duration-300`}
      >
        {/* Logo */}
        <NavLink to="/">
          <img
            src={logo}
            alt="Starbuck Curling Club Logo"
            className={`transition-all duration-300 py-4 sm:py-2 ${hasScrolled ? "h-22" : "h-26"}`}
          />
        </NavLink>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col gap-0.5  p-3 cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            // Curling stone aiming left
            <>
              <span className="h-0.75 w-6 ml-2.5 bg-header-text-dark"></span>
              <span className="h-0.75 w-3 ml-2 bg-header-text-dark"></span>
              <span className="h-0.75 w-10 ml-1 bg-header-text-dark"></span>
              <span className="h-0.75 w-12 bg-header-text-dark"></span>
              <span className="h-0.75 w-12 bg-header-text-dark"></span>
              <span className="h-0.75 w-12 bg-header-text-dark"></span>
              <span className="h-0.75 w-10 ml-1 bg-header-text-dark"></span>
            </>
          ) : (
            // Curling stone aiming right
            <>
              <span className="h-0.75 w-6 ml-3.5 bg-header-text-dark"></span>
              <span className="h-0.75 w-3 ml-7 bg-header-text-dark"></span>
              <span className="h-0.75 w-10 ml-1 bg-header-text-dark"></span>
              <span className="h-0.75 w-12 bg-header-text-dark"></span>
              <span className="h-0.75 w-12 bg-header-text-dark"></span>
              <span className="h-0.75 w-12 bg-header-text-dark"></span>
              <span className="h-0.75 w-10 ml-1 bg-header-text-dark"></span>
            </>
          )}
        </button>

        {/* Desktop links */}
        <div
          className={`hidden lg:flex space-x-8 transition-all duration-300 ${hasScrolled ? "text-lg" : "text-xl"}`}
        >
          <NavLink to="/" className="hover:text-header-text-hover-dark">
            Home
          </NavLink>
          {/* <NavLink to="/about" className="hover:text-header-text-hover-dark">
            About
          </NavLink> */}
          <NavLink to="/leagues" className="hover:text-header-text-hover-dark">
            Leagues
          </NavLink>
          <NavLink to="/facility" className="hover:text-header-text-hover-dark">
            Facility & Rentals
          </NavLink>
          <NavLink
            to="/#contact"
            className="hover:text-header-text-hover-dark"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact
          </NavLink>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="lg:hidden text-[clamp(1.125rem,2.5vw,1.4rem)]">
          <div className="flex flex-col justify-center items-center w-full">
            <NavLink
              to="/"
              className="block w-full py-1 text-center hover:bg-header-text-hover-dark/20 transition-colors duration-250 ease-in-out"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            {/* <NavLink
              to="/about"
              className="block w-full text-center py-1 hover:bg-header-text-hover-dark/20 transition-colors duration-250 ease-in-out"
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink> */}
            <NavLink
              to="/leagues"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-1 hover:bg-header-text-hover-dark/20 transition-colors duration-250 ease-in-out"
            >
              Leagues
            </NavLink>
            <NavLink
              to="/facility"
              className="block w-full text-center py-1 hover:bg-header-text-hover-dark/20 transition-colors duration-250 ease-in-out"
              onClick={() => setIsOpen(false)}
            >
              Facility & Rentals
            </NavLink>
            <NavLink
              to="/#contact"
              className="block w-full text-center pt-1 pb-3 hover:bg-header-text-hover-dark/20 transition-colors duration-250 ease-in-out"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
              }}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

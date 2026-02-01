import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import logo from "../../assets/logos/starbuck_2.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Shrink logic (desktop + mobile)
      setScrolled(currentScrollY > 50);

      // Mobile hide/show logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling DOWN
        setShowNav(false);
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
      bg-white text-black 
      transition-all duration-300 
      ${scrolled ? "h-20" : "h-25"}
      ${showNav ? "translate-y-0" : "-translate-y-full"}
      md:translate-y-0`}
    >
      <div
        className={`mx-auto max-w-7xl px-4 flex items-center 
        justify-between transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}
      >
        {/* Logo */}
        <NavLink
          to="/starbuck-curling/"
          className="text-lg font-bold tracking-wide"
        >
          <img src={logo} alt="Starbuck Curling Club Logo"
               className={`transition-all duration-300 ${scrolled ? "h-15" : "h-20"}`}/>
        </NavLink>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
          aria-label="Toggle menu"
        >
          <span className="h-0.5 w-8 bg-black"></span>
          <span className="h-0.5 w-8 bg-black"></span>
          <span className="h-0.5 w-8 bg-black"></span>
        </button>

        {/* Desktop links */}
        <div className={`hidden md:flex space-x-6 transition-all duration-300 ${scrolled ? "text-sm" : "text-base"}`}>
          <NavLink to="/starbuck-curling/" className="hover:text-gray-300">
            Home
          </NavLink>
          <NavLink
            to="/starbuck-curling/about"
            className="hover:text-gray-300"
          >
            About
          </NavLink>
          <NavLink
            to="/starbuck-curling/leagues"
            className="hover:text-gray-300"
          >
            Leagues
          </NavLink>
          <NavLink
            to="/starbuck-curling/merch"
            className="hover:text-gray-300"
          >
            Merch
          </NavLink>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          open ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="md:hidden bg-starbuck p-4">
          <div className="flex flex-col space-y-3 justify-center items-center w-full">
            <NavLink
              to="/starbuck-curling/"
              onClick={() => setOpen(false)}
              className="hover:text-gray-300"
            >
              Home
            </NavLink>
            <NavLink
              to="/starbuck-curling/about"
              onClick={() => setOpen(false)}
              className="hover:text-gray-300"
            >
              About
            </NavLink>
            <NavLink
              to="/starbuck-curling/leagues"
              onClick={() => setOpen(false)}
              className="hover:text-gray-300"
            >
              Leagues
            </NavLink>
            <NavLink
              to="/starbuck-curling/merch"
              onClick={() => setOpen(false)}
              className="hover:text-gray-300"
            >
              Merch
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

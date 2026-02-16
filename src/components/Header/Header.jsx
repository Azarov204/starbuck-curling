import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
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
      text-header-text-dark
      backdrop-blur-sm
      transition-all duration-300 
      ${showNav ? "translate-y-0" : "-translate-y-full"}
      md:translate-y-0`}
    >
      <div
        className={`mx-auto max-w-7xl px-6 flex items-center
        justify-between transition-all duration-300`}
      >
        {/* Logo */}
        <NavLink
          to="/starbuck-curling/"
          className="text-lg font-bold tracking-wide"
        >
          <img src={logo} alt="Starbuck Curling Club Logo"
               className={`transition-all duration-300 py-4 sm:py-2 ${hasScrolled ? "h-20" : "h-24"}`}/>
        </NavLink>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-0.75 p-3 cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? (
              // Curling stone aiming left
              <>
                <span className="h-0.5 w-4 ml-2.5 bg-header-text-dark"></span>
                <span className="h-0.5 w-2 ml-2 bg-header-text-dark"></span>
                <span className="h-0.5 w-8 ml-1 bg-header-text-dark"></span>
                <span className="h-0.5 w-10 bg-header-text-dark"></span>
                <span className="h-0.5 w-10  bg-header-text-dark"></span>
                <span className="h-0.5 w-8 ml-1 bg-header-text-dark"></span>
              </>
            ) :
            // Curling stone aiming right
            <>
              <span className="h-0.5 w-4 ml-3.5 bg-header-text-dark"></span>
              <span className="h-0.5 w-2 ml-6 bg-header-text-dark"></span>
              <span className="h-0.5 w-8 ml-1 bg-header-text-dark"></span>
              <span className="h-0.5 w-10 bg-header-text-dark"></span>
              <span className="h-0.5 w-10 bg-header-text-dark"></span>
              <span className="h-0.5 w-8 ml-1 bg-header-text-dark"></span>
            </>
          }
        </button>

        {/* Desktop links */}
        <div
          className={`hidden md:flex space-x-6 transition-all duration-300 ${hasScrolled ? "text-base" : "text-lg"}`}>
          <NavLink to="/starbuck-curling/" className="hover:text-header-text-hover-dark">
            Home
          </NavLink>
          <NavLink
            to="/starbuck-curling/about"
            className="hover:text-header-text-hover-dark"
          >
            About
          </NavLink>
          <NavLink
            to="/starbuck-curling/leagues"
            className="hover:text-header-text-hover-dark"
          >
            Leagues
          </NavLink>
          <NavLink
            to="/starbuck-curling/merch"
            className="hover:text-header-text-hover-dark"
          >
            Merch
          </NavLink>
          <NavLink
            to="/#contact"
            className="hover:text-header-text-hover-dark"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({behavior: "smooth"});
            }}
          >
            Contact
          </NavLink>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="md:hidden bg-header-light p-4 text-lg">
          <div className="flex flex-col space-y-3 justify-center items-center w-full">
            <NavLink
              to="/starbuck-curling/"
              className="hover:text-header-text-hover-dark"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/starbuck-curling/about"
              className="hover:text-header-text-hover-dark"
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/starbuck-curling/leagues"
              onClick={() => setIsOpen(false)}
              className="hover:text-header-text-hover-dark"
            >
              Leagues
            </NavLink>
            <NavLink
              to="/starbuck-curling/merch"
              className="hover:text-header-text-hover-dark"
              onClick={() => setIsOpen(false)}
            >
              Merch
            </NavLink>
            <NavLink
              to="/#contact"
              className="hover:text-header-text-hover-dark"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({behavior: "smooth"});
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

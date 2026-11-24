import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";

import { ClubMark } from "../components/ClubMark.jsx";

const navigationLinks = [
  { to: "/", label: "Home" },
  { to: "/leagues", label: "Leagues" },
  { to: "/facility-rentals", label: "Facility & Rentals" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const wideScreen = window.matchMedia("(min-width: 851px)");
    const closeOnWideScreen = () => {
      if (wideScreen.matches) setOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    wideScreen.addEventListener("change", closeOnWideScreen);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      wideScreen.removeEventListener("change", closeOnWideScreen);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const contactHref = `${location.pathname}#contact`;
  const scrollToContact = (event) => {
    if (document.querySelector("#contact")) {
      event.preventDefault();
      document
        .querySelector("#contact")
        ?.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link
          to="/"
          className="brand-link"
          aria-label="Starbuck Curling Club home"
        >
          <ClubMark compact />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigationLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"}>
              {link.label}
            </NavLink>
          ))}
          <a
            className="desktop-nav__contact"
            href={contactHref}
            onClick={scrollToContact}
          >
            Contact us
          </a>
        </nav>
        <button
          ref={menuButtonRef}
          className="mobile-nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? (
            // Curling rock aiming left (open menu)
            <div className="menu-button-design">
              <span className="w-5.5 ml-3"></span>
              <span className="w-2.75 ml-2.25"></span>
              <span className="w-10 ml-1.25"></span>
              <span className="w-12.5"></span>
              <span className="w-12.5"></span>
              <span className="w-12.5"></span>
              <span className="w-10 ml-1.25"></span>
            </div>
          ) : (
            // Curling rock aiming right (closed menu)
            <div className="menu-button-design">
              <span className="w-5.5 ml-5"></span>
              <span className="w-2.75 ml-8.5"></span>
              <span className="w-10 ml-2.25"></span>
              <span className="w-12.5 ml-1"></span>
              <span className="w-12.5 ml-1"></span>
              <span className="w-12.5 ml-1"></span>
              <span className="w-10 ml-2.25"></span>
            </div>
          )}
        </button>
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
          hidden={!open}
        >
          {navigationLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <a
            className="mobile-nav__contact"
            href={contactHref}
            onClick={scrollToContact}
          >
            Contact us
          </a>
        </nav>
      </div>
    </header>
  );
}
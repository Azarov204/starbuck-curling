import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { ArrowRight, Menu, X } from "lucide-react";

import { ClubMark } from "../components/ClubMark.jsx";

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

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
        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
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
          className={open ? "main-nav main-nav--open" : "main-nav"}
          aria-label="Main navigation"
        >
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/leagues">Leagues</NavLink>
          <NavLink to="/facility-rentals">Facility &amp; Rentals</NavLink>
          <a
            className="nav-contact"
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

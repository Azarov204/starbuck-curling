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
          {open ? <X size={22} /> : <Menu size={22} />}
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
            Contact us <ArrowRight size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}

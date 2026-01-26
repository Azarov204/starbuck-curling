import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logos/starbuck_2.png";

function CustomLink({ to, children, ...props }) {
  return (
    <li>
      <Link to={to} {...props} className="header-link">
        {children}
      </Link>
    </li>
  );
}

const Header = () => {
  useEffect(() => {
    const onScroll = () => {
      const nav = document.querySelector("nav");
      if (!nav) return;
      if (window.scrollY > 50) nav.classList.add("shrink");
      else nav.classList.remove("shrink");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="header-container">
      <Link to="/starbuck-curling" className="logo-link">
        <img src={logo} alt="Starbuck Curling Club Logo" className="logo" />
      </Link>
      <ul>
        <CustomLink to="/starbuck-curling/">Home</CustomLink>
        <CustomLink to="/starbuck-curling/about">About</CustomLink>
        <CustomLink to="/starbuck-curling/leagues">Leagues</CustomLink>
        <CustomLink to="/starbuck-curling/merch">Merch</CustomLink>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Header;

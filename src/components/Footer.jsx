import { Link } from "react-router";
import { ClubMark } from "../components/ClubMark.jsx";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <ClubMark compact />
        <div className="footer-links">
          <Link to="/leagues">Leagues</Link>
          <Link to="/facility-rentals">Rent the club</Link>
          <a href="mailto:hello@starbuckcurlingclub.ca">Email us</a>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Starbuck Curling Club
        </p>
        <p className="shoutout">Created by Adam Azarov</p>
      </div>
    </footer>
  );
}

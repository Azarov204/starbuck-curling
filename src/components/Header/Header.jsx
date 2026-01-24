import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logos/starbuck_2.png";


const Header = () => {
  return (
    <nav>
      <img src={logo} alt="Starbuck Curling Logo" className="logo" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Leagues</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Header;

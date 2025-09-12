import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/images/logo.png" alt="Sathyabama Logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/academics">Academics</Link></li>
        <li><Link to="/admissions">Admissions</Link></li>
        <li><Link to="/research">Research</Link></li>
        <li><Link to="/placements">Placements</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

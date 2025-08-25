import "./Navbar.scss";
import logoImg from "../../assets/icons/Brain-Buster-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { UserRound, Search, ShoppingCart } from "lucide-react";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img className="navbar-img" src={logoImg} alt="logo" />
        <h2 className="navbar-logo">
          <span>Brain Busters</span>
        </h2>
      </div>
      <ul className="navbar-links">
        <li className="gradient-underline">
          <Link className="link" to="/">Home</Link>
        </li>
        <li className="gradient-underline">About</li>
        <li className="gradient-underline">
          <Link className="link" to="/courses">Courses</Link>
        </li>
        <li className="gradient-underline">Contact us</li>
      </ul>
      <div className="navbar-icons">
        <UserRound className="navbar-icon" />
        <Search className="navbar-icon" />
        <ShoppingCart className="navbar-icon" />
      </div>
      <button
        className="navbar-btn"
        onClick={() => navigate("/courses", { state: { scrollTo: "courses-list" } })}
      >
        Explore Our Courses
      </button>
    </nav>
  );
}

export default Navbar;

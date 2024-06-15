import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const navlinks = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/project", name: "Project" },
  { path: "/contact", name: "Contact" },
];

const Navbar = () => {
  const [selected, setSelected] = useState("");

  return (
    <div id="navbar">
      <div className="nav-links-container">
        {navlinks.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`nav-links ${selected === item.name ? "highlight" : ""}`}
            onClick={() => setSelected(item.name)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

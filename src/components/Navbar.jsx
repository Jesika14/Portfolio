import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

const navlinks = [
  { path: "#hero", name: "Home" },
  { path: "#about", name: "About" },
  { path: "#project", name: "Project" },
  { path: "#contact", name: "Contact" },
];

const Navbar = () => {
  const [selected, setSelected] = useState("");
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.hash;
    const matchingLink = navlinks.find((item) => item.path === currentPath);
    if (matchingLink) {
      setSelected(matchingLink.name);
    }
  }, [location]);

  return (
    <div id="navbar">
      <div className="nav-links-container">
        {navlinks.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`nav-links ${selected === item.name ? "highlight" : ""}`}
            onClick={() => {
              setSelected(item.name);
              const element = document.getElementById(item.path.substring(1));
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

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

  // Helper function for smooth scrolling with offset
  const scrollWithOffset = (elementId) => {
    const element = document.getElementById(elementId);
    const navbarHeight = document.getElementById("navbar").offsetHeight;

    if (element) {
      const offset = 5; // Adjust as needed for spacing 
      const yOffset = element.offsetTop - navbarHeight - offset;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const currentPath = location.hash;
    const matchingLink = navlinks.find((item) => item.path === currentPath);
    if (matchingLink) {
      setSelected(matchingLink.name);
    }
  }, [location]);

  return (
    <nav id="navbar"> 
      <div className="nav-links-container">
        {navlinks.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`nav-links ${selected === item.name ? "highlight" : ""}`}
            onClick={() => {
              setSelected(item.name);
              scrollWithOffset(item.path.substring(1)); 
            }}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

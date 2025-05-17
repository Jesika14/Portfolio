import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import "./Navbar.css";

const NAV_LINKS = [
  { path: "#hero", name: "Home" },
  { path: "#about", name: "About" },
  { path: "#project", name: "Project" },
  { path: "#contact", name: "Contact" },
];

const Navbar = () => {
  const [selected, setSelected] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const scrollWithOffset = useCallback((elementId) => {
    const element = document.getElementById(elementId);
    const navbarHeight = document.getElementById("navbar")?.offsetHeight || 0;

    if (element) {
      const offset = 5;
      const yOffset = element.offsetTop - navbarHeight - offset;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const currentPath = location.hash;
    const matchingLink = NAV_LINKS.find((item) => item.path === currentPath);
    if (matchingLink) {
      setSelected(matchingLink.name);
    }
  }, [location]);

  const handleNavLinkClick = (name, path) => {
    setSelected(name);
    scrollWithOffset(path.substring(1));
    setMobileMenuOpen(false); // Close mobile menu when link is clicked
  };

  return (
    <nav id="navbar" aria-label="Main navigation">
      <div className="navbar-container">
        <button 
          className="mobile-menu-button" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="nav-links-container"
        >
          <span className="menu-icon"></span>
        </button>
        
        <div className={`nav-links-container ${mobileMenuOpen ? 'show' : ''}`} id="nav-links-container">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-links ${selected === item.name ? "highlight" : ""}`}
              onClick={() => handleNavLinkClick(item.name, item.path)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

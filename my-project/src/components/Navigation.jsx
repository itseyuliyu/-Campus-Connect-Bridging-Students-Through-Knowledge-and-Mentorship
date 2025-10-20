import { useState } from "react";
import "./Navigation.css";

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "qa-forum", label: "Q&A Forum", icon: "💬" },
    { id: "project-archive", label: "Project Archive", icon: "📚" },
    { id: "knowledge-hub", label: "Knowledge Hub", icon: "🧠" },
    { id: "student-profiles", label: "Student Profiles", icon: "👥" },
    { id: "discussion-groups", label: "Discussion Groups", icon: "💭" },

    { id: "Login", label: "Login", icon: "⚙️" },
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <h1>🎓 Campus Connect</h1>
        </div>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <div className={`nav-menu ${isMenuOpen ? "nav-menu-open" : ""}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${currentPage === item.id ? "active" : ""}`}
              onClick={() => {
                setCurrentPage(item.id);
                setIsMenuOpen(false);
              }}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

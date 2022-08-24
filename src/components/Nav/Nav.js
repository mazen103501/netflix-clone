import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";
function Nav({ hide }) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  function scrollFunction() {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
  }, []);

  return (
    <nav className={`nav-bar ${show && "active"}`}>
      <img
        onClick={() => navigate("/", { replace: true })}
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="netflix"
      />
      {!hide && (
        <div className="nav-text">
          <button>Home</button>
          <button>TV Shows</button>
          <button>Movies</button>
        </div>
      )}

      <img
        onClick={() => navigate("/profile")}
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="netflix"
      />
    </nav>
  );
}

export default Nav;

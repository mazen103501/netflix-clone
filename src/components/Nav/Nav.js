import React, { useState, useEffect } from "react";
import "./Nav.css";
function Nav() {
  const [show, setShow] = useState(false);
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
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="netflix"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="netflix"
      />
    </nav>
  );
}

export default Nav;

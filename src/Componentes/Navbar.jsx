import React from 'react';
import '../Style/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand" style={{ backgroundColor: 'black' }}>
      <a className="navbar-brand" href="#">Navbar</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div  id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Inicio <span className="sr-only"></span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Black-Sheep</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Galeria</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
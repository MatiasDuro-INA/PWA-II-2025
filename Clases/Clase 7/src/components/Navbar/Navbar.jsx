import React from 'react'
import "./Styles.css"

export default function Navbar() {
  return (
        <nav className="navbar">
          <div className="navbar-container">
            <div className="navbar-logo">
              <h1>Mi Tienda</h1>
            </div>
    
            <ul className="navbar-menu">
              <li>
                <a href="#inicio">Inicio</a>
              </li>
              <li>
                <a href="#productos">Productos</a>
              </li>
              <li>
                <a href="#contacto">Contacto</a>
              </li>
            </ul>
    
            <div className="navbar-cart">
              <div className="cart-icon">
                🛒<span className="cart-badge">0</span>
              </div>
            </div>
          </div>
        </nav>
  )
}

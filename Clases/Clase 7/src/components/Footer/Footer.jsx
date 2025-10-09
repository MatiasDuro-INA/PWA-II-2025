import React from 'react'
import "./Styles.css"

export default function Footer() {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>Mi Tienda</h3>
            <p>Tu tienda online de confianza</p>
          </div>
  
          <div className="footer-section">
            <h4>Enlaces</h4>
            <ul>
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
          </div>
  
          <div className="footer-section">
            <h4>Contacto</h4>
            <p>Email: info@mitienda.com</p>
            <p>Teléfono: (123) 456-7890</p>
          </div>
  
          <div className="footer-section">
            <h4>Síguenos</h4>
            <div className="social-links">
              <a href="#facebook">Facebook</a>
              <a href="#instagram">Instagram</a>
              <a href="#twitter">Twitter</a>
            </div>
          </div>
        </div>
  
        <div className="footer-bottom">
          <p>&copy; 2025 Mi Tienda. Todos los derechos reservados.</p>
        </div>
      </footer>
    )
  }

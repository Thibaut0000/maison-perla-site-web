import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

// Composant de navigation principal
// Affiche les liens vers les differentes pages du site
function Navbar() {
  // State pour gerer l'ouverture du menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Ferme le menu mobile apres un clic sur un lien
  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  // Bascule l'etat du menu mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* Bouton hamburger pour mobile */}
        <button 
          className={`navbar__hamburger ${isMenuOpen ? 'navbar__hamburger--active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu de navigation"
          aria-expanded={isMenuOpen}
        >
          <span className="navbar__hamburger-line"></span>
          <span className="navbar__hamburger-line"></span>
          <span className="navbar__hamburger-line"></span>
        </button>

        {/* Liste des liens de navigation */}
        <ul className={`navbar__menu ${isMenuOpen ? 'navbar__menu--open' : ''}`}>
          <li className="navbar__item">
            <NavLink 
              to="/" 
              className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
              onClick={handleLinkClick}
            >
              Home
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink 
              to="/nous" 
              className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
              onClick={handleLinkClick}
            >
              Nous
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink 
              to="/services" 
              className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
              onClick={handleLinkClick}
            >
              Nos Services
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
              onClick={handleLinkClick}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

import { Link } from 'react-router-dom'
import SocialLinks from '../SocialLinks/SocialLinks'
import './Footer.css'

// Composant Footer
// Affiche le logo, la navigation, les réseaux sociaux et le copyright
function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="footer__container">
                {/* Logo */}
                <div className="footer__logo">
                    <img src="/assets/logo.svg" alt="Maison Perla" className="footer__logo-img" />
                </div>

                {/* Navigation */}
                <nav className="footer__nav">
                    <Link to="/" className="footer__link" onClick={() => window.scrollTo(0, 0)}>Home</Link>
                    <Link to="/services" className="footer__link" onClick={() => window.scrollTo(0, 0)}>Nos Services</Link>
                    <Link to="/contact" className="footer__link" onClick={() => window.scrollTo(0, 0)}>Contact</Link>
                </nav>

                {/* Réseaux sociaux */}
                <SocialLinks />

                {/* Copyright */}
                <div className="footer__copyright">
                    <p>&copy; {currentYear} Maison Perla. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

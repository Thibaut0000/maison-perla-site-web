import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Services from './pages/Services/Services'

import Contact from './pages/Contact/Contact'

import Footer from './components/Footer/Footer'

// Composant principal de l'application
// Gere le routage entre les differentes pages du site
function App() {
  return (
    <Router>
      {/* Navbar presente sur toutes les pages */}
      <Navbar />

      {/* Configuration des routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Les autres routes seront ajoutees au fur et a mesure */}
        <Route path="/services" element={<Services />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer present sur toutes les pages */}
      <Footer />
    </Router>
  )
}

export default App

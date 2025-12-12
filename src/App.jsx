import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Nous from './pages/Nous/Nous'
import Services from './pages/Services/Services'
import Organisation from './pages/Organisation/Organisation'
import Papeterie from './pages/Papeterie/Papeterie'
import Contact from './pages/Contact/Contact'

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
        <Route path="/nous" element={<Nous />} />
        <Route path="/services" element={<Services />} />
        <Route path="/organisation" element={<Organisation />} />
        <Route path="/papeterie" element={<Papeterie />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App

import { Link } from 'react-router-dom'
import './Home.css'

// Page d'accueil avec hero video en plein ecran
// Affiche le logo, le nom de la marque et le slogan
function Home() {
  return (
    <main className="home">
      {/* Section hero avec video en arriere-plan */}
      <section className="hero">
        {/* Conteneur de la video avec filtre rose */}
        <div className="hero__video-container">
          <video
            className="hero__video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/assets/hero-video.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de videos.
          </video>
          {/* Filtre rose par dessus la video */}
          <div className="hero__overlay"></div>
        </div>

        {/* Contenu central du hero */}
        <div className="hero__content">
          {/* Logo coquillage en blanc */}
          <div className="hero__logo">
            <svg
              className="hero__logo-svg"
              viewBox="0 0 786.56 917.99"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Logo Maison Perla - Coquillage"
            >
              {/* Coquillage simplifie - utilise le fichier SVG original avec fill blanc */}
              <use href="/assets/coquillage.svg#Calque_1-2" fill="white" />
            </svg>
            {/* Image de secours si le SVG inline ne fonctionne pas */}
            <img
              src="/assets/coquillage.svg"
              alt="Logo Maison Perla"
              className="hero__logo-img"
            />
          </div>

          {/* Texte de la marque */}
          <div className="hero__text">
            <h1 className="hero__title">
              <span className="hero__title-script">Maison</span>
              <span className="hero__title-main">Perla</span>
            </h1>
            <p className="hero__subtitle">EVENT PLANNER</p>
          </div>
        </div>
      </section>

      {/* Section Nos Services */}
      <section className="home__services">
        {/* Carte Papeterie - Gauche */}
        <Link to="/papeterie" className="home__service-card home__service-card--papeterie">
          <div className="service-card__content">
            <h2 className="service-card__title">
              <span className="service-card__subtitle">Service</span>
              Papeterie
            </h2>
            <div className="service-card__arrow">→</div>
          </div>
        </Link>

        {/* Carte Organisation - Droite */}
        <Link to="/organisation" className="home__service-card home__service-card--organisation">
          <div className="service-card__content">
            <h2 className="service-card__title">
              <span className="service-card__subtitle">Service</span>
              Organisation de Mariage
            </h2>
            <div className="service-card__arrow">→</div>
          </div>
        </Link>
      </section>
    </main>
  )
}

export default Home

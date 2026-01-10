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
          {/* Logo blanc */}
          <div className="hero__logo">
            <img 
              src="/assets/logoblancMain.png" 
              alt="Logo Maison Perla" 
              className="hero__logo-img"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home

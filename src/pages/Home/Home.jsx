import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import ImageSlider from '../../components/ImageSlider/ImageSlider'
import Testimonials from '../../components/Testimonials/Testimonials'
import './Home.css'

// Page d'accueil avec hero video en plein ecran
// Affiche le logo, le nom de la marque et le slogan
function Home() {
  const sectionsRef = useRef([])
  const navigate = useNavigate()

  // Images pour le slider
  const sliderImages = [
    '/assets/photo1.png',
    '/assets/photo2.png',
    '/assets/photo3.png',
    '/assets/photo4.png'
  ]

  // Animation au scroll (identique à Services.jsx)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.2 }
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }



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

      {/* Section Présentation des Créatrices */}
      <section className="home-founders" ref={addToRefs}>
        <div className="home-founders__header">
          <span className="section-label">Qui sommes-nous ?</span>
          <h2 className="section-title">
            <span className="section-title__script">Les</span>
            <span className="section-title__main">Créatrices</span>
          </h2>
        </div>

        <div className="home-founders__content">
          {/* 1. Les Créatrices (Photos + Bios) */}
          <div className="founders-profiles">
            {/* Cristina */}
            <div className="founder-profile">
              <div className="founder-card founder-card--cristina">
                <img src="/assets/photoChristina.jpg" alt="Cristina" />
              </div>
              <div className="founder-mini-bio">
                <h3>Cristina</h3>
                <p>A fait naître cette passion sur l'île de Margarita. Elle apporte son expérience et son sens de l'accueil chaleureux.</p>
              </div>
            </div>

            {/* Alessandra */}
            <div className="founder-profile">
              <div className="founder-card founder-card--alessandra">
                <img src="/assets/photoAle.jpg" alt="Alessandra" />
              </div>
              <div className="founder-mini-bio">
                <h3>Alessandra</h3>
                <p>Apporte sa fraîcheur, sa créativité et son sens du détail pour des événements authentiques et festifs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Notre Histoire */}
      <section className="home-story" ref={addToRefs}>
        <div className="home-story__content">
          <div className="founders-story">
            {/* Sidebar Image */}
            <div className="founders-story__sidebar">
              <img src="/assets/Plage.png" alt="Notre Histoire" className="founders-story__image" />

              {/* Slider d'images */}
              <ImageSlider images={sliderImages} />
            </div>

            {/* Main Content */}
            <div className="founders-story__main">
              <h2 className="section-title">
                <span className="section-title__script">Notre</span>
                <span className="section-title__main">Histoire</span>
              </h2>

              <div className="founders-story__visual">
                <div className="home-founders__voyage">
                  <img src="/assets/voyageSansTitre.svg" alt="Voyage Maison Perla" />
                </div>
              </div>

              <div className="founders-story__text">
                <p className="home-founders__intro">
                  Maison Perla, c'est avant tout une <strong>histoire de famille</strong>, de passion et de transmission.
                  Une mère et sa fille, Cristina et Alessandra, unies par le même amour du beau, du partage et de l'émotion.
                </p>
                <p>
                  Nous mêlons l'élégance à la <strong>française</strong> et la <strong>chaleur latino-américaine</strong> pour
                  offrir à nos clients une expérience unique, pleine de vie et de raffinement.
                </p>
                <p>
                  Ensemble, nous avons créé Maison Perla : une maison d'émotions, d'élégance et de convivialité, où chaque événement est imaginé avec cœur.
                </p>
                <p>
                  Nous croyons que la réussite d'un événement repose sur une synergie <strong>entre passion, écoute et savoir-faire</strong>, partagée avec des partenaires qui vibrent à la même fréquence que nous.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <Testimonials ref={addToRefs} />

      {/* Section Vision */}
      <section className="home-vision" ref={addToRefs}>
        <div className="home-vision__header">
          <span className="section-label">Nos Valeurs</span>
          <h2 className="section-title">
            <span className="section-title__script">Notre</span>
            <span className="section-title__main">Vision</span>
          </h2>
        </div>

        <div className="home-vision__content">
          <ul className="vision-list">
            <li className="vision-card">
              <div className="vision-card__inner">
                <div className="vision-card__front">
                  <img src="/assets/Luz2.JPG" alt="Créer ensemble" />
                  <h4>Créer ensemble, avec le cœur</h4>
                </div>
                <div className="vision-card__back">
                  <h4>Créer ensemble</h4>
                  <p>Chaque événement est une aventure humaine. Nous croyons que la magie naît de la collaboration sincère entre des professionnels passionnés, guidés par la même envie : faire briller les émotions.</p>
                </div>
              </div>
            </li>
            <li className="vision-card">
              <div className="vision-card__inner">
                <div className="vision-card__front">
                  <img src="/assets/jardin.png" alt="Professionnalisme" />
                  <h4>Allier professionnalisme et bonne humeur</h4>
                </div>
                <div className="vision-card__back">
                  <h4>Professionnalisme & Joie</h4>
                  <p>Chez Maison Perla, on aime danser plus et stresser moins. Travailler sérieusement, sans jamais perdre la joie, l’humour et la bienveillance qui font toute la différence sur un événement.</p>
                </div>
              </div>
            </li>
            <li className="vision-card">
              <div className="vision-card__inner">
                <div className="vision-card__front">
                  <img src="/assets/Brisa1.JPG" alt="Authenticité" />
                  <h4>Célébrer l’authenticité</h4>
                </div>
                <div className="vision-card__back">
                  <h4>Authenticité</h4>
                  <p>Nous aimons les prestataires qui ont une âme, une personnalité, un style affirmé. Chaque talent compte, chaque univers enrichit le nôtre. Ensemble, nous créons des événements vivants, élégants et uniques.</p>
                </div>
              </div>
            </li>
            <li className="vision-card">
              <div className="vision-card__inner">
                <div className="vision-card__front">
                  <img src="/assets/banquet.png" alt="Exigence du beau" />
                  <h4>Partager la même exigence du beau</h4>
                </div>
                <div className="vision-card__back">
                  <h4>Exigence du beau</h4>
                  <p>Le détail fait la différence. Nous mettons un point d’honneur à respecter la qualité, l’organisation et l’esthétique de chaque projet, pour offrir une expérience fluide et harmonieuse à tous mariés comme prestataires.</p>
                </div>
              </div>
            </li>
          </ul>

          <div className="home-vision__footer">
            <button className="btn-contact" onClick={() => navigate('/contact')}>
              Nous contacter
            </button>
          </div>
        </div>
      </section>
    </main >
  )
}

export default Home

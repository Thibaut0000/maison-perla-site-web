import { Link } from 'react-router-dom'
import '../Home/Home.css' // Reusing Home styles for consistency
import './Services.css'

function Services() {
    return (
        <main className="services-page">
            <header className="services-page__header">
                <h1 className="services-page__title">
                    <span className="services-page__title-script">Nos</span>
                    <span className="services-page__title-main">Services</span>
                </h1>
            </header>

            <section className="home__services" style={{ minHeight: 'calc(100vh - 250px)' }}>
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

export default Services

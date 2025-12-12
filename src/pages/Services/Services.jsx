import { useState } from 'react'
import './Services.css'

function Services() {
    const [selectedService, setSelectedService] = useState(null)

    const services = [
        {
            id: 1,
            title: "Organisation",
            description: "De la conception à la coordination le jour J, nous prenons en charge l'intégralité de votre événement pour vous offrir une sérénité totale.",
            position: 1
        },
        {
            id: 2,
            title: "Mise en contact",
            description: "Profitez de notre carnet d'adresses exclusif : lieux d'exception, traiteurs raffinés, photographes talentueux et plus encore.",
            position: 2
        },
        {
            id: 3,
            title: "Conseils",
            description: "Une séance de brainstorming ? Besoin d'un avis d'expert ? Nous vous guidons dans vos choix pour optimiser votre budget et vos idées.",
            position: 3
        },
        {
            id: 4,
            title: "Prestation personnalisée",
            description: "Vous avez déjà avancé mais souhaitez déléguer certains aspects ? Nous créons une formule sur mesure adaptée à vos besoins spécifiques.",
            position: 4
        },
        {
            id: 5,
            title: "Autre",
            description: "Un projet atypique ? Une demande particulière ? Discutons-en ! Nous aimons les défis et l'originalité.",
            position: 5
        }
    ]

    const handleServiceClick = (service) => {
        setSelectedService(service)
    }

    return (
        <main className="services">
            <div className="services__background">
                <img
                    src="/assets/jardin.png"
                    alt=""
                    className="services__background-img"
                />
                <div className="services__background-overlay"></div>
            </div>

            <header className="services__header">
                <h1 className="services__title">
                    <span className="services__title-script">Nos</span>
                    <span className="services__title-main">Services</span>
                </h1>
            </header>

            <section className="services__graph-container">
                <div className="services__graph">
                    {/* Centre - Logo */}
                    <div className="services__center">
                        <img src="/assets/logo.svg" alt="Maison Perla" className="services__logo" />
                    </div>

                    {/* Noeuds des services */}
                    {services.map((service, index) => (
                        <button
                            key={service.id}
                            className={`services__node services__node--${index + 1} ${selectedService?.id === service.id ? 'active' : ''}`}
                            onClick={() => handleServiceClick(service)}
                            aria-label={`Voir les détails de ${service.title}`}
                        >
                            <div className="services__node-dot"></div>
                            <span className="services__node-label">{service.title}</span>
                        </button>
                    ))}

                    {/* Lignes de connexion (décoratives) */}
                    <svg className="services__connections" viewBox="0 0 600 600">
                        {services.map((_, index) => (
                            <line
                                key={index}
                                x1="300"
                                y1="300"
                                x2={300 + 200 * Math.cos((index * 72 - 90) * Math.PI / 180)}
                                y2={300 + 200 * Math.sin((index * 72 - 90) * Math.PI / 180)}
                                className="services__connection-line"
                            />
                        ))}
                    </svg>
                </div>
            </section>

            {/* Details du service sélectionné */}
            <section className={`services__details ${selectedService ? 'visible' : ''}`}>
                <div className="services__details-content">
                    {selectedService ? (
                        <>
                            <h2 className="services__details-title">{selectedService.title}</h2>
                            <p className="services__details-text">{selectedService.description}</p>
                        </>
                    ) : (
                        <p className="services__details-placeholder">Cliquez sur un service pour en savoir plus</p>
                    )}
                </div>
            </section>
        </main>
    )
}

export default Services

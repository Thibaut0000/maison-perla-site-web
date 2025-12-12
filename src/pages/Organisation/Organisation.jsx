import { useState } from 'react'
import './Organisation.css'

function Organisation() {
    // State to track which service is expanded. Default to null (all equal) or specific ID.
    // User request: "Quand on clique dessus... les deux autres sont serre".
    // Implies they might start equal. Let's start with null.
    const [activeId, setActiveId] = useState(null)

    const services = [
        {
            id: 1,
            title: "Perla blanca",
            subtitle: "Organisation complète",
            description: "De la conception à la coordination, nous prenons en charge chaque étape pour un événement clé en main.",
            details: [
                "Recherche de lieux et prestataires",
                "Gestion du budget et rétro-planning",
                "Scénographie et design",
                "Coordination jour J"
            ],
            color: "#f97e07" // Orange
        },
        {
            id: 2,
            title: "Luz",
            subtitle: "Organisation partielle",
            description: "Un accompagnement personnalisé pour compléter ou renforcer la préparation de nos clients.",
            details: [
                "Recherche de prestataires manquants",
                "Conseils et coaching",
                "Mise en lumière de vos idées",
                "Suivi partiel"
            ],
            color: "#f174a4" // Pink
        },
        {
            id: 3,
            title: "Brisa",
            subtitle: "Coordination du jour J",
            description: "Nous assurons la fluidité et la sérénité du grand jour, pour que tout se déroule sans stress.",
            details: [
                "Prise de relais 1 mois avant",
                "Gestion des prestataires le jour J",
                "Accueil des invités",
                "Gestion des imprévus"
            ],
            color: "#fd5d69" // Coral/Red
        }
    ]

    const handlePanelClick = (id) => {
        setActiveId(activeId === id ? null : id)
    }

    return (
        <main className="organisation">
            <div className="organisation__background">
                <img
                    src="/assets/jardin.png"
                    alt=""
                    className="organisation__background-img"
                />
                <div className="organisation__background-overlay"></div>
            </div>

            <header className="organisation__header">
                <h1 className="organisation__title">
                    <span className="organisation__title-script">Nos Formules</span>
                    <span className="organisation__title-main">Organisation</span>
                </h1>
            </header>

            <section className="organisation__accordion">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className={`organisation__panel ${activeId === service.id ? 'active' : ''} ${activeId && activeId !== service.id ? 'inactive' : ''}`}
                        onClick={() => handlePanelClick(service.id)}
                        style={{ '--service-color': service.color }}
                    >
                        <div className="organisation__panel-content">
                            <h2 className="organisation__panel-title">{service.title}</h2>
                            <h3 className="organisation__panel-subtitle">{service.subtitle}</h3>

                            <div className="organisation__panel-details">
                                <p className="organisation__panel-desc">{service.description}</p>
                                <ul className="organisation__panel-list">
                                    {service.details.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Overlay to darken inactive panels or tint background */}
                        <div className="organisation__panel-overlay"></div>
                    </div>
                ))}
            </section>
        </main>
    )
}

export default Organisation

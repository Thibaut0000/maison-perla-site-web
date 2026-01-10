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
            description: "On prend en charge l’intégralité de votre mariage, de A à Z",
            details: [
                "Premier rendez-vous découverte (visio ou en personne)",
                "Définition de votre univers, ambiance, couleurs et style",
                "Élaboration du budget prévisionnel et suivi mensuel",
                "Proposition et sélection complète des prestataires",
                "Gestion des contrats et devis",
                "Accompagnement illimité par messages / mails / appels",
                "Création du planning global des préparatifs",
                "Visites techniques du lieu",
                "Création du planning détaillé du jour J",
                "Coordination de tous les prestataires",
                "Gestion des imprévus avant et pendant le jour J",
                "Présence de l’équipe Maison Perla le jour J",
                "Soutien émotionnel (oui, ça compte beaucoup ❤️)"
            ],
            color: "#f97e07", // Orange
            image1: "/assets/PerlaBlanca1.JPEG",
            image2: "/assets/PerlaBlanca2.JPG",
            image3: "/assets/PerlaBlanca3.JPG"
        },
        {
            id: 2,
            title: "Luz",
            subtitle: "Organisation partielle",
            description: "On reprend les préparatifs là où vous en êtes, et on vous aide à tout finaliser.",
            details: [
                "Rendez-vous diagnostic pour analyser votre avancement",
                "Relecture et optimisation de votre budget",
                "Aide à la recherche des prestataires manquants",
                "Vérification des contrats et des devis déjà signés",
                "Conseils personnalisés selon vos besoins",
                "Création ou ajustement de votre ligne directrice (style, ambiance, couleurs)",
                "Mise en cohérence globale de votre mariage",
                "Élaboration du planning détaillé du jour J",
                "Coordination complète le jour du mariage",
                "Gestion des imprévus le jour J",
                "Présence de l’équipe Maison Perla le jour J"
            ],
            color: "#f174a4", // Pink
            image1: "/assets/Luz1.JPG",
            image2: "/assets/Luz2.JPG",
            image3: "/assets/Luz3.JPG"
        },
        {
            id: 3,
            title: "Brisa",
            subtitle: "Coordination du jour J",
            description: "Pour profiter pleinement de votre mariage sans stress.",
            details: [
                "Rendez-vous un mois avant pour reprendre tout le dossier",
                "Contact avec tous vos prestataires",
                "Création du planning ultra détaillé du jour J",
                "Visite du lieu pour anticiper l’installation",
                "Gestion de l’installation (cérémonie, réception, tables, espaces)",
                "Accueil et briefing des prestataires",
                "Gestion du timing de la journée",
                "Coordination des moments clés (cérémonie, cocktail, repas, animations)",
                "Gestion des imprévus en toute discrétion",
                "Présence de 1 à 2 coordinatrices selon la taille du mariage",
                "Fin de prestation jusqu'à l’ouverture de bal (ou selon accord)"
            ],
            color: "#fd5d69", // Coral/Red
            image1: "/assets/Luz2.JPG",
            image2: "/assets/Brisa2.JPG",
            image3: "/assets/Luz2.JPG"
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
                                <div className="organisation__panel-text">
                                    <p className="organisation__panel-desc">{service.description}</p>
                                    <ul className="organisation__panel-list">
                                        {service.details.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="organisation__panel-img-container">
                                    <img className="organisation__panel-img" src={service.image1} alt={service.title} />
                                    {/* <img className="organisation__panel-img" src={service.image2} alt={service.title} />
                                    <img className="organisation__panel-img" src={service.image3} alt={service.title} /> */}
                                </div>
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

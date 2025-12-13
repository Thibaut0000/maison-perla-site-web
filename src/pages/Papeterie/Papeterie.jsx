import './Papeterie.css'
import { useState } from 'react'

function Papeterie() {

    const [activeId, setActiveId] = useState(null)

    const services = [
        {
            id: 1,
            title: "Papeterie",
            subtitle: "Sous Titre",
            description: "Faire-part & Save the Date (papier et digital) Menus, marque-places, plans de table Cartes de remerciement et papeterie d’accueil (livrets, panneaux de bienvenue, etc.) Impression sur papiers texturés, dorures à chaud, sceaux de cire, rubans en soie naturelle",
            details: [
                "Détails 1",
                "Détails 2",
                "Détails 3",
                "Détails 4"
            ],
            color: "#040057" // Bleu
        },
        {
            id: 2,
            title: "L’Art de recevoir",
            subtitle: "Sous Titre",
            description: "Sélection du linge de table, vaisselle et verrerie Création d’un concept harmonieux entre fleurs, lumière et papeterie Installation complète le jour J Possibilité de moodboard personnalisé avant validation finale",
            details: [
                "Détails 1",
                "Détails 2",
                "Détails 3",
                "Détails 4"
            ],
            color: "#f174a4" // Pink
        },
        {
            id: 3,
            title: "Décoration",
            subtitle: "Sous Titre",
            description: "Création d’arches, centres de table, compositions murales Décoration de cérémonie, réception et tables d’honneur Location ou création sur mesure d’éléments décoratifs Palette de couleurs et matières définie selon votre univers",
            details: [
                "Détails 1",
                "Détails 2",
                "Détails 3",
                "Détails 4"
            ],
            color: "#fd5d69" // Coral/Red
        },
        {
            id: 4,
            title: "Accessoires",
            subtitle: "Sous Titre",
            description: "Accessoires personnalisés Signalétique sur mesure (bar à cocktails, livre d’or, cadeaux invités) Création de corners thématiques (coin photo, bar, espace détente) Éclairage doux et mise en valeur des espaces clés",
            details: [
                "Détails 1",
                "Détails 2",
                "Détails 3",
                "Détails 4"
            ],
            color: "#f97e07" // orange
        }
    ]

    const handlePanelClick = (id) => {
        setActiveId(activeId === id ? null : id)
    }

    return (
        <main className="papeterie">
            <div className="papeterie__background">
                <img
                    src="/assets/jardin.png"
                    alt=""
                    className="papeterie__background-img"
                />
                <div className="papeterie__background-overlay"></div>
            </div>

            <header className="papeterie__header">
                <h1 className="papeterie__title">
                    <span className="papeterie__title-script">Service</span>
                    <span className="papeterie__title-main">Papeterie et Décorations</span>
                </h1>
            </header>

            <section className="papeterie__accordion">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className={`papeterie__panel ${activeId === service.id ? 'active' : ''} ${activeId && activeId !== service.id ? 'inactive' : ''}`}
                        onClick={() => handlePanelClick(service.id)}
                        style={{ '--service-color': service.color }}
                    >
                        <div className="papeterie__panel-content">
                            <h2 className="papeterie__panel-title">{service.title}</h2>
                            <h3 className="papeterie__panel-subtitle">{service.subtitle}</h3>

                            <div className="papeterie__panel-details">
                                <p className="papeterie__panel-desc">{service.description}</p>
                                <ul className="papeterie__panel-list">
                                    {service.details.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Overlay to darken inactive panels or tint background */}
                        <div className="papeterie__panel-overlay"></div>
                    </div>
                ))}
            </section>
        </main>
    )
}

export default Papeterie

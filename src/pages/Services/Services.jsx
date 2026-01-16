import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Testimonials from '../../components/Testimonials/Testimonials'
import './Services.css'

function Services() {
    // State pour les accordéons
    const [activeFormule, setActiveFormule] = useState(null)
    const [activePapeterie, setActivePapeterie] = useState(null)
    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    // Refs pour les animations au scroll
    const sectionsRef = useRef([])

    // Données des formules (de l'ancienne page Organisation)
    const formules = [
        {
            id: 1,
            title: "Perla Blanca",
            subtitle: "Organisation complète",
            description: "On prend en charge l'intégralité de votre mariage, de A à Z",
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
                "Présence de l'équipe Maison Perla le jour J",
                "Soutien émotionnel (oui, ça compte beaucoup ❤️)"
            ],
            color: "#f97e07",
            image: "/assets/PerlaBlanca1.JPEG"
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
                "Présence de l'équipe Maison Perla le jour J"
            ],
            color: "#f174a4",
            image: "/assets/Luz1.JPG"
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
                "Visite du lieu pour anticiper l'installation",
                "Gestion de l'installation (cérémonie, réception, tables, espaces)",
                "Accueil et briefing des prestataires",
                "Gestion du timing de la journée",
                "Coordination des moments clés (cérémonie, cocktail, repas, animations)",
                "Gestion des imprévus en toute discrétion",
                "Présence de 1 à 2 coordinatrices selon la taille du mariage",
                "Fin de prestation jusqu'à l'ouverture de bal (ou selon accord)"
            ],
            color: "#fd5d69",
            image: "/assets/Brisa2.JPG"
        }
    ]

    // Données papeterie & décoration
    const papeterieServices = [
        {
            id: 1,
            title: "Papeterie",
            subtitle: "Nous prendrons soin de chaque détail, de la conception à la réalisation, pour que votre papeterie reflète parfaitement l'essence de votre mariage.",
            details: [
                "Faire-part & Save the Date (papier et digital)",
                "Menus, marque-places, plans de table",
                "Cartes de remerciement et papeterie d'accueil (livrets, panneaux de bienvenue, etc.)",
                "Impression sur papiers texturés, dorures à chaud, sceaux de cire, rubans en soie naturelle"
            ],
            color: "#040057"
        },
        {
            id: 2,
            title: "L'Art de recevoir",
            subtitle: "Une harmonie parfaite entre arts de la table et mise en lumière pour une réception d'exception.",
            details: [
                "Sélection du linge de table, vaisselle et verrerie",
                "Création d'un concept harmonieux entre fleurs, lumière et papeterie",
                "Installation complète le jour J",
                "Possibilité de moodboard personnalisé avant validation finale"
            ],
            color: "#f174a4"
        },
        {
            id: 3,
            title: "Décoration",
            subtitle: "Une scénographie sur mesure qui transforme l'espace et sublime votre histoire.",
            details: [
                "Création d'arches, centres de table, compositions murales",
                "Décoration de cérémonie, réception et tables d'honneur",
                "Location ou création sur mesure d'éléments décoratifs",
                "Palette de couleurs et matières définie selon votre univers"
            ],
            color: "#fd5d69"
        },
        {
            id: 4,
            title: "Accessoires",
            subtitle: "Les détails subtils et la signalétique qui apportent la touche finale à votre univers.",
            details: [
                "Accessoires personnalisés",
                "Signalétique sur mesure (bar à cocktails, livre d'or, cadeaux invités)",
                "Création de corners thématiques (coin photo, bar, espace détente)",
                "Éclairage doux et mise en valeur des espaces clés"
            ],
            color: "#f97e07"
        }
    ]


    //FONCTION INUTILE DEFILEMENT DES TÉMOIGNAGES DANS CSS SANS LIEN AVEC USEEFFECT -> .services-testimonials__track
    // Auto-défilement des témoignages
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    //     }, 5000)
    //     return () => clearInterval(interval)
    // }, [testimonials.length])

    // Animation au scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in')
                    }
                })
            },
            { threshold: 0.1 }
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
        <main className="services-page">
            {/* Section 1: Hero / Introduction */}
            <section className="services-hero" ref={addToRefs}>
                <div className="services-hero__content">
                    <div className="services-hero__text">
                        <span className="services-hero__label">Bienvenue chez Maison Perla</span>
                        <h1 className="services-hero__title">
                            <span className="services-hero__title-script">Nos</span>
                            <span className="services-hero__title-main">Services</span>
                        </h1>
                        <p className="services-hero__description">
                            Chez <strong>Maison Perla</strong>, nous croyons que chaque mariage est une histoire unique qui mérite d'être racontée avec élégance et authenticité.
                            Alessandra et Cristina, fondatrices passionnées, vous accompagnent dans la création d'un événement à votre image.
                        </p>
                        <p className="services-hero__description">
                            De l'<strong>organisation complète</strong> à la <strong>coordination du jour J</strong>, en passant par la <strong>papeterie sur mesure</strong> et la <strong>décoration florale</strong>,
                            nous mettons notre expertise et notre sensibilité au service de votre plus beau jour.
                        </p>
                        <div className="services-hero__cta">
                            <a href="#formules" className="services-hero__btn services-hero__btn--primary">
                                Découvrir nos formules
                            </a>
                            <a href="#papeterie" className="services-hero__btn services-hero__btn--secondary">
                                Papeterie & Décoration
                            </a>
                        </div>
                    </div>
                    <div className="services-hero__image">
                        <div className="services-hero__image-wrapper">
                            <img
                                src="/assets/illustationNosServices1.JPG"
                                alt="Maison Perla - Organisation de mariage"
                            />
                            <div className="services-hero__image-decoration"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Nos Formules Organisation */}
            <section className="services-formules" id="formules" ref={addToRefs}>
                <div className="services-formules__header">
                    <span className="section-label">Organisation de mariage</span>
                    <h2 className="section-title">
                        <span className="section-title__script">Nos</span>
                        <span className="section-title__main">Formules</span>
                    </h2>
                    <p className="section-description">
                        Trois formules pensées pour s'adapter à vos besoins, votre budget et votre niveau d'implication souhaité.
                    </p>
                </div>

                <div className="services-formules__accordion">
                    {formules.map((formule) => (
                        <div
                            key={formule.id}
                            className={`formule-panel ${activeFormule === formule.id ? 'active' : ''} ${activeFormule && activeFormule !== formule.id ? 'inactive' : ''}`}
                            onClick={() => setActiveFormule(activeFormule === formule.id ? null : formule.id)}
                            style={{ '--formule-color': formule.color }}
                        >
                            <div className="formule-panel__header">
                                <span className="formule-panel__number">0{formule.id}</span>
                                <h3 className="formule-panel__title">{formule.title}</h3>
                                <span className="formule-panel__subtitle">{formule.subtitle}</span>
                            </div>

                            <div className="formule-panel__content">
                                <div className="formule-panel__text">
                                    <p className="formule-panel__desc">{formule.description}</p>
                                    <ul className="formule-panel__list">
                                        {formule.details.map((item, index) => (
                                            <li key={index}>
                                                <span className="formule-panel__check">✓</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="formule-panel__image">
                                    <img src={formule.image} alt={formule.title} />
                                </div>
                            </div>

                            <div className="formule-panel__overlay"></div>
                            <div className="formule-panel__expand-icon">
                                <span>{activeFormule === formule.id ? '−' : '+'}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Placeholder pour image supplémentaire */}
                <div className="services-formules__image-banner">
                    <div className="image-placeholder" data-text="📷 Image décorative suggérée ici">
                        {/* Ajouter une image panoramique de mariage ici */}
                        {/* <img src="/assets/votre-image.jpg" alt="Décoration mariage" /> */}
                    </div>
                </div>
            </section>

            {/* Section 3: Témoignages */}
            <Testimonials ref={addToRefs} />

            {/* Section 4: Papeterie & Décoration */}
            <section className="services-papeterie" id="papeterie" ref={addToRefs}>
                <div className="services-papeterie__header">
                    <span className="section-label">Sublimez chaque détail</span>
                    <h2 className="section-title">
                        <span className="section-title__script">Papeterie</span>
                        <span className="section-title__main">& Décoration</span>
                    </h2>
                    <p className="section-description">
                        De la première invitation au dernier détail de table, nous créons un univers visuel cohérent et raffiné.
                    </p>
                </div>

                <div className="services-papeterie__grid">
                    {papeterieServices.map((service) => (
                        <div
                            key={service.id}
                            className={`papeterie-card ${activePapeterie === service.id ? 'active' : ''}`}
                            onClick={() => setActivePapeterie(activePapeterie === service.id ? null : service.id)}
                            style={{ '--card-color': service.color }}
                        >
                            <div className="papeterie-card__number">0{service.id}</div>
                            <h3 className="papeterie-card__title">{service.title}</h3>
                            <p className="papeterie-card__subtitle">{service.subtitle}</p>

                            <div className="papeterie-card__details">
                                <ul>
                                    {service.details.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="papeterie-card__footer">
                                <span className="papeterie-card__more">
                                    {activePapeterie === service.id ? 'Réduire' : 'En savoir plus'}
                                </span>
                            </div>

                            <div className="papeterie-card__bg"></div>
                        </div>
                    ))}
                </div>

                {/* Galerie d'images suggestion */}
                <div className="services-papeterie__gallery">
                    <div className="gallery-placeholder" data-text="📷 Galerie photos papeterie suggérée">
                        {/* Ajouter des images de papeterie ici */}
                    </div>
                    <div className="gallery-placeholder" data-text="📷 Photo décoration table">
                        {/* Ajouter des images ici */}
                    </div>
                    <div className="gallery-placeholder" data-text="📷 Photo accessoires">
                        {/* Ajouter des images ici */}
                    </div>
                </div>
            </section>

            {/* Section 5: Call to Action */}
            <section className="services-cta" ref={addToRefs}>
                <div className="services-cta__content">
                    <h2 className="services-cta__title">
                        Prêts à créer <span>votre mariage de rêve</span> ?
                    </h2>
                    <p className="services-cta__text">
                        Contactez-nous pour un premier échange sans engagement. Nous serons ravies de découvrir votre projet.
                    </p>
                    <Link to="/contact" className="services-cta__btn">
                        Nous contacter
                        <span className="services-cta__btn-arrow">→</span>
                    </Link>
                </div>
                <div className="services-cta__decoration">
                    <div className="services-cta__circle services-cta__circle--1"></div>
                    <div className="services-cta__circle services-cta__circle--2"></div>
                    <div className="services-cta__circle services-cta__circle--3"></div>
                </div>
            </section>
        </main>
    )
}

export default Services

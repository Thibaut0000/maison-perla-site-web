import './Papeterie.css'

function Papeterie() {
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

            <section className="papeterie__header">
                <h1 className="papeterie__title">
                    <span className="papeterie__title-script">Sefvice</span>
                    <span className="papeterie__title-main">Papeterie et Décorations</span>
                </h1>
            </section>

            <section className="papeterie__content">
                <div className="papeterie__section">
                    <h2 className="papeterie__subtitle">Papeterie</h2>
                    <p className="papeterie__text">
                        Faire-part & Save the Date (papier et digital)
                        Menus, marque-places, plans de table
                        Cartes de remerciement et papeterie d’accueil (livrets, panneaux de bienvenue, etc.)
                        Impression sur papiers texturés, dorures à chaud, sceaux de cire, rubans en soie naturelle
                    </p>
                </div>

                <div className="papeterie__section papeterie__section--alt">
                    <h2 className="papeterie__subtitle">L’Art de recevoir</h2>
                    <p className="papeterie__text">
                        Sélection du linge de table, vaisselle et verrerie
                        Création d’un concept harmonieux entre fleurs, lumière et papeterie
                        Installation complète le jour J
                        Possibilité de moodboard personnalisé avant validation finale
                    </p>
                </div>

                <div className="papeterie__section">
                    <h2 className="papeterie__subtitle">Décoration</h2>
                    <p className="papeterie__text">
                        Création d’arches, centres de table, compositions murales
                        Décoration de cérémonie, réception et tables d’honneur
                        Location ou création sur mesure d’éléments décoratifs
                        Palette de couleurs et matières définie selon votre univers

                    </p>
                </div>

                <div className="papeterie__section">
                    <h2 className="papeterie__subtitle">Accessoires</h2>
                    <p className="papeterie__text">
                        Accessoires personnalisés
                        Signalétique sur mesure (bar à cocktails, livre d’or, cadeaux invités)
                        Création de corners thématiques (coin photo, bar, espace détente)
                        Éclairage doux et mise en valeur des espaces clés


                    </p>
                </div>
            </section>
        </main>
    )
}

export default Papeterie

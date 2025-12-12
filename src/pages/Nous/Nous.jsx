import './Nous.css'

function Nous() {
    return (
        <main className="nous">
            <div className="nous__background">
                <img
                    src="/assets/jardin.png"
                    alt=""
                    className="nous__background-img"
                />
                <div className="nous__background-overlay"></div>
            </div>

            <section className="nous__header">
                <h1 className="nous__title">
                    <span className="nous__title-script">Notre</span>
                    <span className="nous__title-main">Identité</span>
                </h1>
            </section>

            <section className="nous__content">
                <div className="nous__section">
                    <h2 className="nous__subtitle">Notre Histoire</h2>
                    <p className="nous__text">
                        Depuis nos débuts, Maison Perla cultive l'art de l'élégance et du détail.
                        Née d'une passion pour les moments d'exception, notre maison s'efforce de
                        transformer chaque événement en un souvenir inoubliable.
                    </p>
                </div>

                <div className="nous__section nous__section--alt">
                    <h2 className="nous__subtitle">Nos Engagements</h2>
                    <p className="nous__text">
                        Nous nous engageons à offrir une qualité irréprochable et un service sur mesure.
                        L'écoute, la créativité et la rigueur sont au cœur de notre démarche pour
                        garantir votre satisfaction absolue.
                    </p>
                </div>

                <div className="nous__section">
                    <h2 className="nous__subtitle">Notre Mission</h2>
                    <p className="nous__text">
                        Notre mission est de sublimer vos instants précieux. Que ce soit pour un mariage,
                        une réception ou un événement corporatif, nous mettons tout en œuvre pour créer
                        une atmosphère magique qui vous ressemble.
                    </p>
                </div>
            </section>
        </main>
    )
}

export default Nous

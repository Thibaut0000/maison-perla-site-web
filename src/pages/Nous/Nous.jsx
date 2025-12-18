import './Nous.css'

function Nous() {
    return (
        <main className="nous">
            <div className="nous__background"></div>

            <div className="nous__container">
                <header className="nous__header">
                    <h1 className="nous__title">
                        <span className="nous__title-script">Qui?</span>
                        <span className="nous__title-sub">LES FONDATRICES</span>
                    </h1>
                </header>

                <div className="nous__founders">
                    {/* Alessandra */}
                    <div className="nous__founder nous__founder--left">
                        <div className="nous__photo-container">
                            <img src="/assets/AlePhoto.svg" alt="Alessandra" className="nous__photo" />
                        </div>
                    </div>

                    {/* Cristina */}
                    <div className="nous__founder nous__founder--right">
                        <div className="nous__photo-container">
                            <img src="/assets/ChristinaPhoto.svg" alt="Cristina" className="nous__photo" />
                        </div>
                    </div>
                </div>

                <div className="nous__footer">
                    <p className="nous__footer-text">
                        Nous mêlons l'élégance à la <strong className="orange-text">française</strong> et la <strong className="orange-text">chaleur latino-américaine</strong> pour
                        offrir à nos clients une <strong className="orange-text">expérience unique</strong>, pleine de vie, d'émotions et de raffinement.
                    </p>
                </div>
            </div>

            <section className="nous__history">
                <div className="nous__history-background">
                    <img
                        src="/assets/Plage.png"
                        alt=""
                        className="nous__history-background-img"
                        aria-hidden="true"
                    />
                    <div className="nous__history-background-overlay"></div>
                </div>

                <div className="nous__history-top-graphic">
                    <div className="nous__photo-container">
                        <img src="/assets/voyageVF.svg" alt="Avion" className="" />
                    </div>
                </div>

                <div className="nous__history-content">
                    <div className="nous__history-grid">
                        {/* 4 Placeholder images for the grid */}
                        <div className="nous__history-img-wrapper"><img src="/assets/photo1.png" alt="Souvenir" /></div>
                        <div className="nous__history-img-wrapper"><img src="/assets/photo2.png" alt="Souvenir" /></div>
                        <div className="nous__history-img-wrapper"><img src="/assets/photo3.png" alt="Souvenir" /></div>
                        <div className="nous__history-img-wrapper"><img src="/assets/photo4.png" alt="Souvenir" /></div>
                    </div>

                    <div className="nous__history-text-col">
                        <p>
                            Maison Perla, c'est avant tout une <strong>histoire de famille</strong>, de passion et de transmission.
                            Une mère et sa fille, Cristina et Alessandra, unies par le même amour du beau, du partage et de l'émotion.
                        </p>
                        <p>
                            <strong>Cristina</strong> a fait naître cette passion sur l'île de Margarita, au Venezuela, où elle a organisé mariages et événements pendant plus de dix ans.
                            Une île lumineuse, surnommée <em>« la perle des Caraïbes »</em>, qui a inspiré le nom de notre maison et symbolise ce que nous aimons créer : des instants précieux, rares et éclatants.
                        </p>
                        <p>
                            <strong>Alessandra</strong> a grandi au cœur de cet univers, entourée de rires, de musique, de fleurs et de belles histoires d'amour.
                            Aujourd'hui, elle apporte sa fraîcheur, sa créativité et son sens du détail, pour donner vie à des événements à la fois <strong>authentiques, festifs et élégants</strong>.
                        </p>
                        <p>
                            Ensemble, nous avons créé Maison Perla : une maison d'émotions, d'élégance et de convivialité, où chaque événement est imaginé avec cœur.
                        </p>
                        <p>
                            Nous croyons que la réussite d'un événement repose sur une synergie <strong>entre passion, écoute et savoir-faire</strong>, partagée avec des partenaires qui vibrent à la même fréquence que nous.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Nous


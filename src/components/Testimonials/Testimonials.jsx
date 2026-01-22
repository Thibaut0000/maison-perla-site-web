import { forwardRef } from 'react'
import './Testimonials.css'

const Testimonials = forwardRef((props, ref) => {
    const testimonials = [
        {
            id: 1,
            name: "Sophie & Thomas",
            location: "Mariage à Annecy",
            text: "Alessandra et Cristina ont transformé notre vision en réalité. Leur attention aux détails et leur calme le jour J nous ont permis de profiter pleinement de chaque instant!! Un immense merci !",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
            rating: 4
        },
        {
            id: 2,
            name: "Marie & Alexandre",
            location: "Mariage à Annecy",
            text: "De la papeterie personnalisée à la coordination parfaite, Maison Perla a dépassé toutes nos attentes. Notre mariage était exactement comme nous l'avions rêvé, en mieux !",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
            rating: 4
        },
        {
            id: 3,
            name: "Camille & Julien",
            location: "Mariage à Talloires",
            text: "Ale nous a libérés de tout stress. Cristina a géré chaque prestataire avec une efficacité remarquable. On recommande les yeux fermés !",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
            rating: 5
        },
        {
            id: 4,
            name: "Laura & Maxime",
            location: "Mariage à Faverges",
            text: "Alessandra et Cristina a su capturer notre personnalité dans chaque détail. La décoration florale était à couper le souffle. Merci pour cette journée magique !!",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
            rating: 5
        },
        {
            id: 5,
            name: "Émilie & Pierre",
            location: "Mariage à Liège",
            text: "C'était parfait pour nous. Alessandra nous a aidés à finaliser notre mariage, on vous embrasse fort toutes les deux :)",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
            rating: 5
        },
        {
            id: 6,
            name: "Chloé & Antoine",
            location: "Mariage à Annecy",
            text: "La coordination du jour J par l'équipe était impeccable. Nous avons pu profiter de chaque moment sans nous soucier de rien. Merci infiniment !",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
            rating: 4
        }
    ]

    return (
        <section className="testimonials-section" ref={ref}>
            <div className="testimonials-section__background">
                <div className="testimonials-section__shape testimonials-section__shape--1"></div>
                <div className="testimonials-section__shape testimonials-section__shape--2"></div>
            </div>

            <div className="testimonials-section__header">
                <span className="section-label section-label--light">Ce qu'ils disent de nous</span>
                <h2 className="section-title section-title--light">
                    <span className="section-title__script">Témoignages</span>
                    <span className="section-title__main">Clients</span>
                </h2>
            </div>

            <div className="testimonials-section__carousel">
                <div className="testimonials-section__track">
                    {/* Dupliquer les témoignages pour l'effet infini */}
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                        <div key={`${testimonial.id}-${index}`} className="testimonial-card">
                            <div className="testimonial-card__stars">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </div>
                            <p className="testimonial-card__text">"{testimonial.text}"</p>
                            <div className="testimonial-card__author">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="testimonial-card__avatar"
                                />
                                <div className="testimonial-card__info">
                                    <span className="testimonial-card__name">{testimonial.name}</span>
                                    <span className="testimonial-card__location">{testimonial.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
})

Testimonials.displayName = 'Testimonials'

export default Testimonials

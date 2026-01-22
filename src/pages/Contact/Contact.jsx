import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import SocialLinks from '../../components/SocialLinks/SocialLinks'
import './Contact.css'

// Configuration EmailJS via variables d'environnement Vite
const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
}

// Page de contact avec formulaire EmailJS et informations des wedding planners
function Contact() {
  // Reference vers le formulaire pour EmailJS
  const formRef = useRef(null)

  // State pour gerer l'etat du formulaire
  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    errorMessage: ''
  })

  // State pour les donnees du formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: ''
  })

  // Gestion des changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Soumission du formulaire via EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault()

    setFormState({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
      errorMessage: ''
    })

    try {
      // Envoi de l'email via EmailJS
      await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        formRef.current,
        EMAILJS_CONFIG.publicKey
      )

      // Succes de l'envoi
      setFormState({
        isSubmitting: false,
        isSuccess: true,
        isError: false,
        errorMessage: ''
      })

      // Reset du formulaire
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        message: ''
      })

    } catch (error) {
      // Erreur lors de l'envoi
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        errorMessage: 'Une erreur est survenue. Veuillez réessayer ou nous contacter directement par téléphone.'
      })
      // Log uniquement en développement
      if (import.meta.env.DEV) {
        console.error('Erreur EmailJS:', error)
      }
    }
  }

  return (
    <main className="contact">
      {/* Image de fond decorative */}
      <div className="contact__background">
        <img
          src="/assets/contact-bg.png"
          alt=""
          className="contact__background-img"
          aria-hidden="true"
        />
        <div className="contact__background-overlay"></div>
      </div>

      {/* Contenu principal */}
      <div className="contact__container">
        {/* Section titre */}
        <header className="contact__header">
          <h1 className="contact__title">
            <span className="section-title__script">Contactez</span>
            <span className="section-title__main">Nous</span>
          </h1>
          <p className="contact__intro">
            Prêtes à transformer votre vision en un événement inoubliable ?
            Partagez-nous votre projet et commençons cette belle aventure ensemble.
          </p>
        </header>

        {/* Section principale avec formulaire et infos */}
        <div className="contact__content">
          {/* Formulaire de contact */}
          <section className="contact__form-section">
            <h2 className="contact__section-title">Parlons de votre projet</h2>

            <form
              ref={formRef}
              className="contact__form"
              onSubmit={handleSubmit}
            >
              {/* Nom complet */}
              <div className="contact__form-group">
                <label htmlFor="name" className="contact__label">
                  Votre nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="contact__input"
                  placeholder="Marie Dupont"
                  required
                />
              </div>

              {/* Email */}
              <div className="contact__form-group">
                <label htmlFor="email" className="contact__label">
                  Votre email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact__input"
                  placeholder="marie@exemple.com"
                  required
                />
              </div>

              {/* Telephone */}
              <div className="contact__form-group">
                <label htmlFor="phone" className="contact__label">
                  Votre téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="contact__input"
                  placeholder="+33 6 12 34 56 78"
                />
              </div>

              {/* Type d'evenement */}
              <div className="contact__form-group">
                <label htmlFor="eventType" className="contact__label">
                  Type d'événement *
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="contact__input contact__select"
                  required
                >
                  <option value="">Sélectionnez un type</option>
                  <option value="mariage">Mariage</option>
                  <option value="fiancailles">Fiançailles</option>
                  <option value="anniversaire">Anniversaire</option>
                  <option value="bapteme">Baptême</option>
                  <option value="corporate">Événement corporate</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              {/* Date de l'evenement */}
              <div className="contact__form-group">
                <label htmlFor="eventDate" className="contact__label">
                  Date envisagée
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="contact__input"
                />
              </div>

              {/* Message */}
              <div className="contact__form-group contact__form-group--full">
                <label htmlFor="message" className="contact__label">
                  Parlez-nous de votre projet *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="contact__input contact__textarea"
                  placeholder="Décrivez votre événement rêvé, le nombre d'invités, le lieu envisagé, vos inspirations..."
                  rows="5"
                  required
                />
              </div>

              {/* Message de succes */}
              {formState.isSuccess && (
                <div className="contact__message contact__message--success">
                  <span className="contact__message-icon">✓</span>
                  Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.
                </div>
              )}

              {/* Message d'erreur */}
              {formState.isError && (
                <div className="contact__message contact__message--error">
                  <span className="contact__message-icon">✕</span>
                  {formState.errorMessage}
                </div>
              )}

              {/* Bouton de soumission */}
              <button
                type="submit"
                className="contact__submit"
                disabled={formState.isSubmitting}
              >
                {formState.isSubmitting ? (
                  <>
                    <span className="contact__submit-spinner"></span>
                    Envoi en cours...
                  </>
                ) : (
                  'Envoyer ma demande'
                )}
              </button>
            </form>
          </section>

          {/* Section informations de contact */}
          <aside className="contact__info-section">
            {/* Carte Alessandra */}
            <div className="contact__card">
              <div className="contact__card-signature">
                <img
                  src="/assets/alessandra-signature.png"
                  alt="Alessandra"
                  className="contact__signature-img"
                />
              </div>
              <div className="contact__card-info">
                <a
                  href="tel:+33615943933"
                  className="contact__phone"
                >
                  <span className="contact__phone-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </span>
                  +33 6 15 94 39 33
                </a>
              </div>
            </div>

            {/* Carte Christina */}
            <div className="contact__card">
              <div className="contact__card-signature">
                <img
                  src="/assets/christina-signature.png"
                  alt="Christina"
                  className="contact__signature-img"
                />
              </div>
              <div className="contact__card-info">
                <a
                  href="tel:+33619193987"
                  className="contact__phone"
                >
                  <span className="contact__phone-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </span>
                  +33 6 19 19 39 87
                </a>
              </div>
            </div>

            {/* Reseaux sociaux */}
            <div className="contact__social">
              <h3 className="contact__social-title">Suivez nos créations</h3>
              <SocialLinks />
            </div>

            {/* Citation inspirante */}
            <blockquote className="contact__quote">
              <p>"Chaque événement est une histoire unique qui mérite d'être racontée avec élégance."</p>
              <cite>— Maison Perla</cite>
            </blockquote>
          </aside>
        </div>
      </div>
    </main>
  )
}

export default Contact

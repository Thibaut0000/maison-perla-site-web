import './SocialLinks.css'

// Liens vers les reseaux sociaux de Maison Perla
// Facebook sera ajoute ulterieurement
const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/maisonperlaevents/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    )
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@maisonperlaevents?lang=fr',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
      </svg>
    )
  },
  {
    name: 'Pinterest',
    url: 'https://fr.pinterest.com/46ukuam4xhkm5676zz2ge1ujz0ep99/?invite_code=40508d91192c4d5faec8565e4ca331b6&sender=900086812935243724',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
      </svg>
    )
  },
  {
    name: 'Facebook',
    url: '', // URL a ajouter plus tard
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    disabled: true // Desactive jusqu'a ce que l'URL soit fournie
  },
  {
    name: 'Mariage.net',
    url: 'https://www.mariages.net/organisation-mariage/maison-perla--e398707',
    icon: (
      <img alt='Mariages.net' src='/assets/MariageNet.svg' />
    )
  }
]

// Composant affichant les liens vers les reseaux sociaux
function SocialLinks() {
  return (
    <div className="social-links">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          className={`social-links__item ${social.disabled ? 'social-links__item--disabled' : ''}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Suivez-nous sur ${social.name}`}
          title={social.disabled ? 'Bientôt disponible' : social.name}
          onClick={social.disabled ? (e) => e.preventDefault() : undefined}
        >
          <span className="social-links__icon">
            {social.icon}
          </span>
          <span className="social-links__name">{social.name}</span>
        </a>
      ))}
    </div>
  )
}

export default SocialLinks

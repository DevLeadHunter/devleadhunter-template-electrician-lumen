import type { SiteContent } from './app/types/SiteContent'

/**
 * Mock SiteContent used by the `.playground` to preview the template in isolation.
 * Not shipped to production — edit it freely while designing your template.
 *
 * A realistic, fully-filled French electrician example: every SiteContent key is populated so
 * the whole page (hero, emergency, services, safety, gallery, reviews, FAQ, zone, contact…)
 * renders. `service.icon` values map to the template's LumenIcon set (panne, tableau,
 * renovation, domotique, irve, interphone).
 */
export const mockSiteContent: SiteContent = {
  businessName: 'Voltis Électricité',
  subtitle:
    'Dépannage, mise aux normes et rénovation électrique à Nantes et alentours — un artisan certifié, disponible 7j/7.',
  phone: '02 40 00 12 34',
  email: 'contact@voltis-electricite.fr',
  city: 'Nantes',
  area: 'Loire-Atlantique',
  // Copie éditoriale éditée par le client dans son CMS (absente = défaut de la template).
  heroBadge: 'Électricien certifié depuis 2008',
  servicesHeading: 'Nos prestations',
  about:
    "Électricien installé à Nantes depuis plus de douze ans, j'interviens sur vos dépannages, mises aux normes et rénovations complètes avec la même exigence. Quand vous appelez, vous parlez directement à l'artisan qui viendra chez vous — pas à un standard. Diagnostic honnête, matériel certifié et installation vérifiée avant remise sous tension : c'est ma façon de travailler.",
  heroImage: 'https://picsum.photos/seed/lumen-hero/800/600',
  aboutImage: 'https://picsum.photos/seed/lumen-about/800/600',
  palette: {
    primary: '#FFD400',
    secondary: '#070B14',
    accent: '#FF9F1C',
  },
  services: [
    {
      title: 'Dépannage & urgences',
      description:
        'Panne de courant, disjoncteur qui saute, prise qui chauffe : intervention rapide 7j/7 pour sécuriser votre installation.',
      icon: 'panne',
    },
    {
      title: 'Mise en sécurité & aux normes',
      description:
        'Remplacement de tableau vétuste, mise en conformité NF C 15-100 et passage du Consuel pour une installation sûre.',
      icon: 'tableau',
    },
    {
      title: 'Rénovation électrique',
      description:
        'Rénovation complète ou partielle de votre installation, du tirage des câbles aux finitions soignées.',
      icon: 'renovation',
    },
    {
      title: 'Domotique & maison connectée',
      description:
        'Éclairage pilotable, volets, chauffage et scénarios connectés pour plus de confort au quotidien.',
      icon: 'domotique',
    },
    {
      title: 'Borne de recharge IRVE',
      description:
        'Installation certifiée de bornes de recharge pour véhicule électrique, à domicile ou en copropriété.',
      icon: 'irve',
    },
    {
      title: 'Interphone & vidéophone',
      description:
        "Pose et remplacement de systèmes d'interphonie et de vidéophone, en maison comme en immeuble.",
      icon: 'interphone',
    },
  ],
  gallery: [
    {
      url: 'https://picsum.photos/seed/lumen1/800/600',
      alt: "Rénovation complète d'un tableau électrique",
    },
    {
      url: 'https://picsum.photos/seed/lumen2/800/600',
      alt: "Installation d'une borne de recharge IRVE",
    },
    {
      url: 'https://picsum.photos/seed/lumen3/800/600',
      alt: "Mise aux normes d'un logement ancien",
    },
    { url: 'https://picsum.photos/seed/lumen4/800/600', alt: "Pose d'éclairage LED encastré" },
    {
      url: 'https://picsum.photos/seed/lumen5/800/600',
      alt: "Câblage soigné d'un coffret de communication",
    },
    { url: 'https://picsum.photos/seed/lumen6/800/600', alt: 'Tableau domotique connecté' },
  ],
  reviews: [
    {
      author: 'Sophie L.',
      rating: 5,
      text: 'Intervention rapide un dimanche pour une panne de courant totale. Diagnostic clair, problème réglé en une heure, prix annoncé respecté. Je recommande vivement.',
    },
    {
      author: 'Marc D.',
      rating: 5,
      text: 'A refait entièrement le tableau électrique de notre maison des années 70. Travail impeccable, passage du Consuel sans souci. Un vrai professionnel.',
    },
    {
      author: 'Christine B.',
      rating: 4,
      text: "Installation d'une borne de recharge pour ma voiture électrique. Explications claires, chantier propre et ponctuel. Très satisfaite.",
    },
    {
      author: 'Julien P.',
      rating: 5,
      text: 'Mise aux normes complète avant la vente de mon appartement. Diagnostic honnête, sans travaux inutiles. Parfait du début à la fin.',
    },
  ],
  faq: [
    {
      question: 'Intervenez-vous en urgence le week-end ?',
      answer:
        'Oui, nous intervenons 7j/7 pour les urgences électriques (panne totale, disjoncteur qui saute, odeur de brûlé). Appelez-nous, on vous rappelle rapidement.',
    },
    {
      question: 'Le devis est-il gratuit ?',
      answer:
        'Le devis est toujours gratuit et sans engagement. On se déplace, on diagnostique votre installation et on vous remet un prix clair avant toute intervention.',
    },
    {
      question: 'Mes travaux seront-ils aux normes NF C 15-100 ?',
      answer:
        "Toutes nos installations respectent la norme NF C 15-100 et nous gérons le passage du Consuel lorsque c'est nécessaire pour attester la conformité.",
    },
    {
      question: 'Installez-vous des bornes de recharge pour voiture électrique ?',
      answer:
        'Oui, nous sommes habilités IRVE et posons des bornes de recharge à domicile comme en copropriété, avec la puissance adaptée à votre installation.',
    },
    {
      question: 'Proposez-vous une garantie sur vos travaux ?',
      answer:
        'Oui. Nos installations sont couvertes par la garantie décennale et nous restons disponibles en cas de besoin après le chantier.',
    },
  ],
  zones: ['Nantes', 'Saint-Herblain', 'Rezé', 'Vertou', 'Orvault', 'Carquefou'],
  social: [
    { network: 'facebook', url: 'https://facebook.com/voltis-electricite' },
    { network: 'instagram', url: 'https://instagram.com/voltis.electricite' },
  ],
  openingHours: [
    { day: 'Lundi', hours: '8h–18h' },
    { day: 'Mardi', hours: '8h–18h' },
    { day: 'Mercredi', hours: '8h–18h' },
    { day: 'Jeudi', hours: '8h–18h' },
    { day: 'Vendredi', hours: '8h–18h' },
    { day: 'Samedi', hours: '9h–12h' },
    { day: 'Dimanche', hours: 'Urgences uniquement' },
  ],
}

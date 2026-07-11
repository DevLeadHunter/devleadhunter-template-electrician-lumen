/**
 * Types + construction du contenu de la template 'electrician-lumen' (« Nuit électrique »).
 *
 * La template est une couche (layer) Nuxt autonome : elle ne connaît rien de Storyblok,
 * du tunnel ou de PostHog. Elle rend un `SiteContent` typé (les données variables réelles
 * du prospect) et POSSÈDE sa propre copie éditoriale/boilerplate (titres de sections,
 * cadrage dépannage/sécurité/méthode, badge hero, libellés CTA, repères de confiance…)
 * sous forme de valeurs par défaut — c'est du design, pas de la donnée client.
 *
 * `buildElectricianLumenContent` fusionne les deux : données variables issues de `SiteContent`,
 * boilerplate issu des défauts ci-dessous, pour produire la structure typée que les
 * sections attendent.
 */
import type { SiteContent } from '~/types/SiteContent'

export interface LumenTheme {
  primary: string
  secondary: string
  accent: string
}

export const lumenDefaultTheme: LumenTheme = {
  primary: '#FFD400',
  secondary: '#070B14',
  accent: '#FF9F1C',
}

export interface LumenHeroContent {
  badge: string
  title: string
  subtitle: string
  city: string
  phone: string
  ctaCallLabel: string
  ctaQuoteLabel: string
  image: string
  imageCaption: string
  points: string[]
}

export interface LumenTrustItem {
  value: string
  label: string
}

export interface LumenEmergencyContent {
  heading: string
  text: string
  phone: string
  availabilityLabel: string
  items: string[]
}

export interface LumenServiceItem {
  label: string
  description: string
  icon: string
}

export interface LumenServicesContent {
  heading: string
  subheading: string
  items: LumenServiceItem[]
}

export interface LumenSafetyItem {
  code: string
  label: string
}

export interface LumenSafetyContent {
  kicker: string
  heading: string
  text: string
  /** Photo secondaire du prospect (`SiteContent.aboutImage`) — chaîne vide = pas de photo. */
  image: string
  /** Légende éditoriale affichée sous la photo (défaut de la template). */
  imageCaption: string
  items: LumenSafetyItem[]
}

export interface LumenGalleryItem {
  image: string
  caption: string
}

export interface LumenGalleryContent {
  heading: string
  subheading: string
  items: LumenGalleryItem[]
}

export interface LumenProcessItem {
  title: string
  description: string
}

export interface LumenProcessContent {
  heading: string
  subheading: string
  items: LumenProcessItem[]
}

export interface LumenReviewItem {
  quote: string
  author: string
  rating: number
}

export interface LumenReviewsContent {
  heading: string
  items: LumenReviewItem[]
}

export interface LumenZoneContent {
  heading: string
  city: string
  areaLabel: string
  note: string
}

export interface LumenFaqItem {
  question: string
  answer: string
}

export interface LumenFaqContent {
  heading: string
  items: LumenFaqItem[]
}

export interface LumenContactContent {
  heading: string
  subheading: string
  phone: string
  email: string
  city: string
  hours: string
  ctaLabel: string
}

export interface LumenSocialLink {
  /** Réseau normalisé (facebook, instagram, linkedin, tiktok, youtube, twitter). */
  network: string
  /** Libellé lisible du réseau. */
  label: string
  /** URL complète du profil. */
  url: string
}

/** Contenu complet de la page, prêt à être rendu par les sections. */
export interface LumenPageContent {
  theme: LumenTheme
  hero: LumenHeroContent
  trustItems: LumenTrustItem[]
  emergency: LumenEmergencyContent
  services: LumenServicesContent
  safety: LumenSafetyContent
  gallery: LumenGalleryContent
  process: LumenProcessContent
  reviews: LumenReviewsContent
  zone: LumenZoneContent
  faq: LumenFaqContent
  contact: LumenContactContent
  social: LumenSocialLink[]
}

/**
 * Copie éditoriale/boilerplate possédée par la template (design, pas donnée client).
 * Ces libellés reproduisent l'intention d'une page entièrement remplie, afin que le rendu
 * visuel soit identique même quand `SiteContent` ne fournit que les données variables
 * (nom, téléphone, services, avis…). Les défauts « métier » sont ceux d'un électricien.
 */
const lumenDefaults = {
  heroBadge: 'Artisan électricien',
  heroSubtitle:
    'Dépannage, mise aux normes et installation électrique — un artisan certifié, pas une plateforme.',
  heroCtaCallLabel: 'Appeler maintenant',
  heroCtaQuoteLabel: 'Demander un devis',
  heroPoints: ['Devis gratuit', 'Intervention rapide', 'Travail garanti'] as string[],

  trustItems: [
    { value: '7j/7', label: 'Dépannage & urgences' },
    { value: 'NF C 15-100', label: 'Installations aux normes' },
    { value: 'Garantie décennale', label: 'Travaux assurés' },
    { value: 'Devis 0 €', label: 'Sans engagement' },
  ] as LumenTrustItem[],

  emergencyHeading: 'Une panne ? On intervient vite.',
  emergencyText:
    'Coupure de courant, disjoncteur qui saute, prise qui chauffe, tableau vétuste ? Coupez le courant au disjoncteur général, puis appelez : on vous rappelle vite et on sécurise votre installation au plus tôt.',
  emergencyAvailabilityLabel: 'Disponible 7j/7',
  emergencyItems: [
    'Panne de courant totale ou partielle',
    'Disjoncteur qui saute sans arrêt',
    'Prise ou interrupteur qui chauffe',
    'Tableau électrique vétuste ou dangereux',
  ] as string[],

  servicesHeading: 'Nos services',
  servicesSubheading:
    "Du simple dépannage à la rénovation complète de votre installation, tout le savoir-faire d'un électricien au même endroit.",

  safetyKicker: 'Sécurité & conformité',
  safetyHeading: 'Une installation sûre, aux normes',
  safetyText:
    'Une installation électrique, ça ne se voit pas — mais ça doit être irréprochable. Chaque intervention respecte la norme NF C 15-100 : protections adaptées, mise à la terre et différentiels haute sensibilité. On sécurise, on vérifie, et on vous explique.',
  safetyImageCaption: "L'artisan sur le terrain",
  safetyItems: [
    { code: 'NF C 15-100', label: 'Norme des installations basse tension' },
    { code: 'Consuel', label: 'Attestation de conformité' },
    { code: '30 mA', label: 'Différentiel haute sensibilité' },
    { code: 'Terre', label: 'Mise à la terre vérifiée' },
  ] as LumenSafetyItem[],

  galleryHeading: 'Nos chantiers récents',
  gallerySubheading:
    'Un aperçu de nos dernières interventions, du dépannage à la rénovation complète.',

  processHeading: 'Comment ça se passe',
  processSubheading: "Une méthode simple et transparente, de l'appel au contrôle final.",
  processItems: [
    {
      title: 'Votre appel',
      description:
        "Vous décrivez la panne ou le projet, on évalue ensemble l'urgence et les options.",
    },
    {
      title: 'Diagnostic & devis',
      description:
        'On se déplace, on diagnostique votre installation et on vous remet un devis clair et gratuit.',
    },
    {
      title: 'Intervention',
      description:
        "On réalise les travaux au moment convenu, proprement et dans les règles de l'art.",
    },
    {
      title: 'Contrôle & mise en service',
      description:
        "On teste chaque circuit, on vérifie la sécurité et on ne repart qu'une fois tout impeccable.",
    },
  ] as LumenProcessItem[],

  reviewsHeading: 'Ce que disent nos clients',

  zoneHeading: "Zone d'intervention",
  zoneNote:
    'Vous êtes juste à côté ? Appelez pour vérifier : nous intervenons aussi dans les communes voisines.',

  faqHeading: 'Questions fréquentes',

  contactHeading: 'Parlons de votre projet',
  contactSubheading:
    'Un dépannage, un devis, une question ? Contactez-nous, on vous répond rapidement.',
  contactCtaLabel: 'Appeler maintenant',
} as const

/**
 * Retourne le texte éditorial du contenu s'il est non vide, sinon le défaut de la template.
 * @param value Texte éditorial issu de `SiteContent` (potentiellement absent).
 * @param templateDefault Copie par défaut possédée par la template.
 * @returns Le texte à afficher.
 */
function resolveEditorialText(value: string | undefined, templateDefault: string): string {
  return typeof value === 'string' && value.trim().length > 0 ? value : templateDefault
}

/**
 * Formate une liste d'horaires d'ouverture en une chaîne lisible.
 * @param openingHours Liste `{ day, hours }` issue de `SiteContent` (potentiellement absente).
 * @returns Une chaîne « Jour hh–hh · Jour hh–hh », ou une chaîne vide si aucune donnée.
 */
function formatOpeningHours(openingHours: SiteContent['openingHours']): string {
  if (!Array.isArray(openingHours)) {
    return ''
  }
  return openingHours
    .map((entry): string => {
      const day: string = typeof entry.day === 'string' ? entry.day.trim() : ''
      const hours: string = typeof entry.hours === 'string' ? entry.hours.trim() : ''
      if (!day && !hours) {
        return ''
      }
      if (!hours) {
        return day
      }
      if (!day) {
        return hours
      }
      return `${day} ${hours}`
    })
    .filter((line): boolean => line.length > 0)
    .join(' · ')
}

/** Réseaux connus → libellés lisibles (accessibilité + title au survol). */
const SOCIAL_LABELS: Record<string, string> = {
  facebook: 'Facebook',
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
  tiktok: 'TikTok',
  youtube: 'YouTube',
  twitter: 'X (Twitter)',
}

/**
 * Normalise les liens réseaux sociaux (une URL non vide est requise).
 * @param social Liens bruts du prospect (optionnels).
 * @returns Les liens normalisés avec un libellé lisible.
 */
function normalizeSocial(social: SiteContent['social']): LumenSocialLink[] {
  if (!Array.isArray(social)) {
    return []
  }
  return social
    .filter((link): boolean => typeof link.url === 'string' && link.url.trim().length > 0)
    .map((link): LumenSocialLink => {
      const network: string = (link.network ?? '').trim().toLowerCase()
      return {
        network,
        label: SOCIAL_LABELS[network] ?? (network ? network : 'Lien'),
        url: (link.url ?? '').trim(),
      }
    })
}

/**
 * Construit le contenu de page entièrement typé à partir d'un `SiteContent`.
 *
 * Les champs VARIABLES (nom, téléphone, ville, services, avis, galerie, FAQ, horaires…)
 * proviennent de `content` ; les champs BOILERPLATE (titres de sections, cadrage éditorial,
 * repères de confiance, normes de sécurité, étapes…) proviennent des défauts de la template.
 * La copie ÉDITORIALE éditable par le client (badge et points du hero, libellés CTA, repères
 * de confiance, titres de sections — `aboutHeading` pilote le titre de la section sécurité)
 * est reprise de `content` quand elle est non vide, sinon retombe sur les défauts.
 * Les règles de filtrage d'origine sont conservées : galerie limitée à 8 éléments, avis/FAQ
 * sans texte écartés. `content.about` alimente le texte de la section sécurité (fallback défaut),
 * `content.aboutImage` sa photo (masquée si absente), `service.icon` pilote l'icône
 * (fallback `panne`).
 * @param content Données variables du prospect.
 * @returns Le contenu typé prêt pour le rendu par les sections.
 */
export function buildElectricianLumenContent(content: SiteContent): LumenPageContent {
  const palette = content.palette ?? {}

  const trustItemsFromContent: LumenTrustItem[] = Array.isArray(content.trustItems)
    ? content.trustItems
        .map((item): LumenTrustItem => ({ value: item.value ?? '', label: item.label ?? '' }))
        .filter((item): boolean => item.value.length > 0 || item.label.length > 0)
    : []
  const trustItems: LumenTrustItem[] = trustItemsFromContent.length
    ? trustItemsFromContent
    : lumenDefaults.trustItems

  const heroPointsFromContent: string[] = Array.isArray(content.heroPoints)
    ? content.heroPoints.filter(
        (point): boolean => typeof point === 'string' && point.trim().length > 0,
      )
    : []
  const heroPoints: string[] = heroPointsFromContent.length
    ? heroPointsFromContent
    : lumenDefaults.heroPoints

  const areaLabel: string =
    typeof content.area === 'string' && content.area.length > 0
      ? content.area
      : Array.isArray(content.zones)
        ? content.zones
            .filter((zone): boolean => typeof zone === 'string' && zone.length > 0)
            .join(' · ')
        : ''

  return {
    theme: {
      primary:
        typeof palette.primary === 'string' && palette.primary.length > 0
          ? palette.primary
          : lumenDefaultTheme.primary,
      secondary:
        typeof palette.secondary === 'string' && palette.secondary.length > 0
          ? palette.secondary
          : lumenDefaultTheme.secondary,
      accent:
        typeof palette.accent === 'string' && palette.accent.length > 0
          ? palette.accent
          : lumenDefaultTheme.accent,
    },
    hero: {
      badge: resolveEditorialText(content.heroBadge, lumenDefaults.heroBadge),
      title: content.businessName ?? '',
      subtitle:
        content.subtitle && content.subtitle.length > 0
          ? content.subtitle
          : lumenDefaults.heroSubtitle,
      city: content.city ?? '',
      phone: content.phone ?? '',
      ctaCallLabel: resolveEditorialText(content.ctaCallLabel, lumenDefaults.heroCtaCallLabel),
      ctaQuoteLabel: resolveEditorialText(content.ctaQuoteLabel, lumenDefaults.heroCtaQuoteLabel),
      image: content.heroImage ?? '',
      imageCaption: '',
      points: heroPoints,
    },
    trustItems,
    emergency: {
      heading: lumenDefaults.emergencyHeading,
      text: lumenDefaults.emergencyText,
      phone: content.phone ?? '',
      availabilityLabel: lumenDefaults.emergencyAvailabilityLabel,
      items: lumenDefaults.emergencyItems,
    },
    services: {
      heading: resolveEditorialText(content.servicesHeading, lumenDefaults.servicesHeading),
      subheading: lumenDefaults.servicesSubheading,
      items: Array.isArray(content.services)
        ? content.services.map((service): LumenServiceItem => ({
            label: service.title ?? '',
            description: service.description ?? '',
            icon: service.icon && service.icon.length > 0 ? service.icon : 'panne',
          }))
        : [],
    },
    safety: {
      kicker: lumenDefaults.safetyKicker,
      heading: resolveEditorialText(content.aboutHeading, lumenDefaults.safetyHeading),
      text: content.about && content.about.length > 0 ? content.about : lumenDefaults.safetyText,
      image: content.aboutImage ?? '',
      imageCaption: lumenDefaults.safetyImageCaption,
      items: lumenDefaults.safetyItems,
    },
    gallery: {
      heading: resolveEditorialText(content.galleryHeading, lumenDefaults.galleryHeading),
      subheading: lumenDefaults.gallerySubheading,
      items: Array.isArray(content.gallery)
        ? content.gallery
            .map((image): LumenGalleryItem => ({
              image: image.url ?? '',
              caption: image.alt ?? '',
            }))
            .filter((item): boolean => item.image.length > 0)
            .slice(0, 8)
        : [],
    },
    process: {
      heading: lumenDefaults.processHeading,
      subheading: lumenDefaults.processSubheading,
      items: lumenDefaults.processItems,
    },
    reviews: {
      heading: resolveEditorialText(content.reviewsHeading, lumenDefaults.reviewsHeading),
      items: Array.isArray(content.reviews)
        ? content.reviews
            .map((review): LumenReviewItem => ({
              quote: review.text ?? '',
              author: review.author && review.author.length > 0 ? review.author : 'Client',
              rating:
                typeof review.rating === 'number'
                  ? Math.min(5, Math.max(1, Math.round(review.rating)))
                  : 5,
            }))
            .filter((item): boolean => item.quote.length > 0)
        : [],
    },
    zone: {
      heading: lumenDefaults.zoneHeading,
      city: content.city ?? '',
      areaLabel,
      note: lumenDefaults.zoneNote,
    },
    faq: {
      heading: resolveEditorialText(content.faqHeading, lumenDefaults.faqHeading),
      items: Array.isArray(content.faq)
        ? content.faq
            .map((item): LumenFaqItem => ({
              question: item.question ?? '',
              answer: item.answer ?? '',
            }))
            .filter((item): boolean => item.question.length > 0)
        : [],
    },
    contact: {
      heading: resolveEditorialText(content.contactHeading, lumenDefaults.contactHeading),
      subheading: lumenDefaults.contactSubheading,
      phone: content.phone ?? '',
      email: content.email ?? '',
      city: content.city ?? '',
      hours: formatOpeningHours(content.openingHours),
      ctaLabel: lumenDefaults.contactCtaLabel,
    },
    social: normalizeSocial(content.social),
  }
}

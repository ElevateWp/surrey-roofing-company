import { Metadata } from 'next';
import { CLINIC_INFO } from './clinic-data';

const vercelHost = process.env.VERCEL_URL;
const deploymentUrl = vercelHost ? (vercelHost.startsWith('http') ? vercelHost : `https://${vercelHost}`) : 'http://localhost:3000';
export const BASE_URL = (process.env.NEXT_PUBLIC_SITE_URL || deploymentUrl).replace(/\/+$/, '');

export function createMetadata({
  title,
  description,
  pathname,
  image,
}: {
  title: string;
  description: string;
  pathname: string;
  image?: string;
}): Metadata {
  const url = `${BASE_URL}${pathname}`;
  const fullTitle = `${title} | ${CLINIC_INFO.name}`;
  const defaultImage = `${BASE_URL}/surrey-roofing-logo.png`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: CLINIC_INFO.name,
      locale: 'en_GB',
      type: 'website',
      images: [
        {
          url: image || defaultImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image || defaultImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    '@id': `${BASE_URL}/#business`,
    name: CLINIC_INFO.name,
    legalName: CLINIC_INFO.legalName,
    url: BASE_URL,
    telephone: CLINIC_INFO.contact.phone,
    ...(CLINIC_INFO.primaryLocation.city || CLINIC_INFO.primaryLocation.street ? { address: {
      '@type': 'PostalAddress',
      ...(CLINIC_INFO.primaryLocation.street ? { streetAddress: CLINIC_INFO.primaryLocation.street } : {}),
      ...(CLINIC_INFO.primaryLocation.city ? { addressLocality: CLINIC_INFO.primaryLocation.city } : {}),
      ...(CLINIC_INFO.primaryLocation.state ? { addressRegion: CLINIC_INFO.primaryLocation.state } : {}),
      ...(CLINIC_INFO.primaryLocation.postalCode ? { postalCode: CLINIC_INFO.primaryLocation.postalCode } : {}),
      addressCountry: CLINIC_INFO.primaryLocation.country,
    } } : {}),
    ...(CLINIC_INFO.primaryLocation.coordinates ? { geo: {
      '@type': 'GeoCoordinates',
      latitude: CLINIC_INFO.primaryLocation.coordinates.lat,
      longitude: CLINIC_INFO.primaryLocation.coordinates.lng,
    } } : {}),
    openingHoursSpecification: CLINIC_INFO.schedule
      .flatMap((item) => {
        const range = item.hours.match(/(\d{1,2})(?::(\d{2}))?\s*(AM|PM)[–-](\d{1,2})(?::(\d{2}))?\s*(AM|PM)/i);
        if (!range || item.hours.toLowerCase() === 'closed') return [];
        const to24Hour = (hourText: string, minuteText: string, meridiem: string) => {
          let hour = Number(hourText) % 12;
          if (meridiem.toUpperCase() === 'PM') hour += 12;
          return `${String(hour).padStart(2, '0')}:${minuteText}`;
        };
        const dayOfWeek = [item.day];
        return [{
        '@type': 'OpeningHoursSpecification',
        dayOfWeek,
        opens: to24Hour(range[1], range[2] || '00', range[3]),
        closes: to24Hour(range[4], range[5] || '00', range[6]),
      }];
      }),
  };
}

export function generateServiceSchema(serviceName: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    serviceType: 'Roof repairs, chimney work and roof restoration',
    url: `${BASE_URL}${url}`,
    provider: {
      '@type': 'LocalBusiness',
      name: CLINIC_INFO.name,
    },
  };
}

export function generateFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  };
}

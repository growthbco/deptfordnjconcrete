/**
 * Enhanced Schema Markup Utilities
 * Provides HomeAndConstructionBusiness schema with detailed service catalog
 */

import { SITE_CONFIG } from '../config';

// Service catalog with detailed information
export const SERVICE_CATALOG = [
  {
    '@type': 'Service',
    serviceType: 'Concrete Driveway Installation',
    name: 'Concrete Driveway Installation',
    description: 'Professional concrete driveway installation and repair services for residential and commercial properties. Durable, long-lasting driveways that enhance curb appeal and property value.',
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: SITE_CONFIG.name,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Deptford',
        addressRegion: 'NJ',
        addressCountry: 'US'
      },
      {
        '@type': 'City',
        name: 'Gloucester County',
        addressRegion: 'NJ',
        addressCountry: 'US'
      },
      {
        '@type': 'State',
        name: 'New Jersey',
        addressRegion: 'NJ',
        addressCountry: 'US'
      }
    ],
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        priceCurrency: 'USD',
        price: '2500',
        priceType: 'https://schema.org/StartingPrice',
        unitText: 'project'
      },
      description: 'Starting at $2,500 for standard concrete driveways. Free estimates available.'
    }
  },
  {
    '@type': 'Service',
    serviceType: 'Concrete Patio Installation',
    name: 'Concrete Patio Installation',
    description: 'Custom concrete patio design and installation for outdoor living spaces. Create beautiful, functional patios perfect for entertaining and relaxation.',
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: SITE_CONFIG.name,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Deptford',
        addressRegion: 'NJ',
        addressCountry: 'US'
      },
      {
        '@type': 'City',
        name: 'Gloucester County',
        addressRegion: 'NJ',
        addressCountry: 'US'
      },
      {
        '@type': 'State',
        name: 'New Jersey',
        addressRegion: 'NJ',
        addressCountry: 'US'
      }
    ],
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        priceCurrency: 'USD',
        price: '1800',
        priceType: 'https://schema.org/StartingPrice',
        unitText: 'project'
      },
      description: 'Starting at $1,800 for standard concrete patios. Custom designs available.'
    }
  },
  {
    '@type': 'Service',
    serviceType: 'Stamped Concrete Installation',
    name: 'Stamped Concrete Installation',
    description: 'Decorative stamped concrete installation for patios, driveways, pool decks, and walkways. Beautiful patterns and textures that mimic natural stone at a fraction of the cost.',
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: SITE_CONFIG.name,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Deptford',
        addressRegion: 'NJ',
        addressCountry: 'US'
      },
      {
        '@type': 'City',
        name: 'Gloucester County',
        addressRegion: 'NJ',
        addressCountry: 'US'
      },
      {
        '@type': 'State',
        name: 'New Jersey',
        addressRegion: 'NJ',
        addressCountry: 'US'
      }
    ],
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        priceCurrency: 'USD',
        price: '12',
        priceType: 'https://schema.org/UnitPrice',
        unitText: 'square foot'
      },
      description: 'Starting at $12 per square foot for stamped concrete. Pattern and color options available.'
    }
  },
  {
    '@type': 'Service',
    serviceType: 'Pool Deck Installation',
    name: 'Concrete Pool Deck Installation',
    description: 'Professional concrete pool deck installation and repair. Durable, slip-resistant surfaces perfect for pool areas. Stamped concrete options available for decorative pool decks.',
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: SITE_CONFIG.name,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Deptford',
        addressRegion: 'NJ',
        addressCountry: 'US'
      },
      {
        '@type': 'City',
        name: 'Gloucester County',
        addressRegion: 'NJ',
        addressCountry: 'US'
      },
      {
        '@type': 'State',
        name: 'New Jersey',
        addressRegion: 'NJ',
        addressCountry: 'US'
      }
    ],
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        priceCurrency: 'USD',
        price: '15',
        priceType: 'https://schema.org/UnitPrice',
        unitText: 'square foot'
      },
      description: 'Starting at $15 per square foot for pool deck installation. Includes slip-resistant finish.'
    }
  },
  {
    '@type': 'Service',
    serviceType: 'Concrete Slab Installation',
    name: 'Concrete Slab Installation',
    description: 'Large commercial and industrial concrete slab installation for warehouses, manufacturing facilities, and commercial buildings. Pole barn foundations and residential slabs also available.',
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: SITE_CONFIG.name,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Deptford',
        addressRegion: 'NJ',
        addressCountry: 'US'
      },
      {
        '@type': 'City',
        name: 'Gloucester County',
        addressRegion: 'NJ',
        addressCountry: 'US'
      },
      {
        '@type': 'State',
        name: 'New Jersey',
        addressRegion: 'NJ',
        addressCountry: 'US'
      }
    ],
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        priceCurrency: 'USD',
        price: '6',
        priceType: 'https://schema.org/UnitPrice',
        unitText: 'square foot'
      },
      description: 'Starting at $6 per square foot for concrete slabs. Commercial and residential projects.'
    }
  },
  {
    '@type': 'Service',
    serviceType: 'Concrete Curb Installation',
    name: 'Concrete Curb Installation',
    description: 'Professional concrete curb and gutter installation for residential and commercial properties. Landscape curbing, parking lot curbs, and decorative borders.',
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: SITE_CONFIG.name,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Deptford',
        addressRegion: 'NJ',
        addressCountry: 'US'
      },
      {
        '@type': 'City',
        name: 'Gloucester County',
        addressRegion: 'NJ',
        addressCountry: 'US'
      },
      {
        '@type': 'State',
        name: 'New Jersey',
        addressRegion: 'NJ',
        addressCountry: 'US'
      }
    ],
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        priceCurrency: 'USD',
        price: '18',
        priceType: 'https://schema.org/UnitPrice',
        unitText: 'linear foot'
      },
      description: 'Starting at $18 per linear foot for concrete curbs. Various styles available.'
    }
  },
  {
    '@type': 'Service',
    serviceType: 'Concrete Repair',
    name: 'Concrete Repair Services',
    description: 'Comprehensive concrete repair services including crack repair, resurfacing, leveling, and restoration. Fix damaged driveways, patios, sidewalks, and slabs to extend their lifespan.',
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: SITE_CONFIG.name,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Deptford',
        addressRegion: 'NJ',
        addressCountry: 'US'
      },
      {
        '@type': 'City',
        name: 'Gloucester County',
        addressRegion: 'NJ',
        addressCountry: 'US'
      },
      {
        '@type': 'State',
        name: 'New Jersey',
        addressRegion: 'NJ',
        addressCountry: 'US'
      }
    ],
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        priceCurrency: 'USD',
        price: '500',
        priceType: 'https://schema.org/StartingPrice',
        unitText: 'project'
      },
      description: 'Starting at $500 for concrete repair projects. Free estimates on all repair work.'
    }
  },
  {
    '@type': 'Service',
    serviceType: 'Pole Barn Foundation Installation',
    name: 'Pole Barn Foundation Installation',
    description: 'Professional pole barn foundation installation for post-frame buildings. Expert concrete footing and slab-on-grade foundations that meet all structural requirements and local building codes.',
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: SITE_CONFIG.name,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Deptford',
        addressRegion: 'NJ',
        addressCountry: 'US'
      },
      {
        '@type': 'City',
        name: 'Gloucester County',
        addressRegion: 'NJ',
        addressCountry: 'US'
      },
      {
        '@type': 'State',
        name: 'New Jersey',
        addressRegion: 'NJ',
        addressCountry: 'US'
      }
    ],
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        priceCurrency: 'USD',
        price: '5',
        priceType: 'https://schema.org/UnitPrice',
        unitText: 'square foot'
      },
      description: 'Starting at $5 per square foot for pole barn foundations. Free estimates available.'
    }
  }
];

/**
 * Service mapping for individual service pages
 */
const SERVICE_MAP: Record<string, any> = {
  'pole-barn-foundations': SERVICE_CATALOG.find(s => s.serviceType === 'Pole Barn Foundation Installation'),
  'concrete-slabs': SERVICE_CATALOG.find(s => s.serviceType === 'Concrete Slab Installation'),
  'driveways': SERVICE_CATALOG.find(s => s.serviceType === 'Concrete Driveway Installation'),
  'patios': SERVICE_CATALOG.find(s => s.serviceType === 'Concrete Patio Installation'),
  'stamped-concrete': SERVICE_CATALOG.find(s => s.serviceType === 'Stamped Concrete Installation'),
};

/**
 * Generate Service schema for individual service pages
 * References the main HomeAndConstructionBusiness organization
 */
export function generateServiceSchema(serviceSlug: string, customDescription?: string) {
  const serviceData = SERVICE_MAP[serviceSlug];
  
  if (!serviceData) {
    // Fallback for services not in catalog
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Concrete Service',
      name: 'Concrete Service',
      description: customDescription || 'Professional concrete services in Deptford, NJ and surrounding areas.',
      provider: {
        '@type': 'HomeAndConstructionBusiness',
        additionalType: 'https://schema.org/ConcreteContractor',
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
        telephone: SITE_CONFIG.phone,
        email: SITE_CONFIG.email
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Deptford',
          addressRegion: 'NJ',
          addressCountry: 'US'
        },
        {
          '@type': 'City',
          name: 'Gloucester County',
          addressRegion: 'NJ',
          addressCountry: 'US'
        },
        {
          '@type': 'State',
          name: 'New Jersey',
          addressRegion: 'NJ',
          addressCountry: 'US'
        }
      ]
    };
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceData.serviceType,
    name: serviceData.name,
    description: customDescription || serviceData.description,
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      additionalType: 'https://schema.org/ConcreteContractor',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      telephone: SITE_CONFIG.phone,
      email: SITE_CONFIG.email,
      priceRange: '$$'
    },
    areaServed: serviceData.areaServed,
    offers: serviceData.offers
  };
}

/**
 * Generate HomeAndConstructionBusiness schema with detailed service catalog
 */
export function generateHomeAndConstructionBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    additionalType: 'https://schema.org/ConcreteContractor',
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    priceRange: '$$',
    areaServed: [
      {
        '@type': 'City',
        name: 'Deptford',
        addressRegion: 'NJ',
        addressCountry: 'US'
      },
      {
        '@type': 'City',
        name: 'Gloucester County',
        addressRegion: 'NJ',
        addressCountry: 'US'
      },
      ...SITE_CONFIG.serviceAreas.map(city => ({
        '@type': 'City',
        name: city,
        addressRegion: 'NJ',
        addressCountry: 'US'
      })),
      {
        '@type': 'State',
        name: 'New Jersey',
        addressRegion: 'NJ',
        addressCountry: 'US'
      }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Concrete Services',
      itemListElement: SERVICE_CATALOG.map((service, index) => ({
        '@type': 'OfferCatalogItem',
        position: index + 1,
        itemOffered: service
      }))
    },
    serviceType: SERVICE_CATALOG.map(s => s.serviceType)
  };
}


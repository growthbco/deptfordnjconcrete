export const SITE_CONFIG = {
  name: "Deptford Concrete Contractors",
  tagline: "Pole Barn Foundation Specialists & Commercial Concrete Contractors",
  description: "Professional pole barn foundation and large slab concrete contractors serving Deptford, NJ and surrounding areas. Free estimates on all projects.",
  url: "https://deptfordnjconcrete.com",
  phone: "856-934-4906",
  email: "deptfordnjconcrete@gmail.com",
  // Address for NAP consistency (service area - Deptford, NJ)
  address: {
    streetAddress: "", // No physical address - service area business
    addressLocality: "Deptford",
    addressRegion: "NJ",
    postalCode: "08096",
    addressCountry: "US"
  },
  serviceAreas: [
    "Deptford",
    "West Deptford",
    "Woodbury",
    "Glassboro",
    "Sewell",
    "Pitman",
    "Washington Township",
    "Turnersville",
    "Blackwood",
    "Wenonah",
    "Mantua"
  ]
} as const;


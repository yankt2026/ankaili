export interface Solution {
  slug: string;
  title: string;
  description: string;
  image: string;
  href: string;
  focus: string;
}

export const solutions: Solution[] = [
  {
    slug: 'transformer-oil-temperature-indication',
    title: 'Transformer Oil Temperature Indication',
    description: 'Measure top-oil temperature at the specified thermometer pocket and coordinate local indication, cooling contacts, alarm outputs and remote signals.',
    image: '/images/scenes/cases/turkey-transformer-retrofit.webp',
    href: '/products/transformer-oil-temperature-indicators/',
    focus: 'OTI and BWY oil temperature controllers'
  },
  {
    slug: 'transformer-winding-temperature-control',
    title: 'Transformer Winding Temperature Control',
    description: 'Apply transformer-specific current-related thermal simulation for winding indication, fan control, alarm and protection interfaces.',
    image: '/images/scenes/cases/russia-cold-climate.webp',
    href: '/products/transformer-winding-temperature-indicators/',
    focus: 'WTI and BWR winding temperature controllers'
  },
  {
    slug: 'distribution-transformer-temperature-monitoring',
    title: 'Distribution Transformer Temperature Monitoring',
    description: 'Combine durable local indication with the contact and remote-data functions required for compact or unattended distribution installations.',
    image: '/images/scenes/cases/vietnam-distribution.webp',
    href: '/applications/distribution-transformer-temperature-monitoring/',
    focus: 'Local indication and optional remote condition data'
  },
  {
    slug: 'renewable-substation-remote-monitoring',
    title: 'Renewable Substation Remote Monitoring',
    description: 'Carry clearly identified top-oil and simulated winding values from field instruments to the RTU, SCADA or plant monitoring platform.',
    image: '/images/scenes/cases/spain-renewable.webp',
    href: '/applications/substation-remote-temperature-monitoring/',
    focus: 'Pt100, 4-20 mA and RS485 signal paths'
  },
  {
    slug: 'transformer-cooling-alarm-trip-control',
    title: 'Transformer Cooling, Alarm and Trip Control',
    description: 'Coordinate contact assignments, set points, switching duty and interposing relays for cooling stages, alarm and protection logic.',
    image: '/images/scenes/cases/south-africa-industrial.webp',
    href: '/applications/transformer-cooling-control-alarm-trip/',
    focus: 'Contact logic and functional verification'
  },
  {
    slug: 'transformer-controller-retrofit',
    title: 'Transformer Temperature Controller Retrofit',
    description: 'Replace an installed BWY or BWR controller by comparing the complete model, terminal map, scale, sensing system and mounting interface.',
    image: '/images/scenes/cases/indonesia-hydropower.webp',
    href: '/applications/transformer-temperature-controller-retrofit/',
    focus: 'Model matching and documented changeover'
  }
];

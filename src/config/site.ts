export const site = {
  name: 'INNO Transformer Temperature Monitoring',
  brand: 'INNO',
  siteUrl: 'https://ankaili.com',
  email: 'fjinnonet@gmail.com',
  description: 'Oil and winding temperature indicators, controllers and monitoring devices for oil-immersed transformers.',
  published: '2026-07-15',
  updated: '2026-07-15'
} as const;

export const mailto = (subject: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;

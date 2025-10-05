export default ({ env }) => {
  const defaultOrigins = [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://127.0.0.1:3000',
    'http://127.0.0.1:3001',
  ];

  const configuredOrigins = [
    env('FRONTEND_URL'),
    ...(env.array('CORS_ORIGINS', []) || []),
  ].filter(Boolean);

  const origin = Array.from(new Set([...defaultOrigins, ...configuredOrigins]));

  return [
    'strapi::logger',
    'strapi::errors',
    'strapi::security',
    {
      name: 'strapi::cors',
      config: {
        headers: '*',
        origin,
      },
    },
    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
  ];
};

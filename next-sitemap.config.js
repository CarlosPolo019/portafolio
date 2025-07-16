/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://cmescorcia.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/404', '/500', '/admin/*', '/_*'],
  
  // Rutas adicionales
  additionalPaths: async (config) => [
    await config.transform(config, '/', '2024-01-01'),
    await config.transform(config, '/services', '2024-01-01'),
    await config.transform(config, '/resume', '2024-01-01'),
    await config.transform(config, '/work', '2024-01-01'),
    await config.transform(config, '/contact', '2024-01-01'),
  ],

  // Configuración personalizada por ruta
  transform: async (config, path) => {
    // Prioridades específicas por página
    const priorities = {
      '/': 1.0,
      '/services': 0.9,
      '/resume': 0.9,
      '/work': 0.8,
      '/contact': 0.7,
    };

    // Frecuencias específicas por página
    const changefreqs = {
      '/': 'weekly',
      '/services': 'monthly',
      '/resume': 'monthly',
      '/work': 'weekly',
      '/contact': 'yearly',
    };

    return {
      loc: path,
      changefreq: changefreqs[path] || config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        {
          href: `https://cmescorcia.com${path}`,
          hreflang: 'en',
        },
        {
          href: `https://cmescorcia.com/es${path}`,
          hreflang: 'es',
        },
      ],
    };
  },

  // Configuración de robots.txt
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/_next', '/api/auth'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 1,
      },
    ],
    additionalSitemaps: [
      'https://cmescorcia.com/sitemap.xml',
      'https://cmescorcia.com/server-sitemap.xml',
    ],
  },
};
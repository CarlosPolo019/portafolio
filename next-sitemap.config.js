/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.cmescorcia.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/404', '/500', '/admin/*', '/_*'],
  
  // Rutas principales del portafolio
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/services'),
    await config.transform(config, '/resume'),
    await config.transform(config, '/work'),
    await config.transform(config, '/contact'),
  ],

  // Configuración por ruta
  transform: async (config, path) => {
    const priorities = {
      '/': 1.0,
      '/services': 0.9,
      '/resume': 0.9,
      '/work': 0.8,
      '/contact': 0.7,
    };

    const changefreqs = {
      '/': 'weekly',
      '/services': 'monthly',
      '/resume': 'monthly',
      '/work': 'weekly',
      '/contact': 'monthly',
    };

    return {
      loc: path,
      changefreq: changefreqs[path] || config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(),
    };
  },

  // robots.txt
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api/auth'],
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
  },
};

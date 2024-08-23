/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: 'https://carlosportafolio.vercel.app', // Cambia esto por la URL de tu sitio
    generateRobotsTxt: true, // (Opcional) Genera un archivo robots.txt
    sitemapSize: 7000, // Número máximo de URLs por sitemap (opcional)
    changefreq: 'weekly', // Frecuencia con la que cambian las páginas (opcional)
    priority: 0.7, // Prioridad de las páginas (opcional)
  }
  
  module.exports = config;
  
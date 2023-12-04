import { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://chaechaekorea.com/sitemap.xml',
    host: 'https://chaechaekorea.com',
  };
};

export default robots;

import { MetadataRoute } from 'next';
import { allPosts } from 'contentlayer/generated';
import { categories } from '@/components/Layout/constants';

const sitemap = (): MetadataRoute.Sitemap => {
  const posts = allPosts.map((post) => ({
    url: `https://chaechaekorea.com/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  const categoryPages = categories.map((category) => ({
    url: `https://chaechaekorea.com/category/${category}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: 'https://chaechaekorea.com',
      lastModified: new Date(),
    },
    ...posts,
    ...categoryPages,
  ];
};

export default sitemap;

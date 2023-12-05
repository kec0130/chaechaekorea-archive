import RSS, { FeedOptions } from 'rss';
import { allPosts } from 'contentlayer/generated';
import { defaultMetadata } from '@/components/Layout/constants';

export async function GET() {
  const host =
    process.env.NODE_ENV === 'production' ? 'https://chaechaekorea.com' : 'http://localhost:3000';

  const feedOptions: FeedOptions = {
    title: defaultMetadata.title,
    description: defaultMetadata.description,
    site_url: host,
    feed_url: `${host}/api/rss`,
    image_url: `${host}/favicon-32x32.png`,
    pubDate: new Date(),
  };

  const feed = new RSS(feedOptions);

  allPosts.map((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: `${host}/${post.slug}`,
      date: post.date,
      categories: [post.category],
      author: defaultMetadata.title,
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

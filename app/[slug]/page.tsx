import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { allPosts } from 'contentlayer/generated';
import Post from '@/components/Blog/Post';

interface Props {
  params: {
    slug: string;
  };
}

export const generateMetadata = async (
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const post = allPosts.find((post) => post.slug === params.slug);

  const previousImages = (await parent).openGraph?.images || [];

  if (!post) return {};

  const { title, description, slug, date, image } = post;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `/${slug}`,
      type: 'article',
      publishedTime: date,
      images: [image, ...previousImages],
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image',
    },
  };
};

export const generateStaticParams = async () => {
  return allPosts.map((post) => ({ slug: post.slug }));
};

const PostPage = ({ params }: Props) => {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) notFound();

  return (
    <main className="container-xl">
      <Post post={post} />
    </main>
  );
};

export default PostPage;

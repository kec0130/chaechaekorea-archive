import { notFound } from 'next/navigation';
import { allPosts } from 'contentlayer/generated';
import Post from '../components/Blog/Post';

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post.slug }));

const PostPage = ({ params: { slug } }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) notFound();

  return (
    <main className="container-xl">
      <Post post={post} />
    </main>
  );
};

export default PostPage;

import { Post, allPosts } from 'contentlayer/generated';
import PostList from './components/Blog/PostList';

export default function Home() {
  const posts = allPosts.sort((a, b) => (b.date > a.date ? 1 : -1));
  const duplicatedPosts: Post[] = Array(10).fill(posts).flat();

  return (
    <>
      <section className="h-[50dvh] bg-gradient-to-r from-cyan-500 to-blue-500 py-40"></section>
      <main className="container-xl pt-16">
        <section>
          <PostList posts={duplicatedPosts} />
        </section>
      </main>
    </>
  );
}

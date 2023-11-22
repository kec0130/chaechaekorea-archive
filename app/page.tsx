import { Post, allPosts } from 'contentlayer/generated';
import PostListItem from './components/Blog/PostListItem';

export default function Home() {
  const posts = allPosts.sort((a, b) => (b.date > a.date ? 1 : -1));
  const duplicatedPosts: Post[] = Array(10).fill(posts).flat();

  return (
    <>
      <section className="h-[50dvh] bg-gradient-to-r from-cyan-500 to-blue-500 py-40"></section>
      <main className="container-xl pt-16">
        <section>
          <ul className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12">
            {duplicatedPosts.map((post, index) => (
              <PostListItem key={index} post={post} />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

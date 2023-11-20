import { Post, allPosts } from 'contentlayer/generated';
import PostListItem from './components/Blog/PostListItem';

export default function Home() {
  const posts = allPosts.sort((a, b) => (b.date > a.date ? 1 : -1));
  const duplicatedPosts: Post[] = Array(10).fill(posts).flat();

  return (
    <div className="container-xl">
      <ul className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12">
        {duplicatedPosts.map((post, index) => (
          <PostListItem key={index} post={post} />
        ))}
      </ul>
    </div>
  );
}

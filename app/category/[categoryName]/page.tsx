import { allPosts } from 'contentlayer/generated';
import PostList from '@/app/components/Blog/PostList';

const CategoryPage = ({ params }: { params: { categoryName: string } }) => {
  const posts = allPosts.filter((post) => post.category === params.categoryName);

  return (
    <main className="container-xl pt-16">
      <section>
        <PostList posts={posts} />
      </section>
    </main>
  );
};

export default CategoryPage;

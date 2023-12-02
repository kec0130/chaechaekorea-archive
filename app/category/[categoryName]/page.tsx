import { allPosts } from 'contentlayer/generated';
import PostList from '@/components/Blog/PostList';
import { categories } from '@/components/Layout/constants';

export const generateStaticParams = async () => {
  return categories.map((categoryName) => ({ categoryName }));
};

const CategoryPage = ({ params: { categoryName } }: { params: { categoryName: string } }) => {
  const posts = allPosts.filter((post) => post.category === categoryName);

  return (
    <main className="container-xl">
      <section className="pt-10">
        <PostList posts={posts} />
      </section>
    </main>
  );
};

export default CategoryPage;

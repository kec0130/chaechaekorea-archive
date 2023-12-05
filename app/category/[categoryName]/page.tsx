import { Metadata, ResolvingMetadata } from 'next';
import { allPosts } from 'contentlayer/generated';
import { categories, defaultMetadata } from '@/components/Layout/constants';
import PostList from '@/components/Blog/PostList';

interface Props {
  params: {
    categoryName: string;
  };
}

export const generateMetadata = async (
  { params: { categoryName } }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const title = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
  const ogTitle = `${title} | ${defaultMetadata.title}`;
  const description = defaultMetadata.description;
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title,
    description,
    openGraph: {
      title: ogTitle,
      description,
      url: `/category/${categoryName}`,
      siteName: defaultMetadata.title,
      type: 'website',
      images: previousImages,
    },
    twitter: {
      title: ogTitle,
      description,
      card: 'summary_large_image',
    },
  };
};

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

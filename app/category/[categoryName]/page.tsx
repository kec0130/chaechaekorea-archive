import Image from 'next/image';
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
    <main>
      <section className="container-xl p-0 lg:px-8">
        <div className="relative flex h-[30vh] items-center justify-center bg-black/60">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <Image
              src={`/images/cover/${categoryName}.jpg`}
              alt={`ChaeChae Korea - ${categoryName}`}
              width={1920}
              height={1280}
              sizes="100vw"
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <h1 className="px-6 text-center text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
            {categoryName.toUpperCase()}
          </h1>
        </div>
      </section>

      <section className="container-xl pt-10">
        <PostList posts={posts} />
      </section>
    </main>
  );
};

export default CategoryPage;

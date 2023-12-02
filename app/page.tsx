import Image from 'next/image';
import { allPosts } from 'contentlayer/generated';
import PostList from '@/components/Blog/PostList';

export default function Home() {
  const posts = allPosts.sort((a, b) => (b.date > a.date ? 1 : -1));

  return (
    <>
      <section className="relative flex h-[50dvh] items-center justify-center px-4">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Image
            src="/images/main-cover-01.jpg"
            alt="Welcome to ChaeChae Korea Homepage"
            width={1920}
            height={1280}
            sizes="100vw"
            className="h-full w-full object-cover"
            priority
          />
        </div>
        <div className="bg-black/60 px-4 py-6 text-center text-white lg:px-8 lg:py-10">
          <h1 className="mb-3 text-3xl font-semibold sm:mb-6 md:text-4xl lg:text-5xl">
            Discover the Authentic Korea
          </h1>
          <p className="text-md md:text-lg lg:text-xl">
            Explore Korea through the eyes of locals! <br className="hidden sm:inline" />
            Get authentic insights on travel, cuisine, daily life, and vibrant culture of Korea.
          </p>
        </div>
      </section>
      <main className="container-xl">
        <section className="pt-10">
          <PostList posts={posts} />
        </section>
      </main>
    </>
  );
}

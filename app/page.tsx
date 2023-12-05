import Image from 'next/image';
import { allPosts } from 'contentlayer/generated';
import PostList from '@/components/Blog/PostList';

export default function Home() {
  const posts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <section className="relative flex h-[50vh] items-center justify-center bg-black/60 pt-14 md:pt-[72px]">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Image
            src="/images/cover/main-01.jpg"
            alt="ChaeChae Korea - Home"
            width={1920}
            height={1280}
            sizes="100vw"
            className="h-full w-full object-cover"
            priority
          />
        </div>
        <div className="px-6 text-center text-white">
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

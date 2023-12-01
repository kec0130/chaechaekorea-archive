import dayjs from 'dayjs';
import Link from 'next/link';
import { Post } from 'contentlayer/generated';

import Mdx from '../Mdx';

const Post = ({ post }: { post: Post }) => {
  return (
    <article className="prose mx-auto py-10 lg:prose-lg prose-figcaption:text-sm">
      <header>
        <div className="not-prose mb-4">
          <Link
            href={`/category/${post.category}`}
            className="font-semibold uppercase text-gray-500"
          >
            {post.category}
          </Link>
        </div>
        <h1>{post.title}</h1>
        <div className="not-prose text-sm text-gray-500 lg:text-base">
          <time dateTime={dayjs(post.date).format('YYYY-MM-DD')}>
            {dayjs(post.date).format('MMM D, YYYY')}
          </time>
          <span className="px-2">·</span>
          {post.readTime} min read
        </div>
      </header>
      <hr />
      <div>
        <Mdx code={post.body.code} />
      </div>
    </article>
  );
};

export default Post;

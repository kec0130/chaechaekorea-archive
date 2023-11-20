import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';
import { Post } from 'contentlayer/generated';

const PostListItem = ({ post }: { post: Post }) => {
  return (
    <li>
      <article>
        <Link href={`/${post.slug}`} className="overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            width={300}
            height={165}
            className="h-full w-full rounded-xl object-cover"
          />
        </Link>
        <div className="mt-4">
          <div className="mb-2 text-sm font-semibold uppercase text-gray-500">
            <Link href={`/category/${post.category}`}>{post.category}</Link>
          </div>
          <Link href={`/${post.slug}`}>
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p className="mt-3 line-clamp-3">{post.description}</p>
          </Link>
          <div className="mt-3 flex flex-wrap gap-1 text-sm text-gray-500">
            <time dateTime={dayjs(post.date).format('YYYY-MM-DD')}>
              {dayjs(post.date).format('MMM D, YYYY')}
            </time>
            <span>·</span>
            <div>{post.readTime} min read</div>
          </div>
        </div>
      </article>
    </li>
  );
};

export default PostListItem;

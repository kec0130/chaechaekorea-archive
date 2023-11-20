import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import remarkToc, { Options as TocOptions } from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    category: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath,
    },
    image: {
      type: 'string',
      resolve: (doc) => `/images/blog/${doc._raw.flattenedPath}/01.jpg`,
    },
    readTime: {
      type: 'string',
      resolve: (doc) => {
        const wordsPerMinute = 200;
        const noOfWords = doc.body.raw.split(/\s/g).length;
        const minutes = noOfWords / wordsPerMinute;
        const readTime = Math.ceil(minutes);
        return readTime;
      },
    },
  },
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [
      remarkGfm,
      [
        remarkToc,
        {
          maxDepth: 3,
          skip: 'Intro',
        } satisfies Partial<TocOptions>,
      ],
    ],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
  },
});

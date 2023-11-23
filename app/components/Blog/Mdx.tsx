import Link from 'next/link';
import Image from 'next/image';
import type { MDXComponents } from 'mdx/types';
import { useMDXComponent } from 'next-contentlayer/hooks';

const NextImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <figure>
      <Image src={`/images/blog/${src}`} alt={alt} width={735} height={490} />
      <figcaption className="text-center">{alt}</figcaption>
    </figure>
  );
};

const CustomLink = (props: any) => {
  if (props.href.startsWith('/')) {
    return <Link href={props.href}>{props.children}</Link>;
  }

  if (props.href.startsWith('http')) {
    return <a target="_blank" rel="noopener noreferrer" {...props} />;
  }

  return <a {...props} />;
};

const components: MDXComponents = {
  Image: NextImage,
  a: CustomLink,
};

const Mdx = ({ code }: { code: string }) => {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
};

export default Mdx;

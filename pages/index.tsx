import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { PostFrontMatter } from 'types/PostFrontMatter';

// TODO: choose a primary color, font
// TODO: share functionality
// TODO: verify social images
// TODO: fix summary for blogs
// TODO: enable comments functionality
export const getStaticProps: GetStaticProps<{
  posts: PostFrontMatter[];
}> = async () => {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
};

const Banner = dynamic(import('@/components/Banner'));

export default function Home() {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />
      <Banner />
    </>
  );
}

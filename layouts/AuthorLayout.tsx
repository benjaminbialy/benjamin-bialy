import { Header } from '@/components/Form';
import StackList from '@/components/list/StackList';
import { PageSEO } from '@/components/SEO';
import { WorkStack } from 'config/stack';
import Image from 'next/image';
import { ReactNode } from 'react';
import { AuthorFrontMatter } from 'types/AuthorFrontMatter';

interface Props {
  children: ReactNode;
  frontMatter: AuthorFrontMatter;
}

export default function AuthorLayout({ children, frontMatter }: Props) {
  const { name, avatar, occupation } = frontMatter;

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className='fade-in divide-y-2 divide-gray-100 dark:divide-gray-800'>
        <Header title='About' />
        <div className='items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0'>
          <div className='flex flex-col items-center space-x-2 pt-8'>
            <Image
              src={avatar}
              alt='avatar'
              width='192px'
              height='192px'
              className='h-48 w-48 rounded-full'
            />
            <h3 className='pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight'>
              {name}
            </h3>
            <div className='font-medium text-gray-500 dark:text-gray-400'>
              {occupation}
            </div>
          </div>

          <div className='prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2'>
            {children}
            <p className='mt-8'>
              <h2 className='mt-8 mb-4 text-2xl font-semibold dark:text-white'>
                Skills
              </h2>
              <StackList stack={WorkStack} />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

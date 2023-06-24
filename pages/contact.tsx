import { Header } from '@/components/Form';
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import { useRandomColorPair } from '@/lib/hooks/useRandomColorPair';
import { contact } from 'config/contact';
import Link from 'next/link';

import { RoughNotation } from 'react-rough-notation';

function Contact(): React.ReactElement {
  const [randomColor] = useRandomColorPair();

  return (
    <>
      <PageSEO
        title={`Contact - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className='fade-in divide-y-2 divide-gray-100 dark:divide-gray-800'>
        <Header title='Contact' />
        <div className='container py-12'>
          <p>
            Like what you see? Feel free to
            <a
              className='ml-2 cursor-pointer !font-normal !text-black !no-underline dark:!text-white'
              href={contact.links.email}
            >
              <RoughNotation
                show
                type='underline'
                strokeWidth={2}
                animationDelay={250}
                animationDuration={2000}
                color={randomColor}
              >
                shoot me an email
              </RoughNotation>
            </a>{' '}
            for any and all inquiries.
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;

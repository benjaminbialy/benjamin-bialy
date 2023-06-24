import { Colors } from 'config/colors';
import { FaLinkedinIn as LinkedinIcon } from 'react-icons/fa';

import { SiGmail as EmailIcon } from 'react-icons/si';
import { EmailShareButton, LinkedinShareButton } from 'react-share';

interface ShareProps {
  title: string;
  url: string;
}

export default function Share(props: ShareProps): React.ReactElement {
  const { title, url } = props;

  return (
    <div className='flex items-center justify-center pt-2'>
      <div className='flex w-44 items-center justify-between'>
        <LinkedinShareButton title={title} url={url}>
          <LinkedinIcon size={22} color={Colors.linkedin} />
        </LinkedinShareButton>
        <EmailShareButton title={title} url={url}>
          <EmailIcon size={22} color={Colors.email} />
        </EmailShareButton>
      </div>
    </div>
  );
}

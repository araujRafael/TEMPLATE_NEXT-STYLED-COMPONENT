import Link from 'next/link';
import React from 'react';

import { Anchor } from './styled';

interface HrefProps {
  title: string
  href: string
  colorFont?: string
}

const Href: React.FC<HrefProps> = ({
  title,
  href,
  colorFont
}) => {
  return (
    <Link
      href={href}
    >
      <Anchor colorFont={colorFont}>
        {title}
      </Anchor>
    </Link>
  );
}

export default Href;
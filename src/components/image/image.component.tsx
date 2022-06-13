import { useState } from 'react';
import classNames from 'classnames';
import { Skeleton } from '@mui/material';

import styles from './image.module.scss';

type ImageProps = {
  src: string;
  alt: string;
  height: number;
  className?: string;
};

export const Image: React.FC<ImageProps> = ({ src, alt, height, className }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Skeleton variant="rectangular" height={height} sx={{ bgcolor: 'grey.900' }} />}
      <img
        onLoad={() => setIsLoading(false)}
        src={src}
        alt={alt}
        className={classNames({ [styles.hidden]: isLoading }, className)}
        style={{ height: `${height}px` }}
      />
    </>
  );
};

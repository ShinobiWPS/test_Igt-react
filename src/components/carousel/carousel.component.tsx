import classNames from 'classnames';
import { Carousel as ReactResponsiveCarousel } from 'react-responsive-carousel';

import { ComponentProps } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './carousel.module.scss';

type CarouselProps = {
  isHidden?: boolean;
  children: ComponentProps<typeof ReactResponsiveCarousel>['children'];
};

export const Carousel: React.FC<CarouselProps> = ({ isHidden, children }) => {
  return (
    <ReactResponsiveCarousel
      showThumbs={false}
      showStatus={false}
      className={classNames({ [styles.hidden]: isHidden })}
    >
      {children}
    </ReactResponsiveCarousel>
  );
};

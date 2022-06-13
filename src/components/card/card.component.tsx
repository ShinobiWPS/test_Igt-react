import { Card as MaterialCard, CardContent, CardHeader, useTheme } from '@mui/material';
import classNames from 'classnames';

import styles from './card.module.scss';

export enum TitleSize {
  SMALL = 'subtitle2',
  MEDIUM = 'subtitle1',
  LARGE = 'h6',
}

type CardProps = {
  title?: React.ReactNode;
  titleSize?: TitleSize;
  className?: string;
  contentClassName?: string;
  children: React.ReactNode | React.ReactNode[];
};

export const Card: React.FC<CardProps> = ({
  title,
  titleSize = TitleSize.MEDIUM,
  className,
  contentClassName,
  children,
}) => {
  const { palette } = useTheme();

  return (
    <MaterialCard
      className={className}
      sx={{
        background: palette.secondary.main,
        color: palette.text.primary,
        border: `1px solid ${palette.divider}`,
      }}
    >
      {title && (
        <CardHeader
          className={styles.cardHeader}
          title={title}
          titleTypographyProps={{ variant: titleSize, fontWeight: 'bold' }}
        />
      )}
      <CardContent className={classNames(styles.cardContent, contentClassName)}>{children}</CardContent>
    </MaterialCard>
  );
};

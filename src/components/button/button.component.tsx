import { ComponentProps } from 'react';
import classNames from 'classnames';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Button as MaterialButton, ThemeOptions, useTheme } from '@mui/material';

import styles from './button.module.scss';

type ButtonProps = {
  isForward?: boolean;
  className?: string;
  isUpperCase?: boolean;
  color?: string;
  backgroundColor?: string;
  children: React.ReactNode;
} & Omit<ComponentProps<typeof MaterialButton>, 'color'>;

export const Button: React.FC<ButtonProps> = ({
  isForward,
  className,
  isUpperCase,
  color,
  backgroundColor,
  children,
  ...props
}) => {
  const { palette } = useTheme();

  return (
    <MaterialButton
      className={classNames(styles.button, className)}
      sx={{
        textTransform: isUpperCase ? 'uppercase' : 'none',
        color: color || palette.secondary.contrastText,
        background: backgroundColor
          ? backgroundColor
          : props.variant !== 'text'
          ? palette.action.active
          : 'transparent',
      }}
      {...props}
    >
      {isForward ? (
        <>
          <span className={styles.forwardButtonChildren}>{children}</span>
          <ArrowForwardIosIcon className={styles.forwardIcon} />
        </>
      ) : (
        <>{children}</>
      )}
    </MaterialButton>
  );
};

import { ComponentProps } from 'react';
import { Typography } from '@mui/material';

type TextProps = {
  variant: ComponentProps<typeof Typography>['variant'];
  isUpperCase?: boolean;
  className?: string;
  color?: string;
  children: React.ReactNode;
};

export const Text: React.FC<TextProps> = ({ variant, isUpperCase, className, color, children }) => (
  <Typography
    className={className}
    sx={{ textTransform: isUpperCase ? 'uppercase' : 'none', color }}
    variant={variant}
  >
    {children}
  </Typography>
);

import { ComponentProps } from 'react';
import { Input as MaterialInput } from '@mui/material';
import classNames from 'classnames';

import styles from './input.module.scss';

type InputProps = Omit<ComponentProps<typeof MaterialInput>, 'disableUnderline' | 'disableInjectingGlobalStyles'>;

export const Input: React.FC<InputProps> = ({ className, ...props }) => (
  <MaterialInput
    className={classNames(styles.input, className)}
    disableUnderline={true}
    disableInjectingGlobalStyles={true}
    {...props}
  />
);

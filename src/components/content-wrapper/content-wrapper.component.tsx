import classNames from 'classnames';
import styles from './content-wrapper.module.scss';

type ContentWrapperProps = {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
};

export const ContentWrapper: React.FC<ContentWrapperProps> = ({ className, children }) => (
  <div className={classNames(className, styles.contentWrapper)}>{children}</div>
);

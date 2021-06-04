import React from 'react';
import cx from 'classnames';
import styles from './style.less';

interface AvatarProps {
  src: string;
  name?: string;
  className?: string;
  size?: number;
}

export const Avatar: React.FC<AvatarProps> = ({ src, name, className, size = 40 }) => {
  return (
    <span className={cx(styles['avatar'], className)} style={{ width: size, height: size }}>
      <img src={src} alt={name} />
    </span>
  );
};

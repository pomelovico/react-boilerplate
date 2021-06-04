import React from 'react';
import cx from 'classnames';
import { Avatar } from '@/components/Avatar';
import Logo from '@/assets/logo/logo.svg';
import avatar from '@/assets/logo/avatar.jpg';
import styles from './style.less';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <div className={cx(styles['header-wrapper'], className)}>
      <div className={styles['header']}>
        <Logo className={styles['logo']} viewBox="0 0  315 106" />
        <Avatar src={avatar} className={styles['profile']} />
      </div>
    </div>
  );
};

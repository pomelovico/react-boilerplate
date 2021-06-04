import React from 'react';
import cx from 'classnames';
import styles from './style.less';
import { random, range, repeat } from 'lodash';

interface AvatarProps {
  className?: string;
}

const NAVS = [
  {
    icon: 'icon-dashboard',
    text: 'DASHBOARD',
  },
  {
    icon: 'icon-sitemap',
    text: 'AGENT',
  },
  {
    icon: 'icon-boat',
    text: 'MY CRUISE',
  },
  {
    icon: 'icon-life-bouy',
    text: 'HELP',
  },
];

export const SideBar: React.FC<AvatarProps> = ({ className }) => {
  const active = 'AGENT';
  return (
    <div className={cx(styles['sidebar'], className)}>
      <div className={styles['nav']}>
        {NAVS.map((item) => (
          <div
            className={cx({
              [styles['nav-item']]: true,
              [styles['nav-item_active']]: active === item.text,
            })}
          >
            <i className={cx(item.icon, styles['icon'])} />
            <span className={styles['nav-text']}>{item.text}</span>
          </div>
        ))}
      </div>
      <div className={styles['history']}>
        <div className={styles['history-title']}>History</div>
        <ul>
          {range(7).map((_, index) => (
            <li key={index}>
              <div className={styles['history-item']}>
                {`bjstdmngbdr-${index}`}-{repeat('suffix', random(1, 5))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

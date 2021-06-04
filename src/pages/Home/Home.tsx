import { getAgents } from '@/service/dashboard';
import React, { useEffect } from 'react';
import styles from './Home.less';

import Logo from '@/assets/logo/logo.svg';

export interface HomeProps {
  foo?: string;
}

const Home: React.FC<HomeProps> = () => {
  useEffect(() => {
    (async () => {
      const res = await getAgents();

      console.log('=====> getAgents', res.data);
    })();
  }, []);
  return (
    <div className={styles.container}>
      <h1>React Boilerplate</h1>
      <h2>React + Rematch + React-Router + TypeScript</h2>
      <Logo />
      <div>
        <p>
          <code>yarn & yarn install</code>
        </p>
        <p>
          <code>yarn dev</code>
        </p>
        <p>
          <code>yarn build</code>
        </p>
      </div>
    </div>
  );
};

export default Home;

import { getAgentsService } from '@/service/dashboard';
import React, { useEffect } from 'react';
import styles from './Home.less';

import Logo from '@/assets/logo/logo.svg';
import { useAgentsStore } from '@/store/agents';

export interface HomeProps {
  foo?: string;
}

const Home: React.FC<HomeProps> = () => {
  const loadAgents = useAgentsStore((store) => store.loadAgents);
  const list = useAgentsStore((store) => store.list);

  useEffect(() => {
    loadAgents();
  }, []);

  return (
    <div className={styles.container}>
      <Logo />
      <div>
        {list.map((item) => {
          return (
            <div>
              {item.name} = {item.location}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

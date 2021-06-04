import { getAgentsService } from '@/service/dashboard';
import React, { useEffect } from 'react';
import styles from './Home.less';

import { useAgentsStore } from '@/store/agents';
import { Header } from '@/components/Header';
import { SideBar } from '@/components/SideBar';

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
      <Header className={styles['header']} />
      <div className={styles['body']}>
        <div className={styles['body-inner']}>
          <SideBar />
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
      </div>
      <div className={styles['footer']}> CopyRight 2017 ThoughtWorks </div>
    </div>
  );
};

export default Home;

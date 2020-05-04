import React from "react";
import styles from "./Home.less";

export interface HomeProps {
  foo?: string;
}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className={styles.container}>
      <h1>React Boilerplate</h1>
      <h2>React + Rematch + React-Router + TypeScript</h2>
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

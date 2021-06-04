import { getInfo } from "@/api";
import React, { useEffect } from "react";
import styles from "./Home.less";

export interface HomeProps {
  foo?: string;
}

const Home: React.FC<HomeProps> = () => {
  useEffect(() => {
    getInfo("").then(
      (res) => {
        console.log("====> res:", res);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);
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

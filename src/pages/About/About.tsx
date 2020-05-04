import React from "react";
// import styles from './About.less';

export interface AboutProps {
  foo?: string;
}

const About: React.FC<AboutProps> = () => {
  return <div>About FC 组件</div>;
};

export default About;

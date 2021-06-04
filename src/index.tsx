import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.less";
import "./assets/fonts/iconfont.less";

async function bootApp() {
  const TT = await import("@/router/router");
  const App = TT.default;
  ReactDOM.render(
    <App />,
    document.getElementById("root")
  );
}
bootApp();

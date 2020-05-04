import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "@/store";
import "./styles/index.less";
import "./assets/fonts/iconfont.less";

async function bootApp() {
  const TT = await import("@/router/router");
  const App = TT.default;
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
}
bootApp();

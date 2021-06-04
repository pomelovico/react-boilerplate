const PREFIX = "agents";

let proxy = {
  [`/${PREFIX}`]: {
    target: "http://localhost:9001",
    changeOrigin: true,
  },
};

module.exports = proxy;

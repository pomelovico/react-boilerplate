const apiEnv = process.env.API_ENV;
const isMockOn = apiEnv === "mock";
const PREFIX = "survey";

let proxy = {
  [`/${PREFIX}`]: {
    target: "http://your.api", // dev时
    changeOrigin: true,
  },
};

const MOCK_HOST = "https://mock.net/";

if (isMockOn) {
  proxy = {
    [`/${PREFIX}`]: {
      target: MOCK_HOST,
      changeOrigin: true,
      pathRewrite: {
        [`^/${PREFIX}`]: `/mock/1111/${PREFIX}`,
      },
    },
  };
}

module.exports = proxy;

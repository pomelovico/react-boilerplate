/* eslint-disable @typescript-eslint/camelcase */
const BUILD_ENV = {
  local: "local",
  staging: "staging",
  release: "release",
};

const getEnvConfig = () => {
  const buildRepoName = process.env.BUILD_REPO;
  if (!buildRepoName) {
    return "local";
  }
  const envPath = buildRepoName.split("/").pop();
  return envPath.replace("web_", "");
};

module.exports = {
  BUILD_ENV,
  getEnvConfig,
};

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "dbMaxks",
        mongodb_password: "FxG6a0XdD3zpJfq0",
        mongodb_clustername: "cluster1",
        mongodb_database: "myBlog-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "dbMaxks",
      mongodb_password: "FxG6a0XdD3zpJfq0",
      mongodb_clustername: "cluster1",
      mongodb_database: "myBlog",
    },
  };
};

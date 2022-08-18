module.exports = {
  ci: {
    collect: {
      /* Add configuration here */
      staticDistDir: "./public",
      url: ["http://localhost:3000"],
    },
    upload: {
      /* Add configuration here */
      target: "temporary-public-storage",
    },
  },
};

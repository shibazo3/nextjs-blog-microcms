require("dotenv").config({ path: "./.env" });
module.exports = {
  images: {
    domains: ["images.microcms-assets.io"],
  },
  env: {
    X_API_KEY: process.env.X_API_KEY,
    X_ACCESS_KEY: process.env.X_ACCESS_KEY,
  },
};

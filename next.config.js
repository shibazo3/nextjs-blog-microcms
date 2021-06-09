require("dotenv").config({ path: "./.env" });
module.exports = {
  images: {
    domains: ["images.microcms-assets.io"],
  },
  env: {
    X_API_KEY: process.env.X_API_KEY,
    ACCESS_KEY: process.env.ACCESS_KEY,
  },
};

require("dotenv").config({ path: "./.env" });
module.exports = {
  images: {
    domains: ["images.microcms-assets.io"],
  },
  env: {
    X_API_KEY: process.env.X_API_KEY,
    access_key: process.env.ACCESS_KEY,
  },
};

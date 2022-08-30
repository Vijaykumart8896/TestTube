require("dotenv").config();

module.exports = {
  MONGODB_LOCAL: process.env.MONGODB_LOCAL,
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  MONGODB_CLOUD: process.env.MONGODB_CLOUD,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRE: process.env.JWT_EXPIRE,
  JWT_COOKIE_EXPIRE: process.env.JWT_COOKIE_EXPIRE,
};

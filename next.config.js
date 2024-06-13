// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  env: {
    mongodb_username: process.env.DB_USER,
    mongodb_password: process.env.DB_PASS,
    mongodb_cluster: process.env.DB_HOST,
    mongodb_database: process.env.DB_NAME,
  },
};

module.exports = nextConfig;

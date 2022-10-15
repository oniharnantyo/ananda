const path = require('path');
const n = 'node_modules';

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  i18n: {
    locales: ['id'],
    defaultLocale: 'id', // set <html lang="id">
  },
  images: {
    domains: ['res.cloudinary.com', 'pbs.twimg.com'],
  },
  webpack(config, { isServer, webpack, dev, buildId }) {
    config.resolve.alias = {
      ...config.resolve.alias,
      react: path.resolve(__dirname, '.', n, 'react'),
    };

    return config;
  },
});

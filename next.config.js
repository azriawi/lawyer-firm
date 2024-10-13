// next.config.js
const { i18n } = require('./next-i18next.config');
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  // Other Next.js config options

  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Provide fallbacks for Node.js core modules
      config.resolve.fallback = {
        ...config.resolve.fallback, // Preserve existing fallbacks
        fs: false, // Disable 'fs' module
        path: require.resolve('path-browserify'), // Polyfill 'path' module
      };
    }

    return config;
  },
};

module.exports = nextConfig;

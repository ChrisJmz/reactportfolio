/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/reactportfolio',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/reactportfolio/' : '',
};

export default nextConfig;

import withFlowbiteReact from 'flowbite-react/plugin/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/searchbar',
  images: {
    unoptimized: true,
  },
  reactStrictMode: false,
};

export default withFlowbiteReact(nextConfig);

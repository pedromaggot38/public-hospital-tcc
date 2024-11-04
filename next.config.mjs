/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zdcaxllgzmbfrgjnbiaf.supabase.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
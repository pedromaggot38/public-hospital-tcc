/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ietgnboxvpimcdehklcw.supabase.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
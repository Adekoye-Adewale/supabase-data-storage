/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ktsnrdglkwvgcmatevgt.supabase.co',
            },
        ],
      },
};

export default nextConfig;

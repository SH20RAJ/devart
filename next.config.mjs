/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            source: '/:path*',
            headers: [
         {
          key: 'Cache-Control',
          value: 'no-store',
        },
              {
                key: 'X-Robots-Tag',
                value: 'index, follow',
              }
            ],
          },
        ]
      },

};

export default nextConfig;

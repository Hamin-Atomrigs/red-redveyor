/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/(.*)',
                has: [
                    {
                        type: 'host',
                        value: '(www.)?redconveyor.com',
                    },
                ],
                permanent: true,
                destination: 'https://www.redconveyor.com/:path*',
            },
        ];
    },
};

module.exports = nextConfig;

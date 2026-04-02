import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	reactStrictMode: false,
	poweredByHeader: false,
	modularizeImports: {
		'@mui/joy': {
			transform: '@mui/joy/{{member}}',
		},
	},
};

export default nextConfig;

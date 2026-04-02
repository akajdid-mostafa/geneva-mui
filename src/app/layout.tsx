import type { Metadata } from 'next';
import { Mona_Sans } from 'next/font/google';
import './globals.css';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';

import { Box } from '@mui/material';

import { Providers } from '@/providers';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import theme from '@/theme';

import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

const monaSans = Mona_Sans({
	variable: '--font-mona-sans',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Geneva — a ready-to-launch SaaS landing page by ThemeFellas.',
	description:
		'aunch your SaaS product with Geneva — a responsive, high-converting landing page template built with Next.js, MUI and Tailwind CSS by ThemeFellas.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${monaSans.variable} antialiased`}>
				<AppRouterCacheProvider>
					<ThemeProvider theme={theme} defaultMode="dark">
						<InitColorSchemeScript attribute="class" />
						<Providers>
							<Box sx={{ position: 'relative', zIndex: 2 }}>
								<Header />
								{children}
								<Footer />
							</Box>
						</Providers>
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}

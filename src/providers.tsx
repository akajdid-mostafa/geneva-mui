'use client';

import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const queryClient = new QueryClient();

export function Providers({ children }: { children: ReactNode }) {
	return (
		<QueryClientProvider client={queryClient}>
			<Gradient elevation={0}>
				{children}
				<Toaster
					position="top-center"
					reverseOrder={false}
					gutter={8}
					containerClassName=""
					containerStyle={{}}
					toastOptions={{
						duration: 3000,
						position: 'bottom-center',
						style: {
							background: '#363636',
							color: '#fff',
						},
					}}
				/>
			</Gradient>
		</QueryClientProvider>
	);
}

const Gradient = styled(Paper)(({ theme }) => [
	{
		position: 'relative',
		'&:after': {
			background:
				'linear-gradient(180deg, rgba(197, 202, 232, 0.25) 0%, rgba(231, 233, 246, 1) 100%)',
			content: "''",
			position: 'absolute',
			top: 0,
			left: 0,
			right: 0,
			zIndex: 1,
			[theme.breakpoints.up('md')]: {
				height: 1000,
			},
		},
	},
	theme.applyStyles('dark', {
		'&:after': {
			background: 'linear-gradient(180deg, #222 0%, #111 100%)',
		},
	}),
]);

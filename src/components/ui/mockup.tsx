'use client';
import { Box, useColorScheme } from '@mui/material';

export default function Mockup({
	darkImage,
	lightImage,
	aspectRatio = '16/9',
	borderRadius = 44,
}: {
	darkImage: string;
	lightImage: string;
	aspectRatio?: string;
	borderRadius?: number;
}) {
	const { mode } = useColorScheme();
	const src = mode === 'dark' ? darkImage : lightImage;
	return (
		<Box
			className={`aspect-${aspectRatio}`}
			sx={[
				() => ({
					position: 'relative',
					'&:after': {
						borderTopColor: '#fff',
						borderTopWidth: 2,
						background: 'transparent',
						borderTopLeftRadius: {
							xs: `${borderRadius / 2}px !important`,
							md: `${borderRadius}px !important`,
						},
						borderTopRightRadius: {
							xs: `${borderRadius / 2}px !important`,
							md: `${borderRadius}px !important`,
						},
						content: "''",
						left: 0,
						position: 'absolute',
						right: 0,
						height: {
							xs: `${borderRadius / 2}px !important`,
							md: `${borderRadius}px !important`,
						},
						top: 0,
						zIndex: 2,
					},
				}),
				(theme) =>
					theme.applyStyles('dark', {
						'&:after': {
							borderTopColor: '#666666',
						},
					}),
			]}
		>
			<Box
				sx={[
					{
						boxShadow:
							'0px 24px 40px 0px rgba(0, 0, 0, 0.12), 0px 4px 12px 0px rgba(0, 0, 0, 0.1)',
						border: '8px solid #FFFFFF',
						borderRadius: {
							xs: `${borderRadius / 2}px`,
							md: `${borderRadius}px`,
						},
						height: '100%',
						overflow: 'hidden',
						width: '100%',
						zIndex: 1,
					},
					(theme) =>
						theme.applyStyles('dark', {
							boxShadow:
								'0px 4px 12px 0px rgba(0, 0, 0, 0.10), 0px 24px 40px 0px rgba(0, 0, 0, 0.12)',
							border: '8px solid #444',
						}),
				]}
			>
				<Box sx={{ height: '100%', position: 'relative', width: '100%' }}>
					<img src={src} alt="" />
				</Box>
			</Box>
		</Box>
	);
}

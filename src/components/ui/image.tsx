'use client';

import { Box, useColorScheme } from '@mui/material';

export default function ImageComponent({
	darkImage,
	lightImage,
	alt,
	aspectRatio = '16/9',
}: {
	darkImage: string;
	lightImage: string;
	alt: string;
	aspectRatio?: string;
}) {
	const { mode } = useColorScheme();
	const src = mode === 'dark' ? darkImage : lightImage;

	return (
		<Box className={`aspect-${aspectRatio}`} sx={{ position: 'relative' }}>
			<img src={src} alt={alt || ''} />
		</Box>
	);
}

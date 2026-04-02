'use client';

import Link from 'next/link';
import { Button } from '@mui/material';
import { IconArrowRight as IconRightArrow } from '@tabler/icons-react';

// Put Button label here
const label = 'Get Started';

export default function GetStarted({
	buttonLabel = label,
	fullWidth = false,
}: {
	buttonLabel?: string;
	fullWidth?: boolean;
}) {
	return (
		<Button
			component={Link}
			endIcon={<IconRightArrow />}
			fullWidth={fullWidth}
			href={'/#pricing'}
		>
			{buttonLabel}
		</Button>
	);
}

'use client';

import Link from 'next/link';
import { Button } from '@mui/material';
import { IconMail as IconMail } from '@tabler/icons-react';

// Put Button label here
const label = 'Contact us';

export default function ContactButton({
	buttonLabel = label,
	fullWidth = false,
}: {
	buttonLabel?: string;
	fullWidth?: boolean;
}) {
	return (
		<Button
			color="secondary"
			component={Link}
			fullWidth={fullWidth}
			href={'/contact'}
			startIcon={<IconMail />}
		>
			{buttonLabel}
		</Button>
	);
}

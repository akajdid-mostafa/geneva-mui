'use client';

import { Button } from '@mui/material';

// Put Button label here
const label = 'Login';

export default function LoginButton({
	buttonLabel = label,
	fullWidth = false,
}: {
	buttonLabel?: string;
	fullWidth?: boolean;
}) {
	return (
		<Button color="secondary" fullWidth={fullWidth}>
			{buttonLabel}
		</Button>
	);
}

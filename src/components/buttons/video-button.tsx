'use client';
import { forwardRef, ReactElement, useState } from 'react';
import { Box, Button, Dialog, IconButton, Zoom } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import {
	IconPlayerPlayFilled as IconPlay,
	IconX as IconClose,
} from '@tabler/icons-react';
import ReactPlayer from 'react-player';

// Put Button label here
const label = 'Watch Video';

export default function Video({
	buttonLabel = label,
	url,
}: {
	buttonLabel?: string;
	url: string;
}) {
	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};
	return (
		<>
			<Button color="secondary" onClick={handleOpen} startIcon={<IconPlay />}>
				{buttonLabel}
			</Button>
			<Dialog
				fullWidth
				keepMounted
				maxWidth="md"
				onClose={handleClose}
				open={open}
				slots={{
					transition: Transition,
				}}
				sx={{
					'& .MuiDialog-paper': {
						backgroundColor: 'transparent',
						backgroundImage: 'none',
					},
				}}
			>
				<Box
					sx={{
						backgroundColor: 'primary.main',
						borderRadius: '36px',
						position: 'absolute',
						top: 8,
						right: 8,
						zIndex: 1000,
					}}
				>
					<IconButton color="secondary" onClick={handleClose}>
						<IconClose size={24} />
					</IconButton>
				</Box>
				<Box
					sx={{
						borderRadius: '36px',
						height: {
							xs: 220,
							md: 480,
						},
						overflow: 'hidden',
						mt: 8,
						width: '100%',
					}}
				>
					<ReactPlayer src={url} width="100%" height="100%" />
				</Box>
			</Dialog>
		</>
	);
}

const Transition = forwardRef(function Transition(
	props: TransitionProps & {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		children: ReactElement<any, any>;
	},
	ref: React.Ref<unknown>,
) {
	return <Zoom ref={ref} {...props} />;
});

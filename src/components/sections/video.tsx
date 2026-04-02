'use client';

import { useState } from 'react';
import {
	Box,
	Card,
	Container,
	Dialog,
	Grid,
	IconButton,
	Stack,
	Typography,
} from '@mui/material';
import {
	IconPlayerPlayFilled as IconPlay,
	IconX as IconClose,
} from '@tabler/icons-react';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import GetStarted from '@/components/buttons/get-started-button';
import RevealSection from '@/components/ui/reveal-section';

// Put Section Headline here
const headline = `Everything you need. \n Businesses`;

// Put Section SubHeadline here
const subHeadline = `Why Choose Us?`;

// Put Section Description here
const description = `Whether you run one store or ten, Geneva scales with you. It’s fast, reliable, and actually enjoyable to use.`;

// Put Video url here
const videoUrl = 'https://www.youtube.com/watch?v=LXb3EKWsInQ';

export default function Video() {
	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};
	return (
		<>
			<Container sx={{ py: { xs: 6.25, md: 12.5 } }}>
				<Stack spacing={{ xs: 4, md: 8 }}>
					<RevealSection delay={0.1} direction="up">
						<Stack spacing={2.5} sx={{ px: { xs: 2, md: 7.5 } }}>
							<Typography color="accent" variant="subtitle1">
								{subHeadline}
							</Typography>
							<Box>
								<Grid container spacing={{ xs: 2, lg: 7.5 }}>
									<Grid size={{ xs: 12, lg: 6 }}>
										<Stack spacing={1.5}>
											<Typography variant="h3">{headline}</Typography>
										</Stack>
									</Grid>
									<Grid size={{ xs: 12, lg: 6 }}>
										<Stack spacing={3}>
											<Typography
												color="text.secondary"
												component={'p'}
												variant="h6"
											>
												{description}
											</Typography>
											<Box>
												<GetStarted />
											</Box>
										</Stack>
									</Grid>
								</Grid>
							</Box>
						</Stack>
					</RevealSection>
					<RevealSection delay={0.3} direction="up">
						<Card
							className="aspect-[16/9]"
							sx={{
								borderRadius: '36px',
								overflow: 'hidden',
								position: 'relative',
								'&:before': {
									backgroundColor: 'rgba(0, 0, 0, 0.25)',
									bottom: 0,
									content: '""',
									left: 0,
									position: 'absolute',
									right: 0,
									top: 0,
									zIndex: 1,
								},
								'&:after': {
									borderTopColor: 'rgba(255, 255, 255, 0.50)',
									borderTopWidth: 2,
									background: 'transparent',
									borderTopLeftRadius: {
										xs: `18px !important`,
										md: `36px !important`,
									},
									borderTopRightRadius: {
										xs: `18px !important`,
										md: `36px !important`,
									},
									content: "''",
									left: 0,
									position: 'absolute',
									right: 0,
									height: {
										xs: `18px !important`,
										md: `36px !important`,
									},
									top: 0,
									zIndex: 1,
								},
							}}
						>
							<Image
								src="/global/video-poster.jpg"
								alt=""
								fill
								style={{ objectFit: 'cover' }}
							/>
							<Box
								sx={{
									backgroundColor: 'rgba(0, 0, 0, 0)',
									left: '50%',
									position: 'absolute',
									top: '50%',
									transform: 'translate(-50%, -50%)',
									zIndex: 2,
								}}
							>
								<Box
									onClick={handleOpen}
									sx={{
										backgroundColor: 'accent.main',
										borderRadius: '50vh',
										boxShadow:
											'0px 4px 12px 0px rgba(0, 0, 0, 0.10), 0px 24px 40px 0px rgba(0, 0, 0, 0.12)',
										color: '#10101E',
										p: { xs: 2, md: 5 },
										transition: 'transform 0.3s ease-in-out',
										cursor: 'pointer',
										'&:hover': {
											transform: 'scale(1.1)',
										},
										'& svg': {
											height: { xs: 32, md: 72 },
											width: { xs: 32, md: 72 },
										},
									}}
								>
									<IconPlay />
								</Box>
							</Box>
						</Card>
					</RevealSection>
				</Stack>
			</Container>
			<Dialog
				fullWidth
				keepMounted
				maxWidth="md"
				onClose={handleClose}
				open={open}
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
						right: 8,
						top: 8,
						transition: 'transform 0.3s ease-in-out',
						zIndex: 1000,
						'&:hover': {
							transform: 'scale(1.1)',
						},
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
					<ReactPlayer src={videoUrl} width="100%" height="100%" />
				</Box>
			</Dialog>
		</>
	);
}

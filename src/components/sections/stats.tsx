'use client';

import {
	Box,
	CardContent,
	Container,
	Grid,
	Stack,
	Typography,
} from '@mui/material';
import { Card } from '@/components/ui/card';
import RevealSection from '@/components/ui/reveal-section';

// Put Section Headline here
const headline = `The Numbers Behind Geneva’s Growth`;

// Put Section Description here
const description = `We built Geneva to solve real eCommerce problems — and the results speak for themselves. Trusted by sellers worldwide, it’s powering smoother operations.`;

const statsRow1: Stat[] = [
	{
		headline: '$58M+',
		description: 'Transactions Tracked',
		color: true,
	},
	{
		headline: '920K+',
		description: 'Orders Processed',
		color: false,
	},
	{
		headline: '18K+',
		description: 'Financial Reports Generated',
		color: false,
	},
];
const statsRow2: Stat[] = [
	{
		headline: '3.1M+',
		description: 'Stock Alerts Triggered',
		color: false,
	},
	{
		headline: '310K+',
		description: 'Products Managed',
		color: true,
	},
	{
		headline: '5,200+',
		description: 'Stores Connected',
		color: false,
	},
];

interface Stat {
	headline: string;
	description: string;
	color: boolean;
}

export default function Stats() {
	return (
		<Container sx={{ py: { xs: 6.25, md: 12.5 } }}>
			<Stack spacing={{ xs: 4, md: 8 }}>
				<RevealSection delay={0.1} direction="up">
					<Box sx={{ px: { xs: 3.75, md: 7.5 } }}>
						<Grid container spacing={{ xs: 2, lg: 7.5 }}>
							<Grid size={{ xs: 12, lg: 6 }}>
								<Typography sx={{ whiteSpace: 'pre-line' }} variant="h2">
									{headline}
								</Typography>
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
								</Stack>
							</Grid>
						</Grid>
					</Box>
				</RevealSection>
				<RevealSection delay={0.3} direction="up">
					<Stack spacing={{ xs: 2, md: 3 }}>
						<Box>
							<Grid container spacing={{ xs: 2, md: 3 }}>
								{statsRow1.map((stat, index) => (
									<Grid
										key={index}
										size={{ xs: 12, lg: index === 2 ? 6 : 3 }}
										sx={{ height: '100%' }}
									>
										<StatItem stat={stat} />
									</Grid>
								))}
							</Grid>
						</Box>
						<Box>
							<Grid container spacing={{ xs: 2, md: 3 }}>
								{statsRow2.map((stat, index) => (
									<Grid
										key={index}
										size={{ xs: 12, lg: index === 0 ? 6 : 3 }}
										sx={{ height: '100%' }}
									>
										<StatItem stat={stat} />
									</Grid>
								))}
							</Grid>
						</Box>
					</Stack>
				</RevealSection>
			</Stack>
		</Container>
	);
}

function StatItem({ stat }: { stat: Stat }) {
	return (
		<Stack
			sx={{
				height: '100%',
				transition: 'transform 0.3s ease-in-out',
				'&:hover': { transform: { md: 'scale(1.05)' } },
			}}
		>
			<Card
				backgroundColor={{
					light: stat.color ? '#0E21A0' : 'rgba(255, 255, 255, 0.50)',
					dark: stat.color ? '#99FF82' : '#282828',
				}}
				borderColor={{
					light: stat.color ? '#97A0D6' : '#FFF',
					dark: stat.color ? '#99FF82' : '#444',
				}}
				borderRadius={24}
				gradientOpacity={stat.color ? 0.1 : undefined}
				gradientColor={{ light: '#EEE', dark: '#444' }}
				fullHeight
			>
				<CardContent
					sx={{
						height: '100%',
						p: { xs: 3, md: 4 },
						paddingBottom: { xs: '24px !important', md: '32px !important' },
					}}
				>
					<Stack spacing={1.5}>
						<Typography
							sx={[
								() => ({ color: stat.color ? '#ffffff' : 'primary.main' }),
								(theme) =>
									theme.applyStyles('dark', {
										color: stat.color ? '#10101E' : 'primary.main',
									}),
							]}
							variant="h3"
						>
							{stat.headline}
						</Typography>
						<Typography
							sx={[
								() => ({ color: stat.color ? '#ffffff' : 'primary.main' }),
								(theme) =>
									theme.applyStyles('dark', {
										color: stat.color ? '#4B4B65' : 'primary.main',
									}),
							]}
							variant="subtitle1"
						>
							{stat.description}
						</Typography>
					</Stack>
				</CardContent>
			</Card>
		</Stack>
	);
}

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
import Image from '@/components/ui/image';
import GetStarted from '@/components/buttons/get-started-button';
import RevealSection from '@/components/ui/reveal-section';

// Put Features here
const features: Feature[] = [
	{
		headline: 'Smart Product Management',
		description:
			'Add, update, and categorize products effortlessly. Bulk actions, variants, and inventory tracking made simple.',
	},
	{
		headline: 'Real-Time Finance Overview',
		description:
			'Track sales, expenses, taxes, and profits with precision. Get instant financial clarity.',
	},
	{
		headline: 'Stock Alerts & Auto-Restock',
		description:
			'Know what’s low before it runs out. Automate restocking and reduce downtime.',
	},
];

interface Feature {
	headline: string;
	description: string;
}

export default function FeaturesGrid() {
	return (
		<Container id="features-1" sx={{ py: { xs: 6.25, md: 12.5 } }}>
			<Grid container spacing={4.5}>
				<Grid size={12}>
					<RevealSection delay={0.1}>
						<Card>
							<CardContent>
								<Box>
									<Grid
										container
										direction={{ xs: 'column-reverse', md: 'row' }}
										spacing={4}
										sx={{
											flexWrap: {
												xs: 'wrap',
												md: 'nowrap',
											},
										}}
									>
										<Grid size={{ xs: 12, lg: 'grow' }}>
											<Stack spacing={3.75} sx={{ pt: 1 }}>
												<Stack spacing={1.5}>
													<Typography variant="h4">
														{features[0]?.headline || ''}
													</Typography>
													<Typography
														color="textSecondary"
														component={'p'}
														variant="h6"
													>
														{features[0]?.description || ''}
													</Typography>
												</Stack>
												<Box>
													<GetStarted />
												</Box>
											</Stack>
										</Grid>
										<Grid
											size={{
												xs: 12,
												lg: 'auto',
											}}
										>
											<Box>
												<Image
													aspectRatio="694/520"
													darkImage="/dark/features-grid-01.png"
													lightImage="/light/features-grid-01.png"
													alt=""
												/>
											</Box>
										</Grid>
									</Grid>
								</Box>
							</CardContent>
						</Card>
					</RevealSection>
				</Grid>

				<Grid size={{ xs: 12, md: 6 }}>
					<RevealSection delay={0.3} direction="left">
						<Card
							backgroundColor={{ light: '#0E21A0', dark: '#0E21A0' }}
							borderColor={{ light: '#3949B1', dark: '#3949B1' }}
							gradientColor={{ light: '#3949B1', dark: '#3949B1' }}
							gradientOpacity={0.6}
						>
							<CardContent>
								<Box>
									<Grid
										container
										spacing={5}
										direction={{ xs: 'column-reverse', md: 'row' }}
									>
										<Grid size={{ xs: 12 }}>
											<Stack spacing={1.5}>
												<Typography color="#ffffff" variant="h4">
													{features[1]?.headline || ''}
												</Typography>
												<Typography
													color="rgba(197, 202, 232, 1)"
													component={'p'}
													variant="h6"
												>
													{features[1]?.description || ''}
												</Typography>
											</Stack>
										</Grid>
										<Grid
											size={{
												xs: 12,
											}}
										>
											<Box>
												<Image
													aspectRatio="578/336"
													darkImage="/dark/features-grid-02.png"
													lightImage="/light/features-grid-02.png"
													alt=""
												/>
											</Box>
										</Grid>
									</Grid>
								</Box>
							</CardContent>
						</Card>
					</RevealSection>
				</Grid>

				<Grid size={{ xs: 12, md: 6 }}>
					<RevealSection delay={0.5} direction="right">
						<Card
							backgroundColor={{ light: '#10101E', dark: '#DDDDDD' }}
							borderColor={{ light: '#4B4B65', dark: '#FFFFFF' }}
							gradientColor={{ light: '#4B4B65', dark: '#FFFFFF' }}
							gradientOpacity={0.5}
						>
							<CardContent>
								<Box>
									<Grid
										container
										spacing={5}
										direction={{ xs: 'column-reverse', md: 'row' }}
									>
										<Grid size={{ xs: 12 }}>
											<Stack spacing={1.5}>
												<Typography
													sx={[
														{ color: '#ffffff' },
														(theme) =>
															theme.applyStyles('dark', {
																color: '#000000',
															}),
													]}
													variant="h4"
												>
													{features[2]?.headline || ''}
												</Typography>
												<Typography
													component={'p'}
													sx={[
														{ color: '#CBC9C7' },
														(theme) =>
															theme.applyStyles('dark', {
																color: '#4B4B65',
															}),
													]}
													variant="h6"
												>
													{features[2]?.description || ''}
												</Typography>
											</Stack>
										</Grid>
										<Grid
											size={{
												xs: 12,
											}}
										>
											<Box>
												<Image
													aspectRatio="578/336"
													darkImage="/dark/features-grid-03.png"
													lightImage="/light/features-grid-03.png"
													alt=""
												/>
											</Box>
										</Grid>
									</Grid>
								</Box>
							</CardContent>
						</Card>
					</RevealSection>
				</Grid>
			</Grid>
		</Container>
	);
}

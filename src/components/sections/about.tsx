import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';

import { Card } from '@/components/ui/card';
import GetStarted from '../buttons/get-started-button';
import ContactButton from '../buttons/contact-button';
import RevealSection from '@/components/ui/reveal-section';

// Put tagline here
const tagline = `About us`;

// Put headline here
const headline = `We control the world one line at a time.`;

// put content here
const description = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose`;

export default function Contact() {
	return (
		<Container sx={{ pt: { xs: 2, md: 4 }, pb: { xs: 3.25, md: 7.5 } }}>
			<RevealSection delay={0.1} direction="up">
				<Grid
				alignItems={{ md: 'stretch' }}
				container
				direction={{ xs: 'column-reverse', md: 'row' }}
				spacing={{ xs: 0, md: 4, lg: 8 }}
			>
				<RevealSection delay={0.3} direction="left">
					<Grid size={{ xs: 12, md: 6 }}>
					<Stack spacing={{ xs: 2.5, md: 5 }} sx={{ py: { xs: 0, md: 5 } }}>
						<Stack spacing={1.5}>
							<Typography
								color="#FF4B91"
								sx={{ maxWidth: { xs: '100%', md: '80%' } }}
								variant="h5"
							>
								{tagline}
							</Typography>
							<Typography
								variant="h2"
								sx={{ maxWidth: { xs: '100%', md: '80%' } }}
							>
								{headline}
							</Typography>
							<Typography color="textSecondary" sx={{ whiteSpace: 'pre-line' }}>
								{description}
							</Typography>
						</Stack>
						<Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
							<GetStarted />
							<ContactButton />
						</Stack>
					</Stack>
				</Grid>
				</RevealSection>
				<RevealSection delay={0.5} direction="right">
					<Grid size={{ xs: 0, md: 'grow' }} sx={{ flexGrow: { md: 1 } }}>
					<Card
						borderColor={{
							light: 'rgba(255, 255, 255, 0.5)',
							dark: 'rgba(255, 255, 255, 0.5)',
						}}
						borderRadius={36}
						fullHeight
					>
						<Box sx={{ position: 'relative', height: '100%' }}>
							<Image
								src="/dark/about.jpg"
								alt=""
								fill
								style={{ objectFit: 'cover' }}
							/>
						</Box>
					</Card>
				</Grid>
				</RevealSection>
			</Grid>
			</RevealSection>
		</Container>
	);
}

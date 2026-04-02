import {
	Box,
	CardContent,
	Container,
	Grid,
	Stack,
	Typography,
} from '@mui/material';
import Image from 'next/image';

import { Card } from '@/components/ui/card';
import ContactForm from '@/components/forms/contact-form';
import RevealSection from '@/components/ui/reveal-section';

// Put content here
const headline = `Contact us`;

export default function Contact() {
	return (
		<Container sx={{ py: { xs: 1.5, md: 3 } }}>
			<RevealSection delay={0.1} direction="up">
				<Grid
				alignItems={{ md: 'stretch' }}
				container
				direction={{ xs: 'column-reverse', md: 'row' }}
				spacing={{ xs: 0, md: 4, lg: 8 }}
			>
				<Grid size={{ xs: 12, md: 6 }}>
					<Card
						backgroundColor={{
							light: 'rgba(255, 255, 255, 0.5)',
							dark: 'rgba(34, 34, 34, 1)',
						}}
						borderColor={{ light: '#ffffff', dark: 'rgba(68, 68, 68, 1)' }}
						borderRadius={36}
					>
						<CardContent
							sx={{
								p: { xs: 3, md: 5 },
								paddingBottom: { xs: '32px !important', md: '40px !important' },
							}}
						>
							<Stack spacing={4}>
								<Typography variant="h3">{headline}</Typography>
								<ContactForm />
							</Stack>
						</CardContent>
					</Card>
				</Grid>
				<Grid size={{ xs: 0, md: 6 }} sx={{ flexGrow: { md: 1 } }}>
					<Card borderRadius={36} fullHeight>
						<Box
							className="aspect-596/702"
							sx={{ position: 'relative', height: '100%' }}
						>
							<Image
								src="/dark/contact.jpg"
								alt=""
								fill
								style={{ objectFit: 'cover' }}
							/>
						</Box>
					</Card>
				</Grid>
			</Grid>
			</RevealSection>
		</Container>
	);
}

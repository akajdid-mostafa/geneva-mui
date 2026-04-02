import {
	Avatar,
	AvatarGroup,
	Box,
	Container,
	Stack,
	Typography,
} from '@mui/material';

import GetStarted from '@/components/buttons/get-started-button';
import Mockup from '@/components/ui/mockup';
import VideoButton from '@/components/buttons/video-button';
import RevealSection from '@/components/ui/reveal-section';

// Put Section Headline here
const headline = `Your Entire eCommerce`;

// Put Section SubHeadline here
const subHeadline = `Business in One Dashboard`;

// Put Section TrustedBy here
const trustedBy = `Trusted by +300K Creatives`;

// Put Video url here
const videoUrl = 'https://www.youtube.com/watch?v=LXb3EKWsInQ';

// Put Section AvatarGroup here
const avatars: Avatar[] = [
	{
		alt: 'Remy Sharp',
		src: '/global/person-01.jpg',
	},
	{
		alt: 'Travis Howard',
		src: '/global/person-02.jpg',
	},
	{
		alt: 'Cindy Baker',
		src: '/global/person-03.jpg',
	},
	{
		alt: 'Agnes Walker',
		src: '/global/person-04.jpg',
	},
];

interface Avatar {
	alt: string;
	src: string;
}

export default function Hero() {
	return (
		<Container sx={{ pt: { xs: 3.725, md: 7.5 }, pb: { md: 0 } }}>
			<Stack spacing={{ xs: 6.25, md: 12.5 }}>
				<Box sx={{ px: { xs: 3.75, md: 7.5 } }}>
					<Stack spacing={4}>
						<RevealSection delay={0.1}>
							<Box sx={{ maxWidth: { md: 880 } }}>
								<Typography variant="h1">
									{headline}{' '}
									<Typography
										color="accent.main"
										component={'span'}
										variant="h1"
									>
										{subHeadline}
									</Typography>
								</Typography>
							</Box>
						</RevealSection>
						<RevealSection delay={0.3}>
							<Stack
								alignItems={{ md: 'center' }}
								direction={{ xs: 'column', md: 'row' }}
								justifyContent={{ md: 'start' }}
								spacing={6}
							>
								<Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5}>
									<GetStarted />
									<VideoButton url={videoUrl} />
								</Stack>
								<Stack
									alignItems="center"
									direction={{ xs: 'column', sm: 'row' }}
									spacing={1}
								>
									<AvatarGroup
										max={4}
										sx={{ '& .MuiAvatar-root': { borderWidth: 4 } }}
									>
										{avatars.map((avatar, index) => (
											<Avatar alt={avatar.alt} src={avatar.src} key={index} />
										))}
									</AvatarGroup>
									<Typography variant="body1">{trustedBy}</Typography>
								</Stack>
							</Stack>
						</RevealSection>
					</Stack>
				</Box>
				<RevealSection delay={0.5} direction="up" distance={80}>
					<Mockup
						darkImage="/dark/hero.jpg"
						lightImage="/light/hero.jpg"
						aspectRatio="1271/831"
					/>
				</RevealSection>
			</Stack>
		</Container>
	);
}

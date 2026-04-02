'use client';

import {
	Box,
	Button,
	CardContent,
	Container,
	Grid,
	IconButton,
	Stack,
	Tooltip,
	Typography,
} from '@mui/material';
import { useColorScheme } from '@mui/material';

import Link from 'next/link';

import {
	IconArrowUp as IconTop,
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandTwitter,
	IconBrandYoutube,
} from '@tabler/icons-react';

import { Card } from '@/components/ui/card';
import SubscribeForm from '@/components/forms/subscribe-form';

// Put Headline here
const headline = `Take Control of Your eCommerce Business`;

// Put Description here
const description = `Join thousands of sellers who trust Geneva to simplify operations, track performance, and scale faster — all from one powerful dashboard.`;

// Put Logo text here
const logoText = `Geneva`;

// Put Copyright here
const copyright = `© 2025 Geneva. All right reserved.`; // Put Copyright here

// Put Footer links row 1 here
const footerLinks1: FooterLink[] = [
	{
		href: '/about',
		label: 'About',
	},
	{
		href: '/contact',
		label: 'Contact us',
	},
	{
		href: '/sample',
		label: 'Affiliate Program',
	},
];

// Put Footer links row 2 here
const footerLinks2: FooterLink[] = [
	{
		href: '/#features-1',
		label: 'Features Grid',
	},
	{
		href: '/#features-2',
		label: 'Features Slider',
	},
	{
		href: '/#features-3',
		label: 'Features Accordion',
	},
];

// Put Footer links row 3 here
const footerLinks3: FooterLink[] = [
	{
		href: '/terms',
		label: 'Terms & Conditions',
	},
	{
		href: '/privacy',
		label: 'Privacy Policy',
	},
	{
		href: '/cookies',
		label: 'Cookie Policy',
	},
];

// Put Social links here
const socialLinks: SocialLink[] = [
	{
		href: '#',
		icon: <IconBrandFacebook />,
		label: 'Facebook',
	},
	{
		href: '#',
		icon: <IconBrandInstagram />,
		label: 'Instagram',
	},
	{
		href: '#',
		icon: <IconBrandTwitter />,
		label: 'Twitter',
	},
	{
		href: '#',
		icon: <IconBrandYoutube />,
		label: 'Youtube',
	},
];

export default function Footer() {
	const { mode } = useColorScheme();

	const handleToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};
	return (
		<Container sx={{ py: { xs: 6.25, md: 12.5 } }}>
			<Box
				sx={{
					position: 'absolute',
					left: '50%',
					//top: '-50%',
					transform: 'translate(-50%, -50%)',
					zIndex: 100,
				}}
			>
				<Button
					color="secondary"
					onClick={handleToTop}
					size="small"
					startIcon={<IconTop />}
					sx={[
						() => ({
							pl: 2,
							pr: 2.5,
							py: 1,
						}),
						(theme) =>
							theme.applyStyles('light', {
								background: `#f1f1f1`,
							}),
					]}
				>
					{'To Top'}
				</Button>
			</Box>
			<Card
				backgroundColor={{ light: 'rgba(16, 16, 30, 1)', dark: '#181818' }}
				borderColor={{ light: 'rgba(25, 25, 48, 1)', dark: '#444444' }}
				gradientColor={{ light: 'rgba(25, 25, 48, 1)', dark: '#444444' }}
				gradientSize={200}
				gradientOpacity={0.2}
			>
				<CardContent sx={{ px: { xs: 2.5, md: 7.5 } }}>
					<Stack spacing={{ md: 8, xs: 6 }}>
						<Box>
							<Grid container spacing={{ md: 8, xs: 2 }}>
								<Grid size={{ xs: 12, lg: 6 }}>
									<Typography color="#ffffff" variant="h2">
										{headline}
									</Typography>
								</Grid>
								<Grid size={{ xs: 12, lg: 6 }}>
									<Stack spacing={{ xs: 2, md: 3 }}>
										<Typography
											color="rgba(160, 160, 174, 1)"
											variant="subtitle1"
										>
											{description}
										</Typography>
										<SubscribeForm />
									</Stack>
								</Grid>
							</Grid>
						</Box>
						<Card
							backgroundColor={{
								light: 'rgba(25, 25, 48, 1)',
								dark: '#282828',
							}}
							borderColor={{ light: 'rgba(75, 75, 101, 1)', dark: '#555' }}
							gradientColor={{ light: 'rgba(75, 75, 101, 1)', dark: '#555' }}
							gradientOpacity={0.2}
							gradientSize={200}
						>
							<CardContent>
								<Grid container spacing={{ md: 8, xs: 4 }}>
									<Grid size={{ xs: 12, md: 12, lg: 'grow' }}>
										<Stack spacing={{ xs: 2.25, md: 4.5 }}>
											<Stack alignItems="center" direction="row" spacing={1.5}>
												<Box>
													{mode === 'dark' && (
														<img src="/dark/logo-footer.png" alt="" />
													)}
													{mode === 'light' && (
														<img src="/light/logo-footer.png" alt="" />
													)}
												</Box>
												<Typography
													color="#ffffff"
													component={'div'}
													variant="h4"
												>
													{logoText}
												</Typography>
											</Stack>
											<Typography
												color="rgba(160, 160, 174, 1)"
												variant="body1"
											>
												{copyright}
											</Typography>
											<Stack
												direction="row"
												spacing={1}
												sx={{ transform: 'translateX(-16px)' }}
											>
												{socialLinks.map((link) => (
													<Tooltip
														placement="top"
														title={link.label}
														key={link.label}
													>
														<IconButton
															sx={{
																color: '#A0A0AE',
															}}
															size="large"
														>
															{link.icon}
														</IconButton>
													</Tooltip>
												))}
											</Stack>
										</Stack>
									</Grid>
									<Grid size={{ xs: 12, md: 4, lg: 'auto' }}>
										<Stack spacing={2}>
											<Typography color="#ffffff" variant="subtitle1">
												{`Company`}
											</Typography>
											<Stack spacing={1.5}>
												{footerLinks1.map((link) => (
													<Link key={link.label} href={link.href}>
														<Typography
															color="rgba(160, 160, 174, 1)"
															variant="body1"
														>
															{link.label}
														</Typography>
													</Link>
												))}
											</Stack>
										</Stack>
									</Grid>
									<Grid size={{ xs: 12, md: 4, lg: 'auto' }}>
										<Stack spacing={2}>
											<Typography color="#ffffff" variant="subtitle1">
												{`Features`}
											</Typography>
											<Stack spacing={1.5}>
												{footerLinks2.map((link) => (
													<Link key={link.label} href={link.href}>
														<Typography
															color="rgba(160, 160, 174, 1)"
															variant="body1"
														>
															{link.label}
														</Typography>
													</Link>
												))}
											</Stack>
										</Stack>
									</Grid>
									<Grid size={{ xs: 12, md: 4, lg: 'auto' }}>
										<Stack spacing={2}>
											<Typography color="#ffffff" variant="subtitle1">
												{`Legal`}
											</Typography>
											<Stack spacing={1.5}>
												{footerLinks3.map((link) => (
													<Link key={link.label} href={link.href}>
														<Typography
															color="rgba(160, 160, 174, 1)"
															variant="body1"
														>
															{link.label}
														</Typography>
													</Link>
												))}
											</Stack>
										</Stack>
									</Grid>
								</Grid>
							</CardContent>
						</Card>
					</Stack>
				</CardContent>
			</Card>
		</Container>
	);
}

interface FooterLink {
	href: string;
	label: string;
}

interface SocialLink {
	href: string;
	icon: React.ReactNode;
	label: string;
}

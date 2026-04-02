'use client';

import { useCallback, useEffect, useState } from 'react';

import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Container,
	Grid,
	IconButton,
	Stack,
	Typography,
} from '@mui/material';

import {
	IconChevronLeft as IconPrev,
	IconChevronRight as IconNext,
} from '@tabler/icons-react';
import { EmblaCarouselType } from 'embla-carousel';

import useEmblaCarousel from 'embla-carousel-react';
import RevealSection from '@/components/ui/reveal-section';

// Put Section Headline here
const headline = `Features That Put You in Control`;

// Put Section SubHeadline here
const subHeadline = `Everything you need. \n Nothing you don’t.`;

// Put Section Features here
const features: Feature[] = [
	{
		image: '/global/feature-slider-01.jpg',
		title: `Multi-Channel Support`,
		description: `Connect your Shopify, WooCommerce, or custom store and control everything from one place.`,
	},
	{
		image: '/global/feature-slider-02.jpg',
		title: `Role-Based Access`,
		description: `Team collaboration with permissions and audit trails — no micromanaging required.`,
	},
	{
		image: '/global/feature-slider-03.jpg',
		title: `Auto-Sync Inventory`,
		description: `Stay synced across warehouses and platforms in real-time.`,
	},
	{
		image: '/global/feature-slider-04.jpg',
		title: `Dark Mode Support`,
		description: `Manage on the go, day or night. Geneva is optimized for any device.`,
	},
];

interface Feature {
	image: string;
	title: string;
	description: string;
}

export default function FeaturesSlider() {
	const [emblaRef, emblaApi] = useEmblaCarousel();

	const [canPrev, setCanPrev] = useState(true);
	const [canNext, setCanNext] = useState(true);

	const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
		setCanPrev(emblaApi.canScrollPrev());
		setCanNext(emblaApi.canScrollNext());
	}, []);

	useEffect(() => {
		if (!emblaApi) return;

		onSelect(emblaApi);
		emblaApi.on('reInit', onSelect).on('select', onSelect);
	}, [emblaApi, onSelect]);

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<Stack alignItems={{ lg: 'center' }} id="features-2">
			<Stack spacing={{ xs: 2, md: 8 }}>
				<RevealSection delay={0.1} direction="up">
					<Container>
						<Box sx={{ px: { xs: 0, md: 7.5 } }}>
							<Grid alignItems="end" container spacing={{ xs: 3.75, md: 5 }}>
								<Grid size={{ xs: 12, md: 'grow' }}>
									<Stack
										spacing={{ xs: 1.5, md: 1.5 }}
										sx={{ px: { xs: 2, md: 0 } }}
									>
										<Typography color="accent" variant="subtitle1">
											{subHeadline}
										</Typography>
										<Typography
											component="div"
											sx={{ whiteSpace: 'pre-line' }}
											variant="h2"
										>
											{headline}
										</Typography>
									</Stack>
								</Grid>
								<Grid size={{ xs: 0, md: 'auto' }}>
									<Stack
										direction="row"
										spacing={{ md: 5 }}
										sx={{ display: { xs: 'none', md: 'flex' } }}
									>
										<IconButton
											disabled={!canPrev}
											disableRipple
											onClick={scrollPrev}
											sx={{
												opacity: 0.5,
												p: 0,
												transition: 'opacity 0.2s ease-in-out',
												'&:hover': { opacity: 1 },
											}}
										>
											<IconPrev size={48} />
										</IconButton>
										<IconButton
											disabled={!canNext}
											disableRipple
											onClick={scrollNext}
											sx={{
												opacity: 0.5,
												p: 0,
												transition: 'opacity 0.2s ease-in-out',
												'&:hover': { opacity: 1 },
											}}
										>
											<IconNext size={48} />
										</IconButton>
									</Stack>
								</Grid>
							</Grid>
						</Box>
					</Container>
				</RevealSection>
				<RevealSection delay={0.3} direction="up">
					<Box
						sx={[
							() => ({
								position: 'relative',
								'&:after': {
									background: `linear-gradient(to left, rgba(231, 233, 246, 1), rgba(231, 233, 246, 0))`,
									content: '""',
									display: canNext ? 'block' : 'none',
									height: '100%',
									right: 0,
									pointerEvents: 'none',
									position: 'absolute',
									top: 0,
									width: '10%',
									zIndex: 1,
								},
								'&:before': {
									background: `linear-gradient(to right, rgba(231, 233, 246, 1), rgba(231, 233, 246, 0))`,
									content: '""',
									display: canPrev ? 'block' : 'none',
									height: '100%',
									left: 0,
									pointerEvents: 'none',
									position: 'absolute',
									top: 0,
									width: '10%',
									zIndex: 1,
								},
							}),
							(theme) =>
								theme.applyStyles('dark', {
									'&:before': {
										background: `linear-gradient(to left, rgba(17, 17, 17, 0) 0%,rgba(17, 17, 17, 1) 100%)`,
									},
									'&:after': {
										background: `linear-gradient(to right, rgba(17, 17, 17, 0) 0%,rgba(17, 17, 17, 1) 100%)`,
									},
								}),
						]}
					>
						<Box className="embla" ref={emblaRef}>
							<Box
								className="embla__container"
								sx={{
									maxWidth: { lg: 1332 },
									pb: { xs: 8, md: 8 },
									px: { xs: 2, md: 3, lg: 4 },
								}}
							>
								{features.map((feature, index) => (
									<Card
										key={index}
										className="embla__slide"
										sx={[
											() => ({
												backgroundColor: '#0E21A0',
												borderRadius: { xs: '24px', md: '32px' },
												boxShadow: '0px 24px 40px 0px rgba(0, 0, 0, 0.12)',
												position: 'relative',
												'&:after': {
													borderTopColor: 'rgba(255, 255, 255, 0.5)',
													borderTopWidth: 2,
													background: 'transparent',
													borderTopLeftRadius: {
														xs: `24px !important`,
														md: `32px !important`,
													},
													borderTopRightRadius: {
														xs: `24px !important`,
														md: `32px !important`,
													},
													content: "''",
													left: 0,
													position: 'absolute',
													right: 0,
													height: {
														xs: `24px !important`,
														md: `32px !important`,
													},
													top: 0,
													zIndex: 1,
												},
											}),
											(theme) =>
												theme.applyStyles('dark', {
													backgroundColor: '#0E21A0',
												}),
										]}
									>
										<CardMedia
											component="img"
											height="270"
											image={feature.image}
											alt={feature.title}
										/>
										<CardContent
											sx={{
												p: { xs: 3, md: 3.5 },
												paddingBottom: {
													xs: '24px !important',
													md: '36px !important',
												},
												position: 'relative',
												zIndex: 2,
											}}
										>
											<Stack spacing={1.5}>
												<Typography color="#ffffff" variant="h5">
													{feature.title}
												</Typography>
												<Typography color="#ffffff">
													{feature.description}
												</Typography>
											</Stack>
										</CardContent>
									</Card>
								))}
							</Box>
						</Box>
					</Box>
				</RevealSection>
			</Stack>
		</Stack>
	);
}

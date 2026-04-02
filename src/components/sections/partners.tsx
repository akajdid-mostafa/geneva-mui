'use client';
import { ComponentPropsWithoutRef } from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import { cn } from '@/lib/utils';
import RevealSection from '@/components/ui/reveal-section';

// Put Section Headline here
const headline = `Trusted by leading brands`;

// Put Section Partners here
const partners: string[] = [
	'/global/partner-01.svg',
	'/global/partner-02.svg',
	'/global/partner-03.svg',
	'/global/partner-04.svg',
	'/global/partner-05.svg',
];

export default function Partners() {
	return (
		<Container sx={{ py: { xs: 6.25, md: 12.5 } }}>
			<Stack spacing={{ xs: 4, md: 8 }}>
				<RevealSection delay={0.1}>
					<Typography textAlign={'center'} variant="h3">
						{headline}
					</Typography>
				</RevealSection>
				<RevealSection delay={0.3}>
					<Box className="relative flex w-full flex-col items-center justify-center overflow-hidden">
						<Marquee pauseOnHover className="[--duration:20s]">
							{partners.map((partner, index) => (
								<img key={index} src={partner} alt="" />
							))}
						</Marquee>
					<Box
						sx={[
							() => ({
								background: `linear-gradient(to left, rgba(231, 233, 246, 0) 0%, rgba(231, 233, 246, 1) 100%)`,
								bottom: 0,
								position: 'absolute',
								left: 0,
								top: 0,
								width: '10%',
								zIndex: 1,
							}),
							(theme) =>
								theme.applyStyles('dark', {
									background: `linear-gradient(to left, rgba(17, 17, 17, 0) 0%,rgba(17, 17, 17, 1) 100%)`,
								}),
						]}
					/>
					<Box
						sx={[
							() => ({
								background: `linear-gradient(to right, rgba(231, 233, 246, 0) 0%, rgba(231, 233, 246, 1) 100%)`,
								bottom: 0,
								position: 'absolute',
								right: 0,
								top: 0,
								width: '10%',
								zIndex: 1,
							}),
							(theme) =>
								theme.applyStyles('dark', {
									background: `linear-gradient(to right, rgba(17, 17, 17, 0) 0%,rgba(17, 17, 17, 1) 100%)`,
								}),
						]}
					/>
					</Box>
				</RevealSection>
			</Stack>
		</Container>
	);
}

interface MarqueeProps extends ComponentPropsWithoutRef<'div'> {
	/**
	 * Optional CSS class name to apply custom styles
	 */
	className?: string;
	/**
	 * Whether to reverse the animation direction
	 * @default false
	 */
	reverse?: boolean;
	/**
	 * Whether to pause the animation on hover
	 * @default false
	 */
	pauseOnHover?: boolean;
	/**
	 * Content to be displayed in the marquee
	 */
	children: React.ReactNode;
	/**
	 * Whether to animate vertically instead of horizontally
	 * @default false
	 */
	vertical?: boolean;
	/**
	 * Number of times to repeat the content
	 * @default 4
	 */
	repeat?: number;
}

export function Marquee({
	className,
	reverse = false,
	pauseOnHover = false,
	children,
	vertical = false,
	repeat = 4,
	...props
}: MarqueeProps) {
	return (
		<div
			{...props}
			className={cn(
				'group flex overflow-hidden p-2 [--duration:40s] [--gap:1.5rem] [gap:var(--gap)]',
				{
					'flex-row': !vertical,
					'flex-col': vertical,
				},
				className,
			)}
		>
			{Array(repeat)
				.fill(0)
				.map((_, i) => (
					<div
						key={i}
						className={cn('flex shrink-0 justify-around [gap:var(--gap)]', {
							'animate-marquee flex-row': !vertical,
							'animate-marquee-vertical flex-col': vertical,
							'group-hover:[animation-play-state:paused]': pauseOnHover,
							'[animation-direction:reverse]': reverse,
						})}
					>
						{children}
					</div>
				))}
		</div>
	);
}

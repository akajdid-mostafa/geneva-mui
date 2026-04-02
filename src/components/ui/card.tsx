'use client';

import React, { useCallback, useEffect, useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'motion/react';

import { Box, Card as MuiCard } from '@mui/material';
import { useColorScheme } from '@mui/material/styles';

interface CardProps {
	children?: React.ReactNode;
	className?: string;
	gradientSize?: number;
	gradientColor?: CardColor;
	gradientOpacity?: number;
	gradientFrom?: string;
	gradientTo?: string;
	backgroundColor?: CardColor;
	borderColor?: CardColor;
	borderRadius?: number;
	fullHeight?: boolean;
}

interface CardColor {
	light: string;
	dark: string;
}

export function Card({
	children,
	gradientSize = 250,
	gradientColor = { light: '#eeeeee', dark: '#262626' },
	gradientOpacity = 1,
	backgroundColor = { light: '#ffffff', dark: '#181818' },
	borderColor = { light: '#ffffff', dark: '#444444' },
	borderRadius = 44,
	fullHeight = false,
}: CardProps) {
	const { mode } = useColorScheme();
	const cardRef = useRef<HTMLDivElement>(null);
	const mouseX = useMotionValue(-gradientSize);
	const mouseY = useMotionValue(-gradientSize);

	const handleMouseMove = useCallback(
		(e: MouseEvent) => {
			if (cardRef.current) {
				const { left, top } = cardRef.current.getBoundingClientRect();
				const clientX = e.clientX;
				const clientY = e.clientY;
				mouseX.set(clientX - left);
				mouseY.set(clientY - top);
			}
		},
		[mouseX, mouseY],
	);

	const handleMouseOut = useCallback(
		(e: MouseEvent) => {
			if (!e.relatedTarget) {
				document.removeEventListener('mousemove', handleMouseMove);
				mouseX.set(-gradientSize);
				mouseY.set(-gradientSize);
			}
		},
		[handleMouseMove, mouseX, gradientSize, mouseY],
	);

	const handleMouseEnter = useCallback(() => {
		document.addEventListener('mousemove', handleMouseMove);
		mouseX.set(-gradientSize);
		mouseY.set(-gradientSize);
	}, [handleMouseMove, mouseX, gradientSize, mouseY]);

	useEffect(() => {
		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseout', handleMouseOut);
		document.addEventListener('mouseenter', handleMouseEnter);

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseout', handleMouseOut);
			document.removeEventListener('mouseenter', handleMouseEnter);
		};
	}, [handleMouseEnter, handleMouseMove, handleMouseOut]);

	useEffect(() => {
		mouseX.set(-gradientSize);
		mouseY.set(-gradientSize);
	}, [gradientSize, mouseX, mouseY]);

	return (
		<MuiCard
			ref={cardRef}
			sx={[
				() => ({
					backgroundColor: `${backgroundColor.light} !important`,
					height: {
						md: fullHeight ? '100%' : 'auto',
					},
					boxShadow:
						mode === 'dark'
							? '0px 4px 12px 0px rgba(0, 0, 0, 0.10), 0px 24px 40px 0px rgba(0, 0, 0, 0.12)'
							: '0px 4px 12px 0px rgba(0, 0, 0, 0.10), 0px 24px 40px 0px rgba(0, 0, 0, 0.12)',
					position: 'relative',
					borderRadius: {
						xs: `${borderRadius / 2}px !important`,
						md: `${borderRadius}px !important`,
					},
					'&:after': {
						borderTopColor: borderColor.light,
						borderTopWidth: 2,
						background: 'transparent',
						borderTopLeftRadius: {
							xs: `${borderRadius / 2}px !important`,
							md: `${borderRadius}px !important`,
						},
						borderTopRightRadius: {
							xs: `${borderRadius / 2}px !important`,
							md: `${borderRadius}px !important`,
						},
						content: "''",
						left: 0,
						position: 'absolute',
						right: 0,
						height: {
							xs: `${borderRadius / 2}px !important`,
							md: `${borderRadius}px !important`,
						},
						top: 0,
						zIndex: 1,
					},
				}),
				(theme) =>
					theme.applyStyles('dark', {
						backgroundColor: `${backgroundColor.dark} !important`,
						'&:after': {
							borderTopColor: borderColor.dark,
						},
					}),
			]}
		>
			<motion.div
				className="pointer-events-none absolute inset-px rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
				style={{
					background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor[mode === 'dark' ? 'dark' : 'light']}, transparent 100%)
          `,

					height: fullHeight ? '100%' : 'auto',
					opacity: gradientOpacity,
				}}
			/>
			<Box
				className="relative"
				sx={{
					height: {
						md: fullHeight ? '100%' : 'auto',
					},
					position: 'relative',
					zIndex: 10,
				}}
			>
				{children}
			</Box>
		</MuiCard>
	);
}

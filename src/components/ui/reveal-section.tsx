'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface RevealSectionProps {
	children: ReactNode;
	delay?: number;
	direction?: 'up' | 'down' | 'left' | 'right';
	distance?: number;
	duration?: number;
}

export default function RevealSection({
	children,
	delay = 0,
	direction = 'up',
	distance = 50,
	duration = 0.6,
}: RevealSectionProps) {
	const getInitialPosition = () => {
		switch (direction) {
			case 'up':
				return { y: distance, opacity: 0 };
			case 'down':
				return { y: -distance, opacity: 0 };
			case 'left':
				return { x: distance, opacity: 0 };
			case 'right':
				return { x: -distance, opacity: 0 };
			default:
				return { y: distance, opacity: 0 };
		}
	};

	const getFinalPosition = () => {
		switch (direction) {
			case 'up':
			case 'down':
				return { y: 0, opacity: 1 };
			case 'left':
			case 'right':
				return { x: 0, opacity: 1 };
			default:
				return { y: 0, opacity: 1 };
		}
	};

	return (
		<motion.div
			initial={getInitialPosition()}
			whileInView={getFinalPosition()}
			viewport={{ once: true, margin: '-100px' }}
			transition={{
				duration,
				delay,
				ease: [0.25, 0.1, 0.25, 1],
			}}
		>
			{children}
		</motion.div>
	);
}
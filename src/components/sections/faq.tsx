'use client';

import { useState } from 'react';
import {
	Button,
	CardContent,
	Collapse,
	Container,
	Stack,
	Typography,
} from '@mui/material';
import { IconPlus as IconExpand } from '@tabler/icons-react';
import { Card } from '@/components/ui/card';
import RevealSection from '@/components/ui/reveal-section';

// Put Section Headline here
const headline = `FAQ`;

// Put Section SubHeadline here
const subHeadline = `Questions & Answers`;

// Put Section Items here
const items: Item[] = [
	{
		question: 'What is Geneva?',
		answer: `Geneva is a modern, responsive, and accessible React-based UI framework that helps you build beautiful and functional web applications.`,
	},
	{
		question: 'What are the main features of Geneva?',
		answer: `Geneva is a modern, responsive, and accessible React-based UI framework that helps you build beautiful and functional web applications.`,
	},
	{
		question: 'Do you offer support?',
		answer: `Yes, we offer support for our customers. We are available 24/7 to help you with any questions or issues you may have.`,
	},
	{
		question: 'What is the pricing for Geneva?',
		answer: `The pricing for Geneva starts at $9 per month.`,
	},
	{
		question: 'What is the refund policy for Geneva?',
		answer: `The refund policy for Geneva is 14 days from the purchase date.`,
	},
];

interface Item {
	question: string;
	answer: string;
}

export default function Faq() {
	return (
		<Container id="faq" maxWidth="md" sx={{ py: { xs: 5, md: 12.5 } }}>
			<RevealSection delay={0.1} direction="up">
				<Stack spacing={{ xs: 4, md: 8 }}>
				<Stack spacing={1.5}>
					<Typography
						color="accent"
						textAlign="center"
						sx={{ whiteSpace: 'pre-line' }}
						variant="subtitle1"
					>
						{headline}
					</Typography>
					<Typography textAlign="center" variant="h2">
						{subHeadline}
					</Typography>
				</Stack>
				<Stack spacing={2}>
					{items.map((item) => (
						<FaqItem
							key={item.question}
							question={item.question}
							answer={item.answer}
						/>
					))}
				</Stack>
				</Stack>
			</RevealSection>
		</Container>
	);
}

function FaqItem({ question, answer }: Item) {
	const [open, setOpen] = useState(false);
	return (
		<Card
			backgroundColor={{ light: 'rgba(255, 255, 255, 0.5)', dark: '#282828' }}
			borderColor={{ light: '#fff', dark: '#555' }}
			borderRadius={24}
			gradientColor={{ light: '#eee', dark: '#555' }}
			gradientOpacity={0.2}
			gradientSize={200}
		>
			<CardContent
				sx={{
					px: { xs: 3, md: 4 },
					py: { xs: 2, md: 3 },
					paddingBottom: { xs: '16px !important', md: '24px !important' },
				}}
			>
				<Stack
					alignItems="center"
					direction="row"
					justifyContent="space-between"
					spacing={2}
				>
					<Typography variant="h5">{question}</Typography>
					<Button
						color="secondary"
						onClick={() => setOpen(!open)}
						sx={{
							px: 2,
							minWidth: 'auto',
							transform: open ? 'rotate(225deg)' : 'rotate(0deg)',
							transition: 'transform 0.3s ease-in-out',
						}}
					>
						<IconExpand size={24} />
					</Button>
				</Stack>
				<Collapse in={open} timeout="auto">
					<Typography color="textSecondary" sx={{ mt: 2 }} variant="subtitle1">
						{answer}
					</Typography>
				</Collapse>
			</CardContent>
		</Card>
	);
}

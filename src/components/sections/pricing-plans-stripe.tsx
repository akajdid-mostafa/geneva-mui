'use client';
import { useState } from 'react';
import {
	Box,
	Button,
	CardContent,
	Chip,
	Container,
	Grid,
	Stack,
	ToggleButtonGroup,
	ToggleButton,
	Typography,
} from '@mui/material';
import { IconCheck, IconX, IconArrowRight } from '@tabler/icons-react';

import { Card } from '@/components/ui/card';
import { loadStripe } from '@stripe/stripe-js';
import RevealSection from '@/components/ui/reveal-section';

const headline = `Our Pricing`;
const subHeadline = `Geneva offers simple plans with powerful features.
No hidden fees, no surprises.`;
const currency = 'USD';

const pricingPlans: PricingPlan[] = [
	{
		title: 'Beginner',
		monthlyPrice: 9.99,
		yearlyPrice: 99.99,
		includedFeatures: [
			`AI-Powered Financial Insights`,
			`Seamless Multi-Account Management`,
			`Advanced Bank-Level Security`,
		],
		excludedFeatures: [
			`Flexible Custom Budgeting Tools`,
			`Detailed Expense Tracking Analytics`,
			`24/7 Priority Customer Support`,
		],
		stripePriceIdMonthly: 'price_1RjSYmIcddwPwkgd5koW2r2I',
		stripePriceIdYearly: 'price_1RjSZSIcddwPwkgd96ab8sYh',
	},
	{
		title: 'Professional',
		monthlyPrice: 19.99,
		yearlyPrice: 199.99,
		includedFeatures: [
			`AI-Powered Financial Insights`,
			`Seamless Multi-Account Management`,
			`Advanced Bank-Level Security`,
			`Flexible Custom Budgeting Tools`,
		],
		excludedFeatures: [
			`Detailed Expense Tracking Analytics`,
			`24/7 Priority Customer Support`,
		],
		popular: true,
		stripePriceIdMonthly: 'price_1RjSZrIcddwPwkgddy8FqEAq',
		stripePriceIdYearly: 'price_1RjSaDIcddwPwkgdv1WXLP0x',
	},
	{
		title: 'Business',
		monthlyPrice: 29.99,
		yearlyPrice: 299.99,
		includedFeatures: [
			`AI-Powered Financial Insights`,
			`Seamless Multi-Account Management`,
			`Advanced Bank-Level Security`,
			`Flexible Custom Budgeting Tools`,
			`Detailed Expense Tracking Analytics`,
			`24/7 Priority Customer Support`,
		],
		excludedFeatures: [],
		stripePriceIdMonthly: 'price_1RjSalIcddwPwkgdmszk5oez',
		stripePriceIdYearly: 'price_1RjSazIcddwPwkgdKb23gPO2',
	},
];

interface PricingPlan {
	title: string;
	monthlyPrice?: number;
	yearlyPrice?: number;
	includedFeatures: string[];
	excludedFeatures?: string[];
	popular?: boolean;
	stripePriceIdMonthly?: string;
	stripePriceIdYearly?: string;
}

export default function PricingPlans() {
	const [planType, setPlanType] = useState<'monthly' | 'yearly'>('monthly');

	return (
		<Container id="pricing" sx={{ py: { xs: 6.25, md: 12.5 } }}>
			<RevealSection delay={0.1} direction="up">
				<Stack spacing={{ xs: 6, md: 8 }}>
					<Box>
						<Grid container spacing={{ xs: 4, md: 4 }} alignItems="center">
							<Grid size={{ xs: 12, md: 'grow' }}>
								<Stack spacing={1.5}>
									<Typography
										sx={{ textAlign: { xs: 'center', md: 'left' } }}
										variant="h2"
									>
										{headline}
									</Typography>
									<Typography
										color="textSecondary"
										component={'p'}
										sx={{
											textAlign: { xs: 'center', md: 'left' },
											whiteSpace: 'pre-line',
										}}
										variant="h6"
									>
										{subHeadline}
									</Typography>
								</Stack>
							</Grid>
							<Grid size={{ xs: 12, md: 'auto' }}>
								<Stack
									direction="row"
									alignItems="center"
									justifyContent={{ xs: 'center', md: 'flex-end' }}
								>
									<ToggleButtonGroup
										exclusive
										onChange={(event, newValue) => setPlanType(newValue)}
										value={planType}
									>
										<ToggleButton value="monthly">
											<Box sx={{ px: { md: 3.25 } }}>{`Monthly`}</Box>
										</ToggleButton>
										<ToggleButton value="yearly">
											<Stack direction="row" alignItems="center" spacing={1}>
												<Box>{`Yearly`}</Box>
												<Chip color="accent" label="Save 20%" size="small" />
											</Stack>
										</ToggleButton>
									</ToggleButtonGroup>
								</Stack>
							</Grid>
						</Grid>
					</Box>
					<Box>
						<Grid container spacing={{ xs: 3, md: 4 }}>
							{pricingPlans.map((plan, index) => (
								<Grid key={index} size={{ xs: 12, md: 4 }}>
									<PricingPlanCard
										plan={plan}
										planType={planType}
										currency={currency}
									/>
								</Grid>
							))}
						</Grid>
					</Box>
				</Stack>
			</RevealSection>
		</Container>
	);
}

function PricingPlanCard({
	plan,
	planType,
	currency,
}: {
	plan: PricingPlan;
	planType: 'monthly' | 'yearly';
	currency: string;
}) {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const formattedMonthlyPrice =
		plan.monthlyPrice !== undefined && plan.monthlyPrice !== null
			? new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: currency,
				}).format(plan.monthlyPrice)
			: null;

	const formattedYearlyPrice =
		plan.yearlyPrice !== undefined && plan.yearlyPrice !== null
			? new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: currency,
				}).format(plan.yearlyPrice)
			: null;

	const handleCheckout = async () => {
		setLoading(true);
		setError(null);
		const priceId =
			planType === 'monthly'
				? plan.stripePriceIdMonthly
				: plan.stripePriceIdYearly;
		if (!priceId) {
			setError('No price ID available for this plan.');
			setLoading(false);
			return;
		}
		try {
			const res = await fetch('/api/create-checkout-session', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ priceId }),
			});
			const data = await res.json();
			if (!res.ok)
				throw new Error(data.error || 'Failed to create checkout session');
			const stripe = await loadStripe(
				process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
			);
			if (!stripe) throw new Error('Stripe failed to load');
			await stripe.redirectToCheckout({ sessionId: data.sessionId });
		} catch (err: unknown) {
			const message = err instanceof Error ? err.message : 'An error occurred';
			setError(message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Card
			backgroundColor={{ light: 'rgba(255, 255, 255, 0.5)', dark: '#282828' }}
			borderColor={{ light: 'rgba(255, 255, 255, 1)', dark: '#444' }}
			borderRadius={36}
		>
			<CardContent
				sx={{
					p: { xs: 3, md: 4 },
					paddingBottom: { xs: '24px !important', md: '32px !important' },
				}}
			>
				<Stack spacing={{ xs: 2, md: 3 }}>
					<Stack spacing={1}>
						<Stack
							alignItems="center"
							direction="row"
							justifyContent="space-between"
							spacing={2}
						>
							<Typography variant="subtitle1">{plan.title}</Typography>
							{plan.popular && <Chip color="accent" label="Popular" />}
						</Stack>
						<Typography variant="h3">
							{planType === 'monthly' && <>{formattedMonthlyPrice}</>}
							{planType === 'yearly' && <>{formattedYearlyPrice}</>}
						</Typography>
						<Typography sx={{ fontWeight: 600 }} variant="body1">
							{planType === 'monthly' && <>{'Monthly'}</>}
							{planType === 'yearly' && <>{'Yearly'}</>}
						</Typography>
					</Stack>
					<Box
						sx={[
							() => ({
								background: 'rgba(200, 209, 216, 1)',
								height: 2,
							}),
							(theme) =>
								theme.applyStyles('dark', {
									background: '#111',
									boxShadow: '0px 2px 0px 0px #444',
									height: 2,
								}),
						]}
					/>
					<Stack spacing={{ xs: 3, md: 5 }}>
						<Stack spacing={2}>
							{plan.includedFeatures.map((feature, index) => (
								<Stack
									alignItems="start"
									direction="row"
									key={index}
									spacing={1.5}
								>
									<Box sx={{ color: 'accent.main', pt: 0 }}>
										<IconCheck size={24} />
									</Box>
									<Typography variant="body1">{feature}</Typography>
								</Stack>
							))}
							{plan.excludedFeatures && plan.excludedFeatures.length > 0 && (
								<>
									{plan.excludedFeatures.map((feature, index) => (
										<Stack
											alignItems="start"
											direction="row"
											key={index}
											spacing={1.5}
											sx={{ opacity: 0.5 }}
										>
											<Box sx={{ color: 'disabled.main', pt: 0 }}>
												<IconX size={24} />
											</Box>
											<Typography variant="body1">{feature}</Typography>
										</Stack>
									))}
								</>
							)}
						</Stack>

						<Button
							disabled={loading}
							endIcon={<IconArrowRight size={24} />}
							onClick={handleCheckout}
						>
							{loading ? 'Redirecting...' : 'Get Started'}
						</Button>
						{error && (
							<Typography color="error" variant="body2" sx={{ mt: 1 }}>
								{error}
							</Typography>
						)}
					</Stack>
				</Stack>
			</CardContent>
		</Card>
	);
}

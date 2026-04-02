import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

let stripe: Stripe | null = null;

function getStripe(): Stripe {
	const key = process.env.STRIPE_SECRET_KEY;
	if (!key) {
		throw new Error('STRIPE_SECRET_KEY is not configured');
	}
	if (!stripe) {
		stripe = new Stripe(key);
	}
	return stripe;
}

export async function POST(req: NextRequest) {
	try {
		if (!process.env.STRIPE_SECRET_KEY) {
			return NextResponse.json(
				{
					error:
						'Checkout is not configured yet. Add STRIPE_SECRET_KEY in your environment when you are ready to accept payments.',
					code: 'STRIPE_NOT_CONFIGURED',
				},
				{ status: 503 },
			);
		}

		const { priceId } = await req.json();
		if (!priceId) {
			return NextResponse.json({ error: 'Missing priceId' }, { status: 400 });
		}

		const session = await getStripe().checkout.sessions.create({
			payment_method_types: ['card'],
			mode: 'subscription',
			line_items: [
				{
					price: priceId,
					quantity: 1,
				},
			],
			success_url: `${req.nextUrl.origin}/?success=true`,
			cancel_url: `${req.nextUrl.origin}/#pricing?canceled=true`,
		});

		return NextResponse.json({ sessionId: session.id });
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		return NextResponse.json({ error: message }, { status: 500 });
	}
}

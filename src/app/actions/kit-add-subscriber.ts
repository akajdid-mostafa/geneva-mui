'use server';

if (!process.env.KIT_API_KEY) {
	console.log('KIT_API_KEY is not set');
}

export async function addSubscriber(formData: FormData): Promise<{
	type: 'success' | 'error';
	message: string;
}> {
	try {
		const email = formData.get('email');

		// validate form data
		if (!email) {
			return {
				type: 'error',
				message: 'Please fill in your email.',
			};
		}

		const options = {
			method: 'POST',
			headers: {
				'X-Kit-Api-Key': `${process.env.KIT_API_KEY}`,
				'Content-Type': 'application/json',
			},
			body: `{"email_address":"${email}","state":"active"}`,
		};

		const response = await fetch('https://api.kit.com/v4/subscribers', options);
		if (!response.ok) {
			return {
				type: 'error',
				message: 'Something went wrong. Please try again.',
			};
		}

		return {
			type: 'success',
			message: 'You have been subscribed to our newsletter.',
		};
	} catch (error) {
		console.log(error);
		return {
			type: 'error',
			message: 'Something went wrong. Please try again.',
		};
	}
}

'use server';

import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
	// throw new Error('RESEND_API_KEY or CONTACT_EMAIL is not set');
	console.log('RESEND_API_KEY or CONTACT_EMAIL is not set');
}
const resend = new Resend(process.env.RESEND_API_KEY || 'DUMMY_KEY');
const contactEmail = process.env.CONTACT_EMAIL || null;
const contactName = process.env.CONTACT_NAME || null;
export async function sendMessage(formData: FormData): Promise<{
	type: 'success' | 'error';
	message: string;
}> {
	try {
		const name = formData.get('name');
		const email = formData.get('email');
		const subject = formData.get('subject');
		const message = formData.get('message');

		// validate form data
		if (!name || !email || !subject || !message) {
			return {
				type: 'error',
				message: 'Please fill in all fields.',
			};
		}

		if (!contactEmail) {
			return {
				type: 'error',
				message: 'Something went wrong. Please try again later.',
			};
		}
		// send client message to contact email
		const data = await resend.emails.send({
			from: `${contactEmail}`,
			to: contactEmail,
			replyTo: email.toString(),
			subject: `New Contact Form Submission: ${subject}`,
			html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
		});

		if (data.error) {
			console.error(data.error);
			return {
				type: 'error',
				message: 'Something went wrong. Please try again later.',
			};
		}

		// send confirmation email to client
		const confirmationData = await resend.emails.send({
			from: `${contactName} <${contactEmail}>`,
			to: email as string,
			subject: `Thank you for your message`,
			html: `
        <p>Thank you for your message. We will get back to you as soon as possible.</p>
        <p>This is an automated response. Please do not reply to this email.</p>
        <p>Best regards, ${contactName}</p>
      `,
		});

		if (confirmationData.error) {
			console.error(confirmationData.error);
			return {
				type: 'error',
				message: 'Something went wrong. Please try again later.',
			};
		}

		return {
			type: 'success',
			message: 'Message sent successfully.',
		};
	} catch (error) {
		console.log(error);
		return {
			type: 'error',
			message: 'Something went wrong. Please try again.',
		};
	}
}

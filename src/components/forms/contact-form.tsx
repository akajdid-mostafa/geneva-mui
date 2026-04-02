'use client';
import { useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import {
	Button,
	FormControl,
	FormLabel,
	OutlinedInput,
	Stack,
} from '@mui/material';
import { IconArrowRight as IconSend } from '@tabler/icons-react';

import { sendMessage } from '@/app/actions/resend-send-message';

export default function ContactForm() {
	const formRef = useRef<HTMLFormElement>(null);
	const { mutate: send, isPending } = useMutation({
		mutationFn: sendMessage,
		onSuccess: (result) => {
			if (result.type === 'error') {
				toast.error(result.message.toString());
				return;
			}
			toast.success(result.message.toString());
			formRef.current?.reset();
		},
		onError(error) {
			toast.error(error.message.toString());
		},
	});

	const handleSubmit = (formData: FormData) => {
		send(formData);
	};

	return (
		<form ref={formRef} action={handleSubmit}>
			<Stack spacing={3}>
				<Stack spacing={1}>
					<FormControl disabled={isPending} required>
						<FormLabel htmlFor="name">{`Name`}</FormLabel>
						<OutlinedInput id="name" name="name" required />
					</FormControl>
				</Stack>
				<FormControl disabled={isPending} required>
					<FormLabel htmlFor="email">{`Email`}</FormLabel>
					<OutlinedInput id="email" name="email" type="email" required />
				</FormControl>
				<FormControl disabled={isPending} required>
					<FormLabel htmlFor="subject">{`Subject`}</FormLabel>
					<OutlinedInput id="subject" name="subject" type="text" required />
				</FormControl>
				<FormControl disabled={isPending} required>
					<FormLabel htmlFor="message">{`Message`}</FormLabel>
					<OutlinedInput
						id="message"
						multiline
						name="message"
						rows={3}
						type="text"
						required
					/>
				</FormControl>
				<Button
					disabled={isPending}
					endIcon={<IconSend />}
					fullWidth
					loading={isPending}
					type="submit"
				>
					{`Send Message`}
				</Button>
			</Stack>
		</form>
	);
}

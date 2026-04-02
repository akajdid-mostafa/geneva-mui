'use client';
import { useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { Button, Grid, OutlinedInput } from '@mui/material';
import { styled } from '@mui/material/styles';

import { IconMail } from '@tabler/icons-react';

import { addSubscriber } from '@/app/actions/kit-add-subscriber';

// Put Email placeholder here
const emailPlaceholder = `Enter your email`;

// Put Subscribe button label here
const subscribeLabel = `Subscribe`;

export default function SubscribeForm() {
	const formRef = useRef<HTMLFormElement>(null);
	const { mutate: send, isPending } = useMutation({
		mutationFn: addSubscriber,
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
			<Grid alignItems="center" container spacing={{ md: 2.5 }}>
				<Grid size={{ xs: 12, md: 'grow' }}>
					<Input
						disabled={isPending}
						name="email"
						fullWidth
						placeholder={emailPlaceholder}
						startAdornment={<IconMail />}
					/>
				</Grid>
				<Grid size={{ xs: 12, md: 'auto' }}>
					<Button
						color="accent"
						disabled={isPending}
						loading={isPending}
						fullWidth
						type="submit"
					>
						{subscribeLabel}
					</Button>
				</Grid>
			</Grid>
		</form>
	);
}

const Input = styled(OutlinedInput)(({ theme }) => [
	{
		backgroundColor: '#fff',
		'&.Mui-focused': {
			'& .MuiOutlinedInput-notchedOutline': {
				borderColor: '#fff !important',
				boxShadow: '0px 0px 20px 0px rgba(255, 255, 255, 0.5) !important',
			},
		},
		'&:hover': {
			'& .MuiOutlinedInput-notchedOutline': {
				borderColor: '#fff !important',
			},
		},
		'& .MuiOutlinedInput-notchedOutline': {
			borderColor: '#fff',
		},
		'& .MuiOutlinedInput-input': {
			color: '#000',
			'&::placeholder': {
				color: '#888 !important',
				opacity: 1,
			},
			'&::-webkit-input-placeholder': {
				color: '#888 !important',
				opacity: 1,
			},
		},
	},
	theme.applyStyles('dark', {
		backgroundColor: 'rgba(34, 34, 34, 1)',
		'&.Mui-focused': {
			'& .MuiOutlinedInput-notchedOutline': {
				borderColor: '#fff !important',
				boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.5) !important',
			},
		},
		'&:hover': {
			'& .MuiOutlinedInput-notchedOutline': {
				borderColor: '#fff !important',
			},
		},
		'& .MuiOutlinedInput-notchedOutline': {
			borderColor: '#444444',
		},
		'& .MuiOutlinedInput-input': {
			color: '#fff',
			'&::placeholder': {
				color: '#888 !important',
				opacity: 1,
			},
			'&::-webkit-input-placeholder': {
				color: '#888 !important',
				opacity: 1,
			},
		},
	}),
]);

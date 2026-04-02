import {
	Box,
	Container,
	CardContent,
	Grid,
	Stack,
	Typography,
} from '@mui/material';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import RevealSection from '@/components/ui/reveal-section';

// Put content here
const content = `This eCommerce SaaS has transformed my store! It's user-friendly and has boosted my sales. Highly recommend it!`;
const name = `Julie George`;
const job = `CEO & CO Founder of MicLife`;

export default function Testimonials() {
	return (
		<Container sx={{ py: { xs: 6.25, md: 12.5 } }}>
			<RevealSection delay={0.1} direction="up">
				<Card
					backgroundColor={{ light: '#0E21A0', dark: '#0E21A0' }}
					borderColor={{ light: '#3949B1', dark: '#3949B1' }}
					gradientOpacity={0.6}
					gradientColor={{ light: '#3949B1', dark: '#3949B1' }}
				>
					<CardContent sx={{ pr: { xs: null, lg: 2.5 } }}>
						<Grid container spacing={{ xs: 6, lg: 3 }}>
							<Grid size={{ xs: 12, md: 'auto' }} sx={{ pt: { lg: 2 } }}>
								<Box sx={{ width: { xs: '100%', md: 272 } }}>
									<Card
										borderRadius={20}
										borderColor={{
											light: 'rgba(255, 255, 255, 0.50)',
											dark: '#555',
										}}
									>
										<Box
											className="aspect-272/331"
											sx={{ position: 'relative', width: '100%' }}
										>
											<Image
												src="/global/testimonials-01.png"
												style={{ objectFit: 'cover' }}
												alt=""
												fill
											/>
										</Box>
									</Card>
								</Box>
							</Grid>
							<Grid size={{ xs: 12, md: 'grow' }}>
								<Box sx={{ display: { xs: 'block', lg: 'none' } }}>
									<Stack spacing={4}>
										<Typography
											color="#ffffff"
											sx={{ lineHeight: 1.5 }}
											variant="h4"
										>{`"${content}"`}</Typography>
										<Stack spacing={1}>
											<Typography color="#ffffff" variant="h5">
												{name}
											</Typography>
											<Typography color="#ffffff" variant="subtitle2">
												{job}
											</Typography>
										</Stack>
									</Stack>
								</Box>
								<Box
									sx={{
										display: { xs: 'none', lg: 'block' },
										position: 'relative',
										pb: 22,
									}}
								>
									<Box sx={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
										<QuoteContainer />
									</Box>
									<Stack alignItems={'end'}>
										<Box
											sx={{
												p: 13.5,
												pt: 10,
												pb: 15,
												position: 'relative',
												zIndex: 1,
											}}
										>
											<Typography
												color="#ffffff"
												variant="h3"
											>{`"${content}"`}</Typography>
										</Box>
										<Stack
											sx={{
												p: 1,
												pt: 0,
												position: 'relative',
												width: '56%',
												zIndex: 1,
											}}
										>
											<Stack spacing={1} sx={{ p: 5, pt: 3.5 }}>
												<Typography color="#ffffff" variant="h5">
													{name}
												</Typography>
												<Typography color="#ffffff" variant="subtitle2">
													{job}
												</Typography>
											</Stack>
										</Stack>
									</Stack>
								</Box>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</RevealSection>
		</Container>
	);
}

function QuoteContainer() {
	return (
		<svg
			width="896"
			height="751"
			viewBox="0 0 896 751"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g filter="url(#filter0_dd_2036_2007)">
				<path
					d="M397.004 436C397.004 409.49 375.513 388 349.004 388H397.004V436Z"
					fill="#3949B1"
				/>
				<path
					d="M40 36C40 24.9543 48.9543 16 60 16H836C847.046 16 856 24.9543 856 36V388H60C48.9543 388 40 379.046 40 368V36Z"
					fill="#3949B1"
				/>
				<path
					d="M397 388H856V508C856 519.046 847.046 528 836 528H417C405.954 528 397 519.046 397 508V388Z"
					fill="#3949B1"
				/>
				<path
					d="M168.426 428.381C178.174 428.381 184.801 437.32 184.801 451.278C184.91 489.075 184.856 526.95 184.746 564.747C184.746 577.764 182.117 590.075 178.776 601.994C171.219 629.283 161.033 654.455 148.437 677.666C145.753 682.606 142.412 686.057 138.03 686.841C128.939 688.487 121.382 677.039 123.024 664.101C125.16 647.476 125.325 630.852 123.354 614.228C123.134 612.502 122.861 610.777 122.532 608.738H56.1016C46.5724 608.738 40.0001 599.642 40 586.076V450.416C40.0548 437.634 46.8459 428.381 56.2656 428.381H168.426ZM341.5 428C350.153 428.078 356.89 437.018 356.89 449.643C357.054 488.537 357.054 527.432 356.78 566.326C356.671 579.971 353.494 592.909 349.825 605.456C342.706 629.922 333.505 652.662 322.442 673.913C321.402 675.952 320.306 677.834 319.156 679.638C314.72 686.538 308.148 688.577 302.727 684.892C296.976 680.971 294.183 672.659 295.169 662.936C295.771 657.211 296.593 651.408 296.593 645.684C296.593 633.529 296.044 621.453 295.716 608.593H228.628C218.551 608.593 212.254 599.81 212.254 585.303V450.191C212.254 437.41 218.661 428.078 227.588 428.078H341.61L341.5 428Z"
					fill="#3949B1"
				/>
			</g>
			<defs>
				<filter
					id="filter0_dd_2036_2007"
					x="0"
					y="0"
					width="896"
					height="751"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="24" />
					<feGaussianBlur stdDeviation="20" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_2036_2007"
					/>
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="4" />
					<feGaussianBlur stdDeviation="6" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
					/>
					<feBlend
						mode="normal"
						in2="effect1_dropShadow_2036_2007"
						result="effect2_dropShadow_2036_2007"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect2_dropShadow_2036_2007"
						result="shape"
					/>
				</filter>
			</defs>
		</svg>
	);
}

import { Container, Stack, Typography } from '@mui/material';

export default function Page() {
	return (
		<Container maxWidth="md" sx={{ py: { xs: 5, md: 10 } }}>
			<Stack spacing={3}>
				<Stack spacing={1}>
					<Typography variant="h2">{'Terms of Use'}</Typography>
					<Typography color="textSecondary" variant="body1">
						{'Last updated: 12 July 2025'}
					</Typography>
				</Stack>
				<Typography>
					{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia felis lorem, eget consectetur dui lacinia ac. Fusce ultrices nec libero in dapibus. Fusce condimentum diam vel eros cursus, eu vulputate magna commodo. Sed convallis lectus eget risus tincidunt accumsan. Sed faucibus viverra odio, quis sodales justo condimentum eu. `}
				</Typography>
				<Typography>
					{`Nunc congue sed lorem commodo sodales. Suspendisse a tristique tellus. Maecenas porta quam elit, vitae tristique nisl viverra quis. Integer sit amet sapien id urna rhoncus lobortis. Cras tincidunt dui vel posuere eleifend. Vivamus finibus velit non varius convallis. 
Aliquam dignissim ultricies velit. Sed eros lectus, imperdiet sit amet nisi vel, elementum consequat massa. Nam augue justo, condimentum nec blandit id, blandit at eros. Quisque vel augue eu quam faucibus mattis.`}
				</Typography>

				<Typography>
					{`Fusce commodo massa in lacus facilisis laoreet. Ut at feugiat sem. Fusce a elit eu urna hendrerit mattis. In venenatis nulla diam, vitae rhoncus massa lacinia a. Sed ornare, ex id sodales luctus, turpis purus tincidunt urna, at dapibus dui ante eu lacus. Aliquam ut tempus ante. Donec consequat, velit quis cursus laoreet, metus massa feugiat sapien, sodales commodo erat mi sed libero.
Suspendisse sit amet feugiat est, at commodo erat. Curabitur convallis pharetra ex, et condimentum justo pretium sit amet. Vestibulum felis eros, cursus at pretium in, auctor ac tellus. Nunc eget orci consequat, mollis justo vitae, condimentum ex. Praesent nec ex porta eros mattis tempor. Quisque bibendum lobortis euismod. `}
				</Typography>

				<Typography>
					{`Suspendisse eleifend finibus tortor, a euismod turpis tincidunt sed. Phasellus pellentesque ex a orci blandit iaculis. In erat elit, vestibulum ac magna at, luctus ornare mi. Donec ut ipsum at nisi facilisis ultrices. Aliquam erat volutpat. Vestibulum leo ligula, mattis eget elit a, commodo eleifend nisi. Pellentesque euismod, lorem et facilisis volutpat, odio quam congue nisi, eu faucibus est nulla vel nunc. Aliquam dapibus malesuada metus vel finibus.`}
				</Typography>

				<Typography>
					{`Donec enim turpis, iaculis quis nibh sed, eleifend venenatis leo. Aenean vitae odio dignissim, consectetur justo vitae, volutpat odio. Fusce vel orci sed justo pellentesque convallis. Quisque enim odio, fringilla non odio a, fermentum porta tortor.`}
				</Typography>

				<Typography>
					{`Fusce malesuada, risus vel mollis dapibus, libero turpis congue quam, eu consequat erat velit at sem. Cras eget venenatis lectus. Suspendisse tempor, orci vitae mattis molestie, eros est interdum libero, quis maximus erat massa sit amet leo. Aliquam felis risus, fermentum et magna vel, placerat semper eros. Sed eu odio et diam tristique tincidunt. Quisque egestas ligula sed risus lacinia iaculis. Suspendisse justo velit, tempus ut dictum ac, consectetur a purus.`}
				</Typography>
			</Stack>
		</Container>
	);
}

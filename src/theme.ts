'use client';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Palette {
		accent: Palette['primary'];
	}

	interface PaletteOptions {
		accent: PaletteOptions['primary'];
	}
}

declare module '@mui/material/Button' {
	interface ButtonPropsColorOverrides {
		accent: true;
	}
}
declare module '@mui/material/Chip' {
	interface ChipPropsColorOverrides {
		accent: true;
	}
}
declare module '@mui/material/ToggleButtonGroup' {
	interface ToggleButtonGroupPropsColorOverrides {
		accent: true;
	}
}

let theme = createTheme({
	cssVariables: {
		colorSchemeSelector: 'class',
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1318,
			xl: 1536,
		},
	},
	colorSchemes: {
		light: {
			palette: {
				accent: {
					main: '#FF4B91',
					contrastText: '#ffffff',
				},
				primary: {
					main: 'rgba(14, 33, 160, 1)',
				},
				secondary: {
					main: 'rgba(255, 255, 255, 0.5)',
				},
				success: {
					main: '#99FF82',
				},
				text: {
					primary: 'rgba(16, 16, 30, 1)',
					secondary: 'rgba(75, 75, 101, 1)',
				},
				background: {
					default: 'rgba(231, 233, 246, 1)',
					paper: 'rgba(231, 233, 246, 1)',
				},
			},
		},
		dark: {
			palette: {
				accent: {
					main: '#99FF82',
					contrastText: '#10101E',
				},
				primary: {
					main: '#DDDDDD',
					light: '#0E21A0',
					dark: '#DDDDDD',
				},
				secondary: {
					main: '#333333',
					light: 'rgba(255, 255, 255, 0.5)',
					dark: '#333333',
				},
				success: {
					main: '#99FF82',
				},
				text: {
					primary: '#FFFFFF',
					secondary: '#A0A0AE',
				},
				background: {
					default: 'rgba(17, 17, 17, 1)',
					paper: 'rgba(17, 17, 17, 1)',
				},
			},
		},
	},
	typography: {
		fontFamily: 'var(--font-mona-sans)',
		allVariants: {
			fontWeight: 600,
		},
		h1: {
			fontSize: '4rem',
		},
		h2: {
			fontSize: '3rem',
		},
		h3: {
			fontSize: '2.5rem',
		},
		h4: {
			fontSize: '1.875rem',
		},
		h5: {
			fontSize: '1.5rem',
		},
		h6: {
			fontSize: '1.25rem',
		},
		subtitle1: {
			fontSize: '1.375rem',
		},
		subtitle2: {
			fontSize: '1.125rem',
			fontWeight: 500,
		},
		body1: {
			fontWeight: 500,
		},
		body2: {
			fontWeight: 500,
		},
	},
});

theme = createTheme(theme, {
	components: {
		MuiAvatar: {
			styleOverrides: {
				root: {
					fontWeight: 600,
					width: 56,
					height: 56,
				},
			},
		},
		MuiBackdrop: {
			styleOverrides: {
				root: {
					backgroundColor: 'rgba(0, 0, 0, 0.5)',
					backdropFilter: 'blur(10px)',
				},
			},
		},
		MuiButton: {
			defaultProps: {
				variant: 'contained',
			},
			styleOverrides: {
				root: {
					boxShadow:
						'0px 4px 12px 0px rgba(0, 0, 0, 0.10), 0px 24px 40px 0px rgba(0, 0, 0, 0.12)',
					borderRadius: '50vh',
					textTransform: 'none',
					'&.MuiButton-containedPrimary:not(.Mui-disabled)': {
						borderTop: '2px solid #6773C3',
						...theme.applyStyles('dark', {
							borderTop: '2px solid #FFF',
						}),
					},
					'&.MuiButton-containedSecondary:not(.Mui-disabled)': {
						borderTop: '2px solid #FFF',
						...theme.applyStyles('dark', {
							borderTop: '2px solid #555555',
						}),
					},
					'&.MuiButton-containedAccent:not(.Mui-disabled)': {
						borderTop: '2px solid #FF8EBA',
						...theme.applyStyles('dark', {
							backgroundColor: '#DDDDDD',
							borderTop: '2px solid #FFFFFF',
						}),
					},
				},
				sizeMedium: {
					fontSize: 20,
					height: 56,
					paddingTop: 2,
					paddingLeft: 24,
					paddingRight: 24,
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					backgroundColor: 'rgba(255, 255, 255, 0.5)',
					backgroundImage: 'none',
					borderRadius: '36px',
					boxShadow: '0px 24px 40px 0px rgba(0, 0, 0, 0.12)',
					...theme.applyStyles('dark', {
						boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.1)',
						backgroundColor: '#181818',
					}),
				},
			},
		},
		MuiCardContent: {
			styleOverrides: {
				root: {
					padding: '60px',
					paddingBottom: '60px !important',
					[theme.breakpoints.down('md')]: {
						padding: 40,
						paddingBottom: '40px !important',
					},
				},
			},
		},
		MuiChip: {
			styleOverrides: {
				root: {
					borderRadius: '8px',
					borderWidth: 2,
					fontSize: '12px',
					fontWeight: 600,
					lineHeight: 1,
					textTransform: 'uppercase',
				},
				sizeSmall: {
					borderWidth: 1,
					fontSize: '10px',
					fontWeight: 700,
				},
			},
		},
		MuiDialog: {
			defaultProps: {
				fullWidth: true,
			},
			styleOverrides: {
				root: {
					borderRadius: '36px',
				},
				paper: {
					backgroundImage: 'none',
					borderRadius: '36px',
					boxShadow: 'none',
				},
			},
		},
		MuiFormControl: {
			styleOverrides: {
				root: {
					gap: 8,
				},
			},
		},
		MuiFormLabel: {
			styleOverrides: {
				root: {
					color: 'rgba(102, 102, 102, 1)',
					paddingLeft: 12,
					paddingRight: 12,
				},
				asterisk: {
					color: 'rgba(240, 68, 56, 1)',
					marginLeft: 4,
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					borderWidth: 0,
					borderRadius: '28px',
					paddingLeft: 10,
					paddingRight: 10,
					'& svg': {
						color: '#888888',
						marginRight: 8,
					},
				},
				inputMultiline: {
					paddingLeft: 14,
					paddingRight: 14,
				},
				adornedEnd: {
					paddingRight: 20,
				},
				adornedStart: {
					paddingLeft: 20,
				},
				input: {
					'&:-webkit-autofill': {
						boxShadow: '0 0 0 1000px rgba(255, 255, 255, 0) inset !important',
						transition: 'background-color 5000s ease-in-out 0s',
					},
				},
				notchedOutline: {
					borderWidth: 2,
				},
			},
		},
		MuiToggleButton: {
			defaultProps: {
				variant: 'contained',
			},
			styleOverrides: {
				root: {
					backgroundColor: 'transparent',
					borderColor: '#0E21A0',
					borderWidth: 2,
					boxShadow:
						'0px 4px 12px 0px rgba(0, 0, 0, 0.10), 0px 24px 40px 0px rgba(0, 0, 0, 0.12)',
					borderRadius: '50vh',
					color: '#0E21A0',
					textTransform: 'none',
					'&.Mui-selected': {
						backgroundColor: '#0E21A0',
						color: '#ffffff',
						'&:hover': {
							backgroundColor: '#0E21A0',
							color: '#ffffff',
						},
					},
					...theme.applyStyles('dark', {
						borderColor: '#ffffff',
						color: '#ffffff',
						'&.Mui-selected': {
							backgroundColor: '#ffffff',
							color: '#10101E',
							'&:hover': {
								backgroundColor: '#ffffff',
								color: '#10101E',
							},
						},
					}),
				},
				colorPrimary: {},
				sizeMedium: {
					'&.MuiButton-containedPrimary': {
						borderTop: '2px solid #FFF',
					},
					'&.MuiButton-containedSecondary': {
						borderTop: '2px solid #555',
					},
					fontSize: 20,
					height: 56,
					paddingLeft: 24,
					paddingRight: 24,
					...theme.applyStyles('dark', {
						'&.MuiButton-containedPrimary': {
							borderTop: '2px solid #FFF',
						},
						'&.MuiButton-containedSecondary': {
							borderTop: '2px solid #555',
						},
					}),
				},
			},
		},
	},
});

theme.typography.h1 = {
	fontSize: '4rem',
	[theme.breakpoints.down('sm')]: {
		fontSize: '2.5rem',
	},
};

theme.typography.h2 = {
	fontSize: '3rem',
	[theme.breakpoints.down('sm')]: {
		fontSize: '1.875rem',
	},
};

theme.typography.h3 = {
	fontSize: '2.5rem',
	[theme.breakpoints.down('sm')]: {
		fontSize: '1.75rem',
	},
};

theme.typography.h4 = {
	fontSize: '1.875rem',
	[theme.breakpoints.down('sm')]: {
		fontSize: '1.5rem',
	},
};

theme.typography.h5 = {
	fontSize: '1.5rem',
	[theme.breakpoints.down('sm')]: {
		fontSize: '1.25rem',
	},
};

theme.typography.h6 = {
	fontSize: '1.25rem',
	[theme.breakpoints.down('sm')]: {
		fontSize: '1rem',
	},
};

theme.typography.subtitle1 = {
	fontSize: '1.375rem',
	[theme.breakpoints.down('md')]: {
		fontSize: '1.25rem',
	},
};

theme.typography.subtitle2 = {
	fontSize: '1.125rem',
	fontWeight: 500,
	[theme.breakpoints.down('md')]: {
		fontSize: '1rem',
	},
};

export default theme;

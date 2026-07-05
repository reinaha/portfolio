import { Link, Stack, StackProps, Typography, useTheme } from '@mui/material';

const contactLinks = [
    {
        label: 'Email',
        text: 'works.sumin@gmail.com',
        href: 'mailto:works.sumin@gmail.com',
    },
    {
        label: 'LinkedIn',
        text: 'www.linkedin.com/in/reinaha',
        href: 'https://www.linkedin.com/in/reinaha/',
    },
];

export const HomeBottomCover = ({ ...props }: StackProps) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    const secondaryColor = isDarkMode ? 'rgba(255, 255, 255, 0.6)' : '#818181';
    const labelColor = isDarkMode ? 'rgba(255, 255, 255, 0.5)' : '#818181';

    return (
        <Stack
            id="ContactMe"
            className="ContactMe"
            maxWidth="1024px"
            marginX="auto"
            width="100%"
            paddingBottom={20}
            spacing={12}
            {...props}
        >
            <Typography
                sx={{
                    fontSize: '12px',
                    lineHeight: '16px',
                    fontWeight: 600,
                    letterSpacing: '1.2px',
                    textTransform: 'uppercase',
                    color: labelColor,
                }}
            >
                Contact
            </Typography>
            <Stack direction={{ md: 'row', xs: 'column' }} spacing={{ md: 10, xs: 6 }}>
                <Stack flex={1} spacing={6}>
                    <Typography
                        sx={{
                            fontSize: '36px',
                            lineHeight: '45px',
                            letterSpacing: '-0.9px',
                            fontWeight: 600,
                            color: theme.palette.primary.main,
                        }}
                    >
                        Let&apos;s build something great together.
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '16px',
                            color: secondaryColor,
                            lineHeight: '26px',
                        }}
                    >
                        Always happy to explore new opportunities, collaborate on
                        meaningful products, and connect with great people. Feel free to
                        reach out.
                    </Typography>
                </Stack>
                <Stack flex={1} spacing={4}>
                    {contactLinks.map((link) => (
                        <Stack key={link.label} spacing={1}>
                            <Typography
                                sx={{
                                    fontSize: '12px',
                                    lineHeight: '16px',
                                    letterSpacing: '1.2px',
                                    textTransform: 'uppercase',
                                    color: labelColor,
                                }}
                            >
                                {link.label}
                            </Typography>
                            <Link
                                href={link.href}
                                target={
                                    link.href.startsWith('mailto') ? undefined : '_blank'
                                }
                                rel={
                                    link.href.startsWith('mailto')
                                        ? undefined
                                        : 'noopener noreferrer'
                                }
                                sx={{
                                    fontSize: '16px',
                                    lineHeight: '24px',
                                    color: theme.palette.primary.main,
                                    textDecorationColor: 'inherit',
                                }}
                            >
                                {link.text}
                            </Link>
                        </Stack>
                    ))}
                </Stack>
            </Stack>
        </Stack>
    );
};

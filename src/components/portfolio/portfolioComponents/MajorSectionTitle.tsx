import { Box, Button, Container, Stack, Typography } from '@mui/material';

import HeaderMarkerIcon from '@/icons/HeaderMarkerIcon.svg';

export type MajorSectionTitleProps = {
    title: string;
    subTitles?: string[];
    navigateTo?: (index: number) => void;
};

export const MajorSectionTitle = ({
    title,
    subTitles = [],
    navigateTo,
}: MajorSectionTitleProps) => {
    return (
        <Stack paddingTop={12.5} paddingBottom={12.5}>
            <Container>
                <Stack rowGap={2.5} direction={{ lg: 'row', md: 'row' }}>
                    <Typography
                        variant="h2"
                        paddingBottom={1.5}
                        color="black"
                        sx={{ flexGrow: 1 }}
                    >
                        {title}
                    </Typography>
                    {subTitles ? (
                        <Stack>
                            {subTitles.map((t, index) => (
                                <Button
                                    key={index}
                                    onClick={() => navigateTo && navigateTo(index)}
                                    sx={{ justifyContent: 'flex-start' }}
                                >
                                    <Box
                                        component="img"
                                        alt="Cover"
                                        src={HeaderMarkerIcon}
                                        marginRight={3}
                                        sx={{
                                            objectFit: 'none',
                                            width: '17px',
                                            border: '2px',
                                        }}
                                    />
                                    <Typography
                                        textTransform="none"
                                        sx={{
                                            textDecoration: 'underline',
                                            color: ' #131214',
                                            fontWeight: 550,
                                        }}
                                    >
                                        {t}
                                    </Typography>
                                </Button>
                            ))}
                        </Stack>
                    ) : null}
                </Stack>
            </Container>
        </Stack>
    );
};

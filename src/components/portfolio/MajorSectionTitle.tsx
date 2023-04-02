import { Container, Stack, Typography } from '@mui/material';

export type MajorSectionTitleProps = {
    title: string;
    subTitle: React.ReactNode;
};

export const MajorSectionTitle = ({ title, subTitle }: MajorSectionTitleProps) => {
    return (
        <Stack paddingTop={5} paddingBottom={5} sx={{ backgroundColor: '#FAFAFA' }}>
            <Container>
                {subTitle}
                <Typography variant="h1" paddingBottom={1.5}>
                    {title}
                </Typography>
            </Container>
        </Stack>
    );
};

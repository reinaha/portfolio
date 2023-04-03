import { Container, Stack, Typography } from '@mui/material';

export type MajorSectionTitleProps = {
    title: string;
    subTitles?: string[];
};

export const MajorSectionTitle = ({ title, subTitles = [] }: MajorSectionTitleProps) => {
    return (
        <Stack paddingTop={12.5} paddingBottom={12.5}>
            <Container>
                <Typography variant="h2" paddingBottom={1.5} color="black">
                    {title}
                </Typography>
            </Container>
        </Stack>
    );
};

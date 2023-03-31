import { Typography } from '@mui/material';

type MajorSectionTitleProps = {
    title: string;
    subTitle: React.ReactNode;
};

export const MajorSectionTitle = ({ title, subTitle }: MajorSectionTitleProps) => {
    return (
        <>
            {subTitle}
            <Typography variant="h1" paddingBottom={1.5}>
                {title}
            </Typography>
        </>
    );
};

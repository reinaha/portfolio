import { Box, List, ListItem, Stack } from '@mui/material';

import GridSystem from '../../../../../resources/OsstemDentalEshop/GridSystem.jpg';

type GridGuideListItemProps = {
    text: string;
};

const GridGuideListItem = ({ text }: GridGuideListItemProps) => {
    return (
        <ListItem
            sx={{
                display: 'list-item',
                padding: 0,
                textAlign: 'left',
                marginBottom: '1.5em',
                marginLeft: '2em',
                '&:before': {
                    content: '"•"',
                    color: '#FB4200',
                    marginRight: '1em',
                },
            }}
        >
            {text}
        </ListItem>
    );
};

const gridGuideList = ['4 columns', '62px width', '16px gutter', '35px margins'];

export const GridContent = () => {
    return (
        <Stack spacing={1.4} direction={{ lg: 'row', xs: 'column' }}>
            <Box component="img" alt="Cover" src={GridSystem} />
            <List>
                {gridGuideList.map((g, index) => (
                    <GridGuideListItem key={index} text={g} />
                ))}
            </List>
        </Stack>
    );
};

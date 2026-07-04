import { Grid, GridProps } from '@mui/material';
import { Children } from 'react';

interface IconListItemGridProps extends GridProps {
    children?: React.ReactNode;
}

export const IconListItemGrid = ({
    children,
    spacing = 2.5,
    ...props
}: IconListItemGridProps) => {
    return (
        <Grid container spacing={spacing} {...props}>
            {Children.map(children, (child) => (
                <Grid item xs={12} sm={6}>
                    {child}
                </Grid>
            ))}
        </Grid>
    );
};

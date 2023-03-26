import { Grid } from '@mui/material';

import PropertyMaxBg from '../../resources/PropertyMaxBg.png';
import PropertyMaxBgWeb from '../../resources/PropertyMaxBgWeb.png';
import {
    ContactCard,
    IntroCard,
    LongCard,
    PortfolioCard,
    SmallCard,
} from '../components/homeCards';

export function Home() {
    return (
        <Grid container alignItems="stretch" spacing={1}>
            <Grid container item spacing={1}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <IntroCard />
                </Grid>
                <Grid item container spacing={1} xs={12} sm={12} md={6} lg={6}>
                    <Grid item xs={12} md={12} lg={12}>
                        <LongCard title="Download Portfolio" />
                    </Grid>
                    <Grid item container spacing={1} xs={12} md={12} lg={12}>
                        <Grid item xs={12} sm={12} md={6}>
                            <SmallCard title="Download CV" />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <SmallCard title="Contact Me" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <PortfolioCard
                    title="PropertiMax Application"
                    subTitle="Lead UX and UI design"
                    backgroundImage={PropertyMaxBg}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <PortfolioCard
                    title="PropertiMax Website"
                    subTitle="Lead UX and UI design"
                    backgroundImage={PropertyMaxBgWeb}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <PortfolioCard
                    title="PropertiMax Application"
                    subTitle="Lead UX and UI design"
                    backgroundImage={PropertyMaxBg}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <PortfolioCard
                    title="PropertiMax Website"
                    subTitle="Lead UX and UI design"
                    backgroundImage={PropertyMaxBgWeb}
                />
            </Grid>
            <Grid item md={12} lg={12}>
                <ContactCard />
            </Grid>
        </Grid>
    );
}

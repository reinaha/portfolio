import { Box, Stack, Typography } from '@mui/material';
import CheckoutFatigue from '@resources/OsstemDentalEshop/CheckoutFatigue.jpg';
import CheckoutJourney from '@resources/OsstemDentalEshop/CheckoutJourney.jpg';
import CheckoutMain from '@resources/OsstemDentalEshop/CheckoutMain.jpg';
import CheckoutReduceError from '@resources/OsstemDentalEshop/CheckoutReduceError.jpg';

import { JourneyContainer, PortfolioContainer } from '@/components/portfolio';

import { PortfolioFullWidthImage } from '../../PortfolioFullWidthImage';
import { PortfolioSection } from '../../PortfolioSection';

export const CheckoutContent = () => {
    return (
        <Stack spacing={1.4}>
            <PortfolioFullWidthImage image={CheckoutMain} marginBottom={1.5} />
            <PortfolioSection
                title="Checkout journey"
                content={<CheckoutJourneyContent />}
                headerVariant="h4"
            />
            <PortfolioSection
                title="Adding a progress bar to reduce user fatigue during checkout"
                content={<CheckoutFatigueContent />}
                headerVariant="h4"
            />
            <PortfolioSection
                title="UI design to reduce user errors in product order quantities"
                content={<CheckoutReduceErrorContent />}
                headerVariant="h4"
            />
        </Stack>
    );
};

const CheckoutJourneyContent = () => {
    return (
        <JourneyContainer image={CheckoutJourney}>
            <Typography>
                To encourage more purchases from users, it was important to make the
                checkout process as easy as possible. We added quantity and
                &ldquo;Edit&rdquo; buttons to the checkout session, allowing users to
                modify the quantity or options of items. To enable users to confirm or
                modify the delivery clinic, we added a drop-down menu for changing the
                clinic location on the &ldquo;Payment & Info&rdquo; page.
            </Typography>
            <Typography>
                To reduce order errors, we designed the last &ldquo;Review&rdquo; page to
                require users to check their order details again before finalizing the
                purchase.
            </Typography>
        </JourneyContainer>
    );
};

const CheckoutFatigueContent = () => {
    return (
        <PortfolioContainer>
            <Typography>
                To ensure that users do not feel overwhelmed during the checkout process,
                which consists of three stages - &lsquo;My cart&rsquo;, &lsquo;Payment &
                Info&rsquo;, and &lsquo;Review&rsquo; - a checkout progress bar was added
                to the top bar, allowing users to check the checkout status in real time.
            </Typography>
            <Typography>
                In addition, an orange tick icon was added to the previous stage tab every
                time the checkout stage was passed, indicating to users that they have
                already completed the stage. This was designed to reassure users and help
                them navigate the checkout process smoothly.
            </Typography>
            <Box component="img" alt="Cover" src={CheckoutFatigue} />
        </PortfolioContainer>
    );
};

const CheckoutReduceErrorContent = () => {
    return (
        <PortfolioContainer>
            <Typography>
                One of the biggest concerns we had during product ordering was that many
                customers often select the wrong quantity of products. Sometimes they use
                this as an excuse to complain to the company about the incorrect quantity.
            </Typography>
            <Typography>
                To prevent this from happening, we designed a feature that changes the
                color of the quantity button to black and adds a slight shaking animation
                when a user orders a quantity greater than 1, allowing them to
                double-check their input and avoid mistakes.
            </Typography>
            <Box component="img" alt="Cover" src={CheckoutReduceError} />
        </PortfolioContainer>
    );
};

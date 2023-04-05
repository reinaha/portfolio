import { IconListItem } from '@/components';
import {
    PortfolioContainer,
    PortfolioImage,
    PortfolioSubSection,
} from '@/components/portfolio';
import { CheckoutFatigue, CheckoutJourney, CheckoutReduceError } from '@/images';

const CheckoutJourneyContent = () => {
    return (
        <PortfolioContainer>
            <IconListItem>
                To encourage more purchases from users, it was important to make the
                checkout process as easy as possible. We added quantity and
                &ldquo;Edit&rdquo; buttons to the checkout session, allowing users to
                modify the quantity or options of items. To enable users to confirm or
                modify the delivery clinic, we added a drop-down menu for changing the
                clinic location on the &ldquo;Payment & Info&rdquo; page.
            </IconListItem>
            <IconListItem>
                To reduce order errors, we designed the last &ldquo;Review&rdquo; page to
                require users to check their order details again before finalizing the
                purchase.
            </IconListItem>
            <PortfolioImage imageSrc={CheckoutJourney} />
        </PortfolioContainer>
    );
};

const CheckoutFatigueContent = () => {
    return (
        <PortfolioContainer>
            <IconListItem>
                To ensure that users do not feel overwhelmed during the checkout process,
                which consists of three stages - &lsquo;My cart&rsquo;, &lsquo;Payment &
                Info&rsquo;, and &lsquo;Review&rsquo; - a checkout progress bar was added
                to the top bar, allowing users to check the checkout status in real time.
            </IconListItem>
            <IconListItem>
                In addition, an orange tick icon was added to the previous stage tab every
                time the checkout stage was passed, indicating to users that they have
                already completed the stage. This was designed to reassure users and help
                them navigate the checkout process smoothly.
            </IconListItem>
            <PortfolioImage imageSrc={CheckoutFatigue} />
        </PortfolioContainer>
    );
};

const CheckoutReduceErrorContent = () => {
    return (
        <PortfolioContainer>
            <IconListItem>
                One of the biggest concerns we had during product ordering was that many
                customers often select the wrong quantity of products. Sometimes they use
                this as an excuse to complain to the company about the incorrect quantity.
            </IconListItem>
            <IconListItem>
                To prevent this from happening, we designed a feature that changes the
                color of the quantity button to black and adds a slight shaking animation
                when a user orders a quantity greater than 1, allowing them to
                double-check their input and avoid mistakes.
            </IconListItem>
            <PortfolioImage imageSrc={CheckoutReduceError} />
        </PortfolioContainer>
    );
};

export const CheckoutContentData = [
    {
        title: 'Checkout journey',
        content: <CheckoutJourneyContent />,
    },
    {
        title: 'Adding a progress bar to reduce user fatigue during checkout',
        content: <CheckoutFatigueContent />,
    },
    {
        title: 'UI design to reduce user errors in product order quantities',
        content: <CheckoutReduceErrorContent />,
    },
];

export const CheckoutContent = () => (
    <PortfolioSubSection subsections={CheckoutContentData} />
);

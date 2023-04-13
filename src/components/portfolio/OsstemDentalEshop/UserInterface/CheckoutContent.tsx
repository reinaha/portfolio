import {
    IconListItem,
    PortfolioImage,
    PortfolioSectionContainer,
    PortfolioSubSection,
} from '@/components';
import { CheckoutFatigue, CheckoutJourney, CheckoutReduceError } from '@/images';

const CheckoutJourneyContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                To encourage more purchases from users, it was important to make the
                checkout process as simple and intuitive as possible. Quantity and
                &ldquo;Edit&rdquo; buttons were added to the checkout screen, allowing
                users to modify the quantity or options of items.
            </IconListItem>
            <IconListItem>
                To enable users to confirm or modify the delivery clinic, a drop-down menu
                was added to change the clinic location on the &ldquo;Payment &
                Info&rdquo; page.
            </IconListItem>
            <IconListItem>
                To reduce user errors, &ldquo;Review&rdquo; page was designed to display
                at the end of the checkout process to let users check their order details
                before finalising the order.
            </IconListItem>
            <PortfolioImage imageSrc={CheckoutJourney} />
        </PortfolioSectionContainer>
    );
};

const CheckoutFatigueContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                To ensure that users do not feel overwhelmed during the checkout process,
                which consists of three stages - &lsquo;My Cart&rsquo;, &lsquo;Payment &
                Info&rsquo;, and &lsquo;Review&rsquo; - a checkout progress bar was added
                to the top of the screen, allowing users to see their checkout progress in
                real time.
            </IconListItem>
            <IconListItem>
                In addition, an orange tick icon was added to the previous stage nodes for
                each checkout stage completed, indicating to users that they have already
                completed the stage. This was designed to reassure users and help them
                navigate through the checkout process smoothly.
            </IconListItem>
            <PortfolioImage imageSrc={CheckoutFatigue} />
        </PortfolioSectionContainer>
    );
};

const CheckoutReduceErrorContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                One of the biggest concerns in the original product ordering process,
                through sales representatives and phone calls, was that many users often
                ordered the wrong quantity of products. Due to the absence of any way of
                auditing such orders this was used as an excuse to raise complaints
                against the company about the incorrect quantity of products delivered.
            </IconListItem>
            <IconListItem>
                To prevent such errors from happening, a feature was added to change the
                colour of the quantity button to black and add a slight shaking animation
                when a user enters a quantity greater than 1. This clearly indicates that
                the quantity has changed, allowing them to double-check their input and
                avoid mistakes.
            </IconListItem>
            <PortfolioImage imageSrc={CheckoutReduceError} />
        </PortfolioSectionContainer>
    );
};

export const CheckoutContentData = [
    {
        title: 'Checkout journey',
        content: <CheckoutJourneyContent />,
    },
    {
        title: 'Checkout progress bar to reduce user fatigue',
        content: <CheckoutFatigueContent />,
    },
    {
        title: 'UI design to reduce user errors in order quantities',
        content: <CheckoutReduceErrorContent />,
    },
];

export const CheckoutContent = () => (
    <PortfolioSubSection subsections={CheckoutContentData} />
);

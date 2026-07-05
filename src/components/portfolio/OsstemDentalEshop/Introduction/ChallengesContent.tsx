import { PortfolioSectionContainer } from '@/components';
import { IconListItem } from '@/components/listText/IconListItem';

export const ChallengesContent = () => {
    const iconColor = { primary: '#FF7A00', secondary: '#FFF9E6' };

    return (
        <PortfolioSectionContainer>
            <IconListItem iconType="number" number={1} iconColor={iconColor}>
                Due to the large quantity of products, categorisation was one of the most
                important aspects of this app. The categories were organised based on the
                opinions of the target audience - dentists, to make it easier for them to
                find what they needed.
            </IconListItem>
            <IconListItem iconType="number" number={2} iconColor={iconColor}>
                Due to the products being very specialised, clients complained about
                difficulty in figuring out which category the product they required was
                under.
            </IconListItem>
            <IconListItem iconType="number" number={3} iconColor={iconColor}>
                Due to the characteristics of the target audience, especially for pay
                dentists who often handle clinics in two or three locations, a feature was
                required to allow a selection of a delivery location from multiple clinic
                locations for a single user.
            </IconListItem>
        </PortfolioSectionContainer>
    );
};

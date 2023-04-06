import { PortfolioSectionContainer } from '@/components';
import { IconListItem } from '@/components/listText/IconListItem';

export const ChallengesContent = () => {
    const iconColor = { primary: '#FF7A00', secondary: '#FFF9E6' };

    return (
        <PortfolioSectionContainer>
            <IconListItem iconType="number" number={1} iconColor={iconColor}>
                Due to the large quantity of products, categorization was the most
                important aspect of this app. The categories were reorganized based on the
                opinions of our target audience, dentists, to suit their purposes.
            </IconListItem>
            <IconListItem iconType="number" number={2} iconColor={iconColor}>
                Based on the feedback from our target users, it was overwhelmingly
                suggested to have a menu page where all categories can be viewed at once
                without additional actions required.
            </IconListItem>
            <IconListItem iconType="number" number={3} iconColor={iconColor}>
                Due to the characteristics of the target audience, especially for pay
                doctors who often handle clinics in two or three locations, a feature was
                needed to allow multiple delivery locations to be selected on a single
                account.
            </IconListItem>
        </PortfolioSectionContainer>
    );
};

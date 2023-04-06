import { Typography } from '@mui/material';

import { IconListItem } from '../../../listText';
import { PortfolioSectionContainer } from '../../portfolioBricks/PortfolioSectionContainer';

export const LearnedContent = () => {
    const iconColor = {
        primary: '#FF7A00',
        secondary: '#FFF9E6',
    };
    return (
        <PortfolioSectionContainer>
            <IconListItem iconType="number" number={1} iconColor={iconColor}>
                <Typography fontWeight={700}>
                    The importance of understanding target needs and behavior patterns
                </Typography>
            </IconListItem>
            <IconListItem iconType="noIcon">
                As this app was created to sell products for a specific industry, it was
                essential to first understand the needs and pain points of the target
                audience, specifically dentists, and what features would be most useful to
                them.
            </IconListItem>
            <IconListItem iconType="noIcon">
                This required listening to complaints from dentists, as well as dental
                suppliers and competitors. Additionally, it was necessary to continuously
                collect feedback from the target audience after the wireframe was
                developed.
            </IconListItem>
            <IconListItem iconType="noIcon">
                Through this process, I learned the importance of understanding target
                needs and behavior patterns, as well as the importance of user testing.
            </IconListItem>
            <IconListItem iconType="number" number={2} iconColor={iconColor}>
                <Typography fontWeight={700}>
                    The importance of understanding the company&apos;s internal sales
                    system
                </Typography>
            </IconListItem>
            <IconListItem iconType="noIcon">
                For this particular app, although an e-commerce platform did not already
                exist, the company had already established relationships with customers
                through face-to-face interactions and had been selling products for a long
                time.
            </IconListItem>
            <IconListItem iconType="noIcon">
                Therefore, it was important to consider how to bring existing customers
                into the new e-commerce app rather than just targeting new customers. This
                required thoughtful consideration of how to seamlessly integrate the
                company&apos;s existing systems into the new app and how to design the app
                to help customers adapt to the new purchasing method without difficulty.
            </IconListItem>
            <IconListItem iconType="noIcon">
                Through this process, it was necessary to understand the company&apos;s
                internal sales system and to understand the specific aspects and
                purchasing patterns of how customers make orders when making purchases.
            </IconListItem>
            <IconListItem iconType="number" number={3} iconColor={iconColor}>
                <Typography fontWeight={700}>
                    Gaining Insight into Unique Requirements and Challenges of a Specific
                    Industry
                </Typography>
            </IconListItem>
            <IconListItem iconType="noIcon">
                While creating an e-commerce application for the dental industry, I gained
                valuable insights into the unique requirements and challenges of this
                particular sector.
            </IconListItem>
            <IconListItem iconType="noIcon">
                This allowed me to develop a tailored solution that better meets the needs
                of dental professionals, as opposed to a more generalized e-commerce
                platform.
            </IconListItem>
        </PortfolioSectionContainer>
    );
};

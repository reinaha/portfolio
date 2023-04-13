import { Typography } from '@mui/material';

import { PortfolioSectionContainer } from '@/components';

import { IconListItem } from '../../../listText';

export const LearnedContent = () => {
    const iconColor = {
        primary: '#FF7A00',
        secondary: '#FFF9E6',
    };
    return (
        <PortfolioSectionContainer>
            <IconListItem iconType="number" number={1} iconColor={iconColor}>
                <Typography fontWeight={700}>
                    The importance of understanding needs and behavioural patterns of the
                    target audience
                </Typography>
            </IconListItem>
            <IconListItem iconType="noIcon">
                As this app was created to sell products for a specific industry, it was
                essential to first understand the needs and pain points of the target
                audience, specifically dentists, and what features would provide most
                value to them.
            </IconListItem>
            <IconListItem iconType="noIcon">
                This required listening to complaints from dentists, as well as
                investigating other dental suppliers and competitors. Additionally, it was
                necessary to continuously collect feedback from the target audience after
                the wireframe was developed.
            </IconListItem>
            <IconListItem iconType="noIcon">
                Through this process, I learned the importance of understanding target
                needs and behavioural patterns, as well as the importance of user testing.
            </IconListItem>
            <IconListItem iconType="number" number={2} iconColor={iconColor}>
                <Typography fontWeight={700}>
                    The importance of understanding the company&apos;s internal sales
                    system
                </Typography>
            </IconListItem>
            <IconListItem iconType="noIcon">
                Although there wasn’t an existing e-commerce platform, the company had
                already established relationships with customers through face-to-face
                interactions and had been selling products for a long time.
            </IconListItem>
            <IconListItem iconType="noIcon">
                Therefore, it was important to take into consideration the onboarding
                process to bring existing customers into the new e-commerce app rather
                than targeting new customers. This required careful consideration of
                existing company systems and processes in addition to designing the app to
                help clients adapt to the new purchasing process.
            </IconListItem>
            <IconListItem iconType="noIcon">
                To design such a system, it was necessary to understand the company&apos;s
                internal sales system and to understand the specific aspects and
                purchasing patterns of how certain clients make orders when making
                purchases.
            </IconListItem>
            <IconListItem iconType="number" number={3} iconColor={iconColor}>
                <Typography fontWeight={700}>
                    Gaining Insight into unique requirements and challenges of a specific
                    industry
                </Typography>
            </IconListItem>
            <IconListItem iconType="noIcon">
                While creating an e-commerce application for the dental industry, I gained
                valuable insights into the unique requirements and challenges of this
                particular industry. The products being sold were very specialised and had
                a range of different options that was difficult to understand in the
                beginning.
            </IconListItem>
            <IconListItem iconType="noIcon">
                Learning more about the industry and the products allowed me to design a
                tailored solution that meets the needs of dental professionals, as opposed
                to a more generalised e-commerce platform.
            </IconListItem>
        </PortfolioSectionContainer>
    );
};

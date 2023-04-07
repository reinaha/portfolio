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
                    &lsquo;No matter how good the design is, it cannot be released to the
                    market if time management fails.&rsquo; &lsquo;Designers need not only
                    the ability to produce good design, but also the ability to persuade
                    others.&rsquo;
                </Typography>
            </IconListItem>
            <IconListItem iconType="noIcon">
                One thing that I was disappointed with while working on this project at
                the company was the excessive authority that the CEO had due to the
                company&apos;s small team size. Due to the frequent changes of mind by the
                administrator, there were frequent cancellations and delays in completing
                even one task for the project. Even though I worked on the project for
                about a year, the app could not be released due to these reasons.
            </IconListItem>
            <IconListItem iconType="noIcon">
                Through this process, I learned that while perfect design is certainly
                important, time management is just as crucial. I realized that there is no
                such thing as a perfect design, and that if you cannot complete your work
                within a set time frame, even if you put in a lot of effort, the project
                may never come out on the market.
            </IconListItem>
            <IconListItem iconType="noIcon">
                If I were to encounter a similar situation in the future, I would first
                manage time thoroughly with my team within our capabilities. To prepare
                for the client&apos;s frequent changes of mind, I would create several
                design options or prepare more detailed documents to persuade the team
                using methods other than the design itself.
            </IconListItem>
            <IconListItem iconType="number" number={2} iconColor={iconColor}>
                <Typography fontWeight={700}>
                    The fact that what I think may differ from what others think, and that
                    misunderstandings can lead to unexpected outcomes, taught me the
                    importance of effective communication among team members. It is
                    crucial to define ambiguous areas clearly, such as through
                    documentation.
                </Typography>
            </IconListItem>
            <IconListItem iconType="noIcon">
                During my participation in this project, frequent team member changes
                resulted in having to constantly adjust to new team dynamics. Some
                developers preferred to quickly move onto the next task after establishing
                a general framework, while others meticulously created solutions that
                accounted for various scenarios. I learned that the design process had to
                be adapted to the developer&apos;s work style, as each developer had their
                own unique approach.
            </IconListItem>
            <IconListItem iconType="noIcon">
                Working with multiple developers, I realized that what I thought was clear
                or understood could be completely different from someone else&apos;s
                perspective. This can lead to misunderstandings and unexpected outcomes.
                As a result, it&apos;s important to communicate clearly with each other
                and define any ambiguous or unclear aspects of the project through
                documentation.
            </IconListItem>
            <IconListItem iconType="number" number={3} iconColor={iconColor}>
                <Typography fontWeight={700}>
                    Lessons Learned from Designing Functional Websites like Dashboard:
                    Importance of Emphasizing Actions and Data Visualization
                </Typography>
            </IconListItem>
            <IconListItem iconType="noIcon">
                Through this project, I designed a dashboard for the first time and
                learned that the functional aspect is the most important part of a
                website. Unlike most websites used by the general public, these websites
                need to focus on the user&apos;s tasks, so they need to be designed
                accordingly.
            </IconListItem>
            <IconListItem iconType="noIcon">
                When designing a website where functionality is important, it is important
                to emphasize the &ldquo;action&rdquo; the user wants to perform through
                the design. To do this, sometimes the color of the remaining features is
                made lighter or simplified by removing them from the design.
            </IconListItem>
            <IconListItem iconType="noIcon">
                I also realized that visualized information such as data and graphs play
                an important role. Therefore, understanding data visualization was
                crucial, and I had to consider a design that was optimized for quick and
                easy understanding of visualized information.
            </IconListItem>
        </PortfolioSectionContainer>
    );
};

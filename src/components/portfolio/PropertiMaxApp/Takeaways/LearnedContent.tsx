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
                    The reason why meeting the target audience and collecting tangible
                    data is important is that we should not jump to conclusions based on
                    assumptions.
                </Typography>
            </IconListItem>
            <IconListItem iconType="noIcon">
                Before starting this project, I had no interest in the real estate
                industry and was close to being ignorant. As a result, when I was assigned
                to the project, I had difficulty designing the application because of my
                low understanding of what the target buyers and agents wanted through the
                app and what parts they would find inconvenient when using competitor
                websites in the same industry.
            </IconListItem>
            <IconListItem iconType="noIcon">
                To overcome this, what I had to do was additional studying of the industry
                and meeting with people who could be the target audience to interview and
                understand their needs.
            </IconListItem>
            <IconListItem iconType="noIcon">
                Through meeting with the target audience, there were times when they
                expressed discomfort in unexpected areas or when their opinions overturned
                what I had guessed.
            </IconListItem>
            <IconListItem iconType="noIcon">
                What I learned from these experiences is that when starting a project for
                the first time, it is important to first have a deep understanding of the
                industry and to gather tangible data by directly meeting with the target
                audience rather than making hasty assumptions.
            </IconListItem>
        </PortfolioSectionContainer>
    );
};

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
                    Importance of Effective Communication and Adaptability in Teamwork and
                    Project Management
                </Typography>
            </IconListItem>
            <IconListItem iconType="noIcon">
                I learned the significance of effective communication among team members
                when I realised that my thoughts may differ from others and that
                misunderstandings can result in unexpected outcomes. This taught me to
                define ambiguous areas clearly, which can be done through documentation.
            </IconListItem>
            <IconListItem iconType="noIcon">
                During my participation in a project, I had to constantly adjust to new
                team dynamics due to frequent changes in team members. Some developers
                preferred to move quickly onto the next task after establishing a general
                framework, while others meticulously created solutions that considered
                various scenarios. This made me realise that the design process had to be
                adapted to the developer&apos;s work style as each developer had their own
                unique approach.
            </IconListItem>
            <IconListItem iconType="noIcon">
                Working with multiple developers also taught me that what I had in my head
                may not have been effectively communicated to others, leading to
                misunderstandings and unexpected outcomes. This experience made me
                understand the importance of clear communication and documentation to
                clarify any ambiguous or unclear aspects of the project.
            </IconListItem>
            <IconListItem iconType="number" number={2} iconColor={iconColor}>
                <Typography fontWeight={700}>
                    Importance of Research and Direct User Interaction in Design
                </Typography>
            </IconListItem>
            <IconListItem iconType="noIcon">
                When I was first assigned to the project, I realised that my lack of
                interest in and knowledge of the real estate industry posed a significant
                challenge for me. Designing the application proved to be difficult because
                I had little understanding of the needs and expectations of the target
                audiences - property buyers and agents, as well as the features that would
                set our application apart from those offered by competitors.
            </IconListItem>
            <IconListItem iconType="noIcon">
                To overcome this challenge, I had to invest time in researching the
                industry and meeting with potential users to gather their feedback and
                understand their needs and preferences better.
            </IconListItem>
            <IconListItem iconType="noIcon">
                During these meetings, I discovered unexpected pain points and had to
                adjust my assumptions and designs accordingly.
            </IconListItem>
            <IconListItem iconType="noIcon">
                Through this experience, I learned the importance of gaining a deep
                understanding of the industry and collecting data by directly interacting
                with the target audience. Rushing into a project with hasty assumptions
                can lead to incorrect design decisions and ultimately hinder the success
                of the project.
            </IconListItem>
            <IconListItem iconType="number" number={3} iconColor={iconColor}>
                <Typography fontWeight={700}>
                    Lessons Learned from Designing Functional Websites like Dashboard:
                    Importance of Emphasising Actions and Data Visualization
                </Typography>
            </IconListItem>
            <IconListItem iconType="noIcon">
                Reflecting on my experience designing functional websites such as a
                dashboard, I learned that the most important aspect of such websites is
                their functionality. These websites are designed for users to accomplish
                specific tasks, so the design should focus on facilitating those tasks
                effectively.
            </IconListItem>
            <IconListItem iconType="noIcon">
                To emphasise the desired actions, it is important to make them prominent
                in the design. This can be achieved by using bold colours or highlighting
                them in some other way, while making less important features lighter or
                simpler by removing them from the design altogether.
            </IconListItem>
            <IconListItem iconType="noIcon">
                I also realised the significance of data visualisation in such websites.
                Displaying data and graphs in an optimised manner that is quick and easy
                to understand is critical. To achieve this, a good understanding of data
                visualisation is essential, and the design should be tailored to allow
                users to comprehend the information easily. Overall, designing a
                functional website like a dashboard requires a balance between
                functionality, usability, and aesthetics.
            </IconListItem>
        </PortfolioSectionContainer>
    );
};

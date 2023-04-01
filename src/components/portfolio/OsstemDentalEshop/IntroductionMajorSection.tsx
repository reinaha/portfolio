import { PortfolioMajorSection } from '../PortfolioMajorSection';
import {
    ChallengesContent,
    DesignProcessContent,
    GoalsContent,
    InformationArchitectureContent,
    IntroductionContent,
    MidFidelityWireframesContent,
} from './Introduction';

export const IntroductionMajorSection = () => {
    return (
        <PortfolioMajorSection
            portfolioSections={[
                { title: 'Introduction', content: <IntroductionContent /> },
                { title: 'Goals', content: <GoalsContent /> },
                { title: 'Challenges', content: <ChallengesContent /> },
                { title: 'Design Process', content: <DesignProcessContent /> },
                {
                    title: 'Information Architecture',
                    content: <InformationArchitectureContent />,
                },
                {
                    title: 'Mid-Fidelity Wireframes',
                    content: <MidFidelityWireframesContent />,
                },
            ]}
        />
    );
};

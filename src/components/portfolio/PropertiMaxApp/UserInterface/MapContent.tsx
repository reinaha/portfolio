import { IconListItem } from '@/components';
import {
    PortfolioImage,
    PortfolioSectionContainer,
    PortfolioSubSection,
} from '@/components/portfolio';
import { PropertiMaxAppMapImg1, PropertiMaxAppMapImg2 } from '@/images/PropertiMaxApp';

const MapJourneyContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                Through target analysis, we found that location is the most important
                factor for the target audience when it comes to real estate options.
                Taking this into account, we designed a page where users can search for
                real estate while viewing detailed locations in real-time using an open
                map.
            </IconListItem>
            <IconListItem>
                On the map, the location of the real estate is displayed along with the
                price, which is the next most important factor for the target audience
                after location.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxAppMapImg1} />
        </PortfolioSectionContainer>
    );
};

const MapHidingContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                To help users focus more on the properties they are interested in, we
                designed the map so that when a user clicks on a property, instead of
                displaying a summary of the property, the rest of the list is hidden
                below.
            </IconListItem>
            <IconListItem>
                The hidden list is designed to reappear when the user scrolls up, making
                it easy for users to find the list at any time.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxAppMapImg2} />
        </PortfolioSectionContainer>
    );
};

export const MapContentData = [
    {
        title: 'Map search journey',
        content: <MapJourneyContent />,
    },
    {
        title: 'Enabling hiding function to focus on clicked item',
        content: <MapHidingContent />,
    },
];

export const MapContent = () => <PortfolioSubSection subsections={MapContentData} />;

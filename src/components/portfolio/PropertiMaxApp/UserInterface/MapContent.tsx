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
                Through target analysis, location was found to be the most important
                information for the target audience in the real estate market. Taking this
                into account, a page was designed to allow users to search for properties
                while viewing detailed locations in real-time using a map.
            </IconListItem>
            <IconListItem>
                On the map, the location of the property is displayed along with the
                price, which was identified as the next most important information for the
                target audience after location.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxAppMapImg1} />
        </PortfolioSectionContainer>
    );
};

const MapHidingContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                To help users focus more on the properties they are interested in, the map
                was designed so that when a user clicks on a property, instead of
                displaying a summary of the property, the rest of the list is hidden
                below.
            </IconListItem>
            <IconListItem>
                The hidden list is designed to reappear when the user drags it up, making
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
        title: 'Hiding the list to focus on clicked item',
        content: <MapHidingContent />,
    },
];

export const MapContent = () => <PortfolioSubSection subsections={MapContentData} />;

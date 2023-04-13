import { IconListItem } from '@/components';
import {
    PortfolioImage,
    PortfolioSectionContainer,
    PortfolioSubSection,
} from '@/components/portfolio';
import {
    PropertiMaxWebMapsearchImg1,
    PropertiMaxWebMapsearchImg2,
} from '@/images/PropertiMaxWeb';

const MapJourneyContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                We created a map search results page that caters to users who prioritise
                the location of a property. By presenting the properties on a map, users
                can easily navigate to areas of interest and assess nearby facilities to
                help them make an informed decision.
            </IconListItem>
            <IconListItem>
                This intuitive design allows users to quickly find properties in their
                desired location with just a few clicks. With this added convenience,
                users can now spend more time exploring the details of each property,
                leading to a more satisfying and efficient search experience.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxWebMapsearchImg1} />
        </PortfolioSectionContainer>
    );
};

const MapSortingContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                The map search results page is designed to provide users with a convenient
                way to locate real estate properties in the area of interest. When a user
                clicks on a property on the map, a brief summary of the property is
                displayed on the left-hand side of the screen.
            </IconListItem>
            <IconListItem>
                We have also included information on other real estate properties in the
                vicinity of the selected property, enabling users to compare and find the
                right real estate property for them.
            </IconListItem>
            <IconListItem>
                Our goal was to make the process of selecting a real estate property as
                easy as possible for our users.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxWebMapsearchImg2} />
        </PortfolioSectionContainer>
    );
};

export const MapContentData = [
    {
        title: 'Map search journey',
        content: <MapJourneyContent />,
    },
    {
        title: 'Intuitive sorting method that displays real estate properties in desired locations',
        content: <MapSortingContent />,
    },
];

export const MapContent = () => <PortfolioSubSection subsections={MapContentData} />;

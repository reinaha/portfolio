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
                The page shows real estate listings in the form of a map, designed to make
                it more convenient for people who consider the location of the property to
                be the most important option among real estate options.
            </IconListItem>
            <IconListItem>
                In the map search results page, as the location of the property is shown
                intuitively on the map, users can easily find properties in their desired
                areas and also check nearby facilities to help them choose a real estate
                property.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxWebMapsearchImg1} />
        </PortfolioSectionContainer>
    );
};

const MapSortingContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                We designed the page to show brief information about a specific real
                estate property on the left side when the user clicks on it on the map.
            </IconListItem>
            <IconListItem>
                In addition to that property, we also designed it to show other real
                estate properties nearby that location, allowing users to easily find real
                estate properties in the desired location.
            </IconListItem>
            <IconListItem>
                By doing so, we aim to provide users with more help in selecting real
                estate properties by allowing them to check other properties in the area.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxWebMapsearchImg2} />
        </PortfolioSectionContainer>
    );
};

export const MapContentData = [
    {
        title: 'Map view journey',
        content: <MapJourneyContent />,
    },
    {
        title: 'Intuitive sorting method that displays real estate properties in desired locations',
        content: <MapSortingContent />,
    },
];

export const MapContent = () => <PortfolioSubSection subsections={MapContentData} />;

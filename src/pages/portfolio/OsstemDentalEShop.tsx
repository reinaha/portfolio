import Cover2 from '../../../resources/OsstemDentalEshop/Cover2.jpg';
import { PortfolioLayout } from '../../components/portfolio/PortfolioLayout';

export const OsstemDentalEShop = () => {
    return (
        <PortfolioLayout
            coverImg={Cover2}
            title="Osstem dental e-shop"
            subTitle="Find the best deal on dental tools at your fingertips."
            portfolioMetaData={{
                projectType: 'Commercial',
                applicationType: 'Application',
                startDate: new Date(2022, 2),
                endDate: new Date(2022, 5),
            }}
        >
            <h1>Hello</h1>
            <p>hey</p>
        </PortfolioLayout>
    );
};

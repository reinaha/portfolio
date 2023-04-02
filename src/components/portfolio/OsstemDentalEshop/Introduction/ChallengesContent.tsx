import { PortfolioContainer } from '@/components';

import { NumberListText } from '../../../listText';

export const ChallengesContent = () => {
    return (
        <PortfolioContainer>
            <NumberListText
                number={1}
                text="Due to the large quantity of products, categorization was the most important aspect of this app. 
                    The categories were reorganized based on the opinions of our target audience, dentists, 
                    to suit their purposes."
                numberColor="#B26205"
                backgroundColor="#FFF9E6"
            />
            <NumberListText
                number={2}
                text="Based on the feedback from our target users, it was overwhelmingly suggested to have a 
                    menu page where all categories can be viewed at once without additional actions required."
                numberColor="#B26205"
                backgroundColor="#FFF9E6"
            />
            <NumberListText
                number={3}
                text="Due to the characteristics of the target audience, especially for pay doctors who often handle clinics 
                    in two or three locations, a feature was needed to allow multiple delivery locations to be selected on a 
                    single account."
                numberColor="#B26205"
                backgroundColor="#FFF9E6"
            />
        </PortfolioContainer>
    );
};

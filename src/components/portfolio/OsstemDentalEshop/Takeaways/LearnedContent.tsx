import { NumberListText } from '../../../listText';
import { PortfolioContainer } from '../../PortfolioContainer';

export const LearnedContent = () => {
    return (
        <PortfolioContainer>
            <NumberListText
                number={1}
                textTitle="The importance of understanding target needs and behavior patterns"
                text={[
                    'As this app was created to sell products for a specific industry, it was essential to first \
                    understand the needs and pain points of the target audience, specifically dentists, and what \
                    features would be most useful to them.',
                    'This required listening to complaints from dentists, as well as dental suppliers and \
                    competitors. Additionally, it was necessary to continuously collect feedback from the target \
                    audience after the wireframe was developed. ',
                    'Through this process, I learned the importance of understanding target needs and behavior \
                    patterns, as well as the importance of user testing.',
                ]}
                numberColor="#B26205"
                backgroundColor="#FFF9E6"
                listSpacing={1.4}
            />
            <NumberListText
                number={2}
                textTitle="The importance of understanding the company's internal sales system"
                text={[
                    'For this particular app, although an e-commerce platform did not already exist, the company had \
                    already established relationships with customers through face-to-face interactions and had been \
                    selling products for a long time. ',
                    "Therefore, it was important to consider how to bring existing customers into the new e-commerce app \
                    rather than just targeting new customers. This required thoughtful consideration of how to seamlessly \
                    integrate the company's existing systems into the new app and how to design the app to help customers \
                    adapt to the new purchasing method without difficulty. ",
                    "Through this process, it was necessary to understand the company's internal sales system and to \
                    understand the specific aspects and purchasing patterns of how customers make orders when making purchases.",
                ]}
                numberColor="#B26205"
                backgroundColor="#FFF9E6"
                listSpacing={1.4}
            />
            <NumberListText
                number={3}
                textTitle="Gaining Insight into Unique Requirements and Challenges of a Specific Industry"
                text={[
                    'While creating an e-commerce application for the dental industry, I gained valuable insights \
                    into the unique requirements and challenges of this particular sector.',
                    'This allowed me to develop a tailored solution that better meets the needs of dental \
                    professionals, as opposed to a more generalized e-commerce platform.',
                ]}
                numberColor="#B26205"
                backgroundColor="#FFF9E6"
                listSpacing={1.4}
            />
        </PortfolioContainer>
    );
};

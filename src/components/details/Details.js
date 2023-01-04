import DetailsData from './DetailsData';
import image2 from '../../assets/images/second.jpg';
import image3 from '../../assets/images/third.jpg';
import image4 from '../../assets/images/fourth.jpg';
import image5 from '../../assets/images/fifth.jpg';

import './Details.css';

const Details = () => {
    return(
        <div className="details">
            <h1>Welcome to Osnat</h1>
            <p>Osnat, is an emerging company engaged in the manufacturing and supply of variety of 
                specialized medicines. It is founded by a highly experienced entrepreneurial team in the 
                year 2020. The organization has a great start due to its subject expertise, high-quality 
                products and business ethics.
            </p>

            <DetailsData
                cName="first-det"
                heading="Infrastructure Unit"
                text="Osnat pharmaceuticals ensures the latest equipment, machinery and innovative processes for the 
                manufacture of world-class pharmaceutical products. Our state-of-the-art manufacturing plants 
                make us the leading contract manufacturer of pharmaceutical products in India and allow us 
                to deliver standardized medicines to clinicians worldwide. As a leading contract production 
                firm, we have built up a major infrastructure plant on our premises. Our infrastructure is 
                well-equipped with state-of-the-art machining technology. A sophisticated infrastructure is 
                very important for every Pharma Manufacturing business. Thus, while bearing in mind the value 
                of high-tech infrastructure services, we have set up a manufacturing unit capable of achieving 
                full output within a minimum timeframe."
                image2={image2}
                image3={image3}
            />
            <DetailsData 
                cName="first-det-reverse"
                heading="Osnat Franchise"
                text="Osnat Pharmaceuticals has emerged as one of the best PCD Pharma companies in India, 
                especially for our reliable manufacturing facilities and timely deliveries of high-quality 
                medical products. With the Monopoly Pharma Franchise program, we at Osnat pharmaceuticals 
                provide the opportunity to regional drug sellers and distributors with monopoly rights. 
                We make sure that our excellent range of healthcare products, including Antibiotics, Analgesics, 
                Gynae Care, Nutraceuticals, Injectables, Syrups/Suspensions, and various Ayurvedic preparations, 
                reaches every corner of our nation through effective distribution and marketing processes."
                image2={image4}
                image3={image5}
            />
        </div>
    );
}

export default Details;
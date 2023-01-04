import OurProductsData from './OurProductsData';
import product1 from '../../assets/images/fifth.jpg';
import product2 from '../../assets/images/second.jpg';
import product3 from '../../assets/images/third.jpg';

import './OurProducts.css';

function OurProducts(){
    return(
        <div className="product">
            <h1>Our Products</h1>
            <p>High quality Osnat pharmaceutical and herbal drugs are endorsed by the nation's best 
                hospitals and physicians. We have a wide variety of pharmaceutical drugs that are 
                specially designed to satisfy the medical needs of society.
            </p>
            <div className="product-card">
                <OurProductsData 
                    image={product1}
                    heading="medicine1"
                    paragraph="this is the description of the medicine"
                    url="/products/pharma"
                    btnClass="btn-style"
                    btnText="Pharma"
                />
                <OurProductsData 
                    image={product2}
                    heading="medicine2"
                    paragraph="this is the description of the medicine and this this is the description of the medicine and this"
                    url="/products/ayurveda"
                    btnClass="btn-style"
                    btnText="Ayurveda"
                />
                <OurProductsData 
                    image={product3}
                    heading="medicine3"
                    paragraph="this is the description of the medicine. premivun procys"
                    url="/products/cosmetic"
                    btnClass="btn-style"
                    btnText="Cosmetic"
                />
            </div>
        </div>
    );
}

export default OurProducts;
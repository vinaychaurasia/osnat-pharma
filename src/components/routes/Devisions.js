import Navbar from '../navbar/Navbar';
import Hero from '../hero/Hero';
import DevisionsImg from '../../assets/images/andreas-m-AizSoIlfKRc-unsplash.jpg';
import Footer from '../footer/Footer';

function Devisions() {
    return(
        <>
            <Navbar />
            <Hero 
                cName="hero"
                heroImg={DevisionsImg}
                title="Our Devisions"
                text="Pharma | Ayurveda | Cosmetic"
                btnClass="hide"
            />
            <Footer />
        </>
    )
}

export default Devisions;
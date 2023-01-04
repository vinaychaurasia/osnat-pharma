import Navbar from '../navbar/Navbar';
import Hero from '../hero/Hero';
import Footer from '../footer/Footer';
import AboutUs from '../aboutUs/AboutUs';

function About() {
    return(
        <>
            <Navbar />
            <Hero 
                cName="hero-mid"
                heroImg="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80"
                title="Third party manufacturing | PCD pharma franchise"
                text="Running on the path to provide quality products."
                btnClass="hide"
            />
            <AboutUs />
            <Footer />
        </>
    )
}

export default About;
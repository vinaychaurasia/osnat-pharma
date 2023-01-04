import Navbar from '../navbar/Navbar';
import Hero from '../hero/Hero';
import Footer from '../footer/Footer';
import AllServices from '../allServices/AllServices'

function Services() {
    return(
        <>
            <Navbar />
            <Hero 
                cName="hero"
                heroImg="https://images.unsplash.com/photo-1619551964399-dad708b59b8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                title="Osnat provides a variety of services"
                text="Third party manufacturing | Generic products | Ayurvedic products | 
                Pharmaceutical products"
                btnClass="hide"
            />
            <AllServices />
            <Footer />
        </>
    )
}

export default Services;
import Details from '../details/Details';
import Footer from '../footer/Footer';
import Hero from '../hero/Hero';
import Navbar from '../navbar/Navbar';
import OurProducts from '../ourProducts/OurProducts';

function Home() {
    return(
        <>
            <Navbar />
            <Hero 
                cName="hero"
                heroImg="https://images.unsplash.com/photo-1619551964399-dad708b59b8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                title="Welcome to Osnat Pharmaceuticals"
                text="We care for you by providing quality products"
                btnText="See Our Products"
                url="/products"
                btnClass="show"
            />
            <Details />
            <OurProducts />
            <Footer />
        </>
    )
}

export default Home;
import Navbar from '../navbar/Navbar';
import Hero from '../hero/Hero';
import Footer from '../footer/Footer';
import OurProducts from '../ourProducts/OurProducts';

function Products() {
    return(
        <>
            <Navbar />
            <Hero 
                cName="hero"
                heroImg="https://images.unsplash.com/photo-1573883430697-4c3479aae6b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                title="You can beleive Osnat products"
                text="Quality has been our priority from the beginning. Our professionals use the 
                    best quality ingredients in the formulation of the offered Pharmaceutical Medicines."
                btnClass="hide"
            />
            <OurProducts />
            <Footer />
        </>
    )
}

export default Products;
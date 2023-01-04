import Navbar from '../navbar/Navbar';
import Hero from '../hero/Hero';
import Footer from '../footer/Footer';
import ContactForm from '../contactForm/ContactForm';
import contactImage from '../../assets/images/contact.jpg';

function Contact() {
    return(
        <>
            <Navbar />
            <Hero 
                cName="hero"
                heroImg={contactImage}
                title="How can we help you ?"
                text="Feel free to contact us by telephone or email."
                btnClass="hide"
            />
            <ContactForm />
            <Footer />
        </>
    )
}

export default Contact;
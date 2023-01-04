import './ContactForm.css';

function ContactForm(){
    return(
        <div className="form-container">
            <h1>Send a message to us!</h1>
            <form>
                <input placeholder="Name" />
                <input placeholder="Email" />
                <input placeholder="Phone" />
                <input placeholder="City" />
                <input placeholder="Do you have GST number" />
                <input placeholder="Do you have drug license number" />
                <textarea placeholder="Message...   " rows="4"></textarea>
                <button>Send Message</button>
            </form>

        </div>
    );
}

export default ContactForm;
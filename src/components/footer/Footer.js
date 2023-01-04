import './Footer.css';

function Footer(){
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Osnat</h1>
                    <p>Manufacturing Supplying and Trader of a broad range of Pharmaceutical Tablets, Pharmaceutical Capsules, Pharmaceutical Injections, Pharmaceutical Syrups, Pharmaceutical Cream, Cosmetics etc.</p>
                </div>
                <div>
                    <a href='https://www.facebook.com/profile.php?id=100071177678824' 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href='https://www.instagram.com/osnatpharmaceuticals/' 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href='/'>
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>
            </div>

            <div className="bottom">
                <div>
                    <h4>Address</h4>
                    <p>#379/A, PLOT NO-108,</p>
                    <p>SECTOR-39 WEST MALOYA,</p>
                    <p>Chandigarh-160101, India</p>
                </div>
                <div>
                    <h4>Contacts</h4>
                    <p>Email: osnatpharma@gmail.com</p>
                    <p>Ph: +917888399872</p>
                    <p>Ph: +917888972479</p>
                </div>
                <div>
                    <form></form>
                </div>
            </div>
        </div>
    );
}

export default Footer;
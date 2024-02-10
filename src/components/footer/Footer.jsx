import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <nav className="footer-nav">
                <ul className="quick-links">
                    <li><Link to="/about" className='quick-link'>About</Link></li>
                    <li><Link to="/postpartum-care" className='quick-link'>Postpartum Care</Link></li>
                    <li><Link to="/spa" className='quick-link'>Spa</Link></li>
                    <li><Link to="/salon" className='quick-link'>Salon</Link></li>
                    <li><Link to="/Birth-classes" className='quick-link'>Birth Classes</Link></li>
                    <li><Link to="/makeupstudio" className='quick-link'>Makeup Studio</Link></li>
                </ul>
            </nav>
            <div className="social-media">
                <p>Follow us on social media:</p>
                <ul className="social-icons">
                    <li><a href="https://facebook.com"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                    <li><a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Kuzala. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

import  { useState } from 'react';
import './Nav.css';
import LOGO from '../../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleBooking = () => {
        window.open('https://api.whatsapp.com/send?phone=+254712345678', '_blank');
    };

    return (
        <nav className="nav">
            <div className="logo">
                <img src={LOGO} alt="Kuzala Logo " />
            </div>

            <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
                {isOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
            </div>

            <ul className={`navigation ${isOpen ? 'open' : ''} relative left-[6rem] top-[0.5rem]`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/postpartum-care">Postpartum Care</Link></li>
                <li><Link to="/birth-support">Birth Support</Link></li>
                <li><Link to="/birth-classes">Birth Classes</Link></li>
                <li><Link to="/prenatal-massage"> Prenatal Massage</Link></li>
            </ul>
            <button className="booking-button" onClick={handleBooking}>Book Now</button>
        </nav>
    );
};

export default Nav;

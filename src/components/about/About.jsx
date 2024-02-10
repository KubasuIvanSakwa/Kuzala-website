import { Link } from 'react-router-dom';
import './About.css';

export default function About() {
  return (
    <div className="about-wrapper">
      <section className="about">
          <div className="about-heading">
            <Link to="/home" className='text-2xl'>Home</Link>
            <span className="separator text-green-500 text-2xl "> {'>'} </span>
            <Link to="/about" className='text-2xl'>About Us</Link>
          </div>
      </section>


  <section className="about-content">
  <div className="about-text">
    <h2 className="about-heading">About Us</h2>
    <p className="about-description">
      Welcome to Kuzula Doula, where your journey through motherhood is our passion and purpose. With a legacy spanning over a decade, we&apos;ve been dedicated to empowering mothers with comprehensive care and unwavering support since our inception.
    </p>

    <p className="about-description">Founded ten years ago, Kuzula Doula emerged from a heartfelt commitment to redefine the maternal wellness landscape. Our founders, driven by a profound desire to enhance the childbirth experience, embarked on a mission to provide holistic support to expectant and new mothers alike.</p>
    
    <p className="about-description">
    From prenatal preparation to postpartum recovery, our range of services is tailored to meet your unique needs. Whether you&apos;re seeking expert guidance during childbirth, soothing prenatal massages, or nurturing postpartum care, our team of compassionate doulas is here to support you with personalized care and attention.
    </p>

    <p className="about-description">
    We invite you to experience the Kuzula Doula difference and embark on a journey of maternal wellness like no other. Let us be your guiding light as you navigate the beautiful and rewarding path of motherhood.
    </p>


  </div>
</section>

    </div>
  );
}

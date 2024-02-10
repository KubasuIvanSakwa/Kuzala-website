import SERVICE1 from '../../assets/service1.png';
import SERVICE2 from '../../assets/service2.png';
import SERVICE3 from '../../assets/service3.png';
import SERVICE4 from '../../assets/service4.png';
import SERVICE5 from '../../assets/service5.png';
import './Services.css';

const Services = () => {
  return (
    <div className='services'>
            <h1>Our Services</h1>

    <div className="services-wrapper">
      <div className='service'>
        <h2>Postpartum Care</h2>
        <button className='service-btn'>Learn More</button>
        <img src={SERVICE1} alt="Postpartum Care" className='service-img' />
      </div>

      <div className='service'>
        <h2>Spa</h2>
        <button className='service-btn'>Learn More</button>
        <img src={SERVICE2} alt="Spa" className='service-img'/>
      </div>

      <div className='service'>
        <h2>Salon</h2>
        <button className='service-btn'>Learn More</button>
        <img src={SERVICE3} alt="Salon" className='service-img'/>
      </div>

      <div className='service'>
        <h2>Birth Classes</h2>
        <button className='service-btn'>Learn More</button>
        <img src={SERVICE4} alt="Birth Classes" className='service-img' />
      </div>

      <div className='service'>
        <h2>Makeup Studio</h2>
        <button  className='service-btn'>Learn More</button>
        <img src={SERVICE5} alt="Makeup Studio" className='service-img'/>
      </div>

      <div className='service'>
        <h2>Spa</h2>
        <button  className='service-btn'>Learn More</button>
        <img src={SERVICE2} alt="Spa" className='service-img'/>
      </div>
    </div>
    </div>

  );
};

export default Services;

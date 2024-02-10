import './ourwork.css'
import OURWORK1 from '../../assets/service1.png'
import OURWORK2 from '../../assets/service2.png'
import OURWORK3 from '../../assets/service3.png'
import OURWORK4 from '../../assets/service4.png'
import OURWORK5 from '../../assets/service5.png'
const OurWork = () => {
  return (
    <div className="our-work">
    <h1>Our Work</h1>
      <div className="our-work-wrapper">
        <div className="our-work-card">
        <img src={OURWORK1} alt="Our Work 1" />
        </div>
        <div className="our-work-card">
        <img src={OURWORK2} alt="Our Work 2" />
        </div>
        <div className="our-work-card">
        <img src={OURWORK3} alt="Our Work 3" />
        </div>
        <div className="our-work-card">
        <img src={OURWORK4} alt="Our Work 4" />
        </div>
        <div className="our-work-card">
        <img src={OURWORK5} alt="Our Work 5" />
        </div>
        <div className="our-work-card">
        <img src={OURWORK4} alt="Our Work 4" />
        </div>
        <div className="our-work-card">
        <img src={OURWORK5} alt="Our Work 5" />
        </div>
        <div className="our-work-card">
        <img src={OURWORK1} alt="Our Work 1" />
        </div>

      </div>
    

    </div>
  )
}

export default OurWork

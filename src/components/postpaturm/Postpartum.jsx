import PageSkeleton from "../PageSkeleton"
import OURWORK1 from '../../assets/service1.png'
import OURWORK2 from '../../assets/service2.png'
import OURWORK3 from '../../assets/service3.png'
import OURWORK4 from '../../assets/service4.png'

const Postpartum = () => {
  return (
    <PageSkeleton 
      title={'Postpartum'}
      image1={OURWORK1}
      image2={OURWORK2}
      image3={OURWORK3}
      image4={OURWORK4}
      description1={'Welcome to Kuzula Doula, where your journey through motherhood is\
            our passion and purpose. With a legacy spanning over a decade,\
            we&apos;ve been dedicated to empowering mothers with comprehensive\
            care and unwavering support since our inception.'}
    />
  )
}

export default Postpartum

import PageSkeleton from "../PageSkeleton"
import ps1 from '../../assets/ps4.webp'
import ps2 from '../../assets/ps3.jpg'
import ps3 from '../../assets/ps2.webp'
import ps4 from '../../assets/ps5.jpeg'

const Postpartum = () => {
  return (
    <PageSkeleton 
      title={'Postpartum'}
      image1={ps1}
      image2={ps2}
      image3={ps3}
      image4={ps4}
      description1={'Welcome to Kuzula Doula, where your journey through motherhood is\
            our passion and purpose. With a legacy spanning over a decade,\
            we&apos;ve been dedicated to empowering mothers with comprehensive\
            care and unwavering support since our inception.'}
    />
  )
}

export default Postpartum

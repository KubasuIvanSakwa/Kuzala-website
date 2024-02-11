import PageSkeleton from "../PageSkeleton"
import cl1 from '../../assets/cl1.webp'
import cl2 from '../../assets/cl2.jpg'
import cl3 from '../../assets/cl3.jpeg'
import cl4 from '../../assets/cl4.jpg'

const BirthClasses = () => {
  return (
    <PageSkeleton 
      image1={cl1}
      image2={cl2}
      image3={cl3}
      image4={cl4}
    title={'Birth Classes'}
    description1={'Welcome to Kuzula Doula, where your journey through motherhood is\
          our passion and purpose. With a legacy spanning over a decade,\
          we&apos;ve been dedicated to empowering mothers with comprehensive\
          care and unwavering support since our inception.'}
  />
  )
}

export default BirthClasses

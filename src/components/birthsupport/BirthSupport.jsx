import PageSkeleton from "../PageSkeleton";
import s1 from '../../assets/sp1.jpg'
import s2 from '../../assets/sp2.avif'
import s3 from '../../assets/sp3.jpg'
import s4 from '../../assets/sp4.jpg'

function BirthSupport() {
return (
    <PageSkeleton
        title={"Birth Support"}
        image1={s1}
        image2={s2}
        image3={s3}
        image4={s4}
        description1={
            "Welcome to Kuzula Doula, where your journey through motherhood is\
            our passion and purpose. With a legacy spanning over a decade,\
            we&apos;ve been dedicated to empowering mothers with comprehensive\
            care and unwavering support since our inception."
        }
    />
);
}

export default BirthSupport;

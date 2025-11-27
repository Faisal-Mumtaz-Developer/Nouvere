import Testimonial from '../components/Testimonial'
import CTA from '../components/CTA'
import ServiceCard from '../components/ServiceCard'
const Services = () => {
  return (
    <>
    <div className='p-12 text-center'>
        <h4 className='text-[45px] font-semibold text-white'>Our Services</h4>
        <p className='text-[22px] text-white'>Comprehensive digital solutions to transform your business and drive exceptional results</p>
    </div>

    <div>
        <ServiceCard />
    </div>
    <Testimonial />
    <CTA />
    </>
  )
}

export default Services
import Button from '../components/Button';
import {shoe8} from '../assets/images';
import { motion } from 'framer-motion';
const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold capitalize lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super </span>
          <span className="text-coral-red">Quality</span> Shoes
        </h2>
        <p className="lg-max-w-lg mt-4 info-text">
        At Oja, we prioritize your comfort and style. Our meticulously crafted shoes offer unmatched quality, innovation, and a touch of elegance. Step confidently into a world where each pair is designed to elevate your experience – because your every step deserves exceptional quality.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>Our commitment goes beyond shoes, aiming for confident, sophisticated strides in every pair, where your satisfaction is paramount.</p>
        <div className='mt-11'>
        <Button label='View details'/>
        </div>
      </div>

      <div className='flex flex-1 justify-center items-center'>
        <motion.img  initial={{opacity: 0, scale: 0}} whileInView={{opacity: 1, scale: 1}} whileHover={{scale: 1.2}} src={shoe8} alt="" width={540} height={522} className='object-contain'/>
      </div>
    </section>
  )
}

export default SuperQuality
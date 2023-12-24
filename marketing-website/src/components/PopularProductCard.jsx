import { star } from "../assets/icons"
import { motion } from "framer-motion"

const PopularProductCard = ({imgURL, name, price, rating}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ rotate: 360, scale: 1 }}
        viewport={{once: true}}
        transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
    }}>
        <motion.img whileHover={{scale: 1.2}} src={imgURL} alt={name} className="w-[280px] h-[280px] " />
        <div className="mt-8 flex justify-start gap-2.5">
            <motion.img whileHover={{rotate: 180}} src={star} alt="rating" width={24} height={24}/>
            <p className="text-xl font-montserrat leading-normal text-slate-gray">({rating})</p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
        <p className="mt-2 font-semibold font-montserrat  leading-normal text-coral-red ">{price}</p>
        </motion.div>
    </div>
  )
}

export default PopularProductCard
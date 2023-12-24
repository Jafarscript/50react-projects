import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {

  // console.log(products)
  return (
    <section id="product" className="max-container max-sm:mt-12 " >
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Popular</span> Products</h2>
        <p className="lg-max-w-lg mt-2 font-montserrat text-slate-gray">Step into a World of Style: Discover Our Exclusive Footwear Collection! Elevate Your Every Step with Trendsetting Designs, Impeccable Quality, and Unmatched Comfort. Find Your Perfect Pair Today!</p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product}>

          </PopularProductCard>
        ))}
      </div>
    </section>
  )
}

export default PopularProducts
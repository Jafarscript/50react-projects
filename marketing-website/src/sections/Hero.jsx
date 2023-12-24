import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCar from "../components/ShoeCar";
import { motion } from "framer-motion";

import { useState } from "react";

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row justify-center min-h-screen gap-10 max-container flex-col"
    >
      <div className="relative xl:w-2/5 flex  flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative lg:z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Oja </span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Oja arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Show now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stats) => (
            <div key={stats.label}>
              <p className="text-4xl font-palanquin font-bold">{stats.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stats.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <motion.img
          whileHover={{ rotate: 90 }}
          src={bigShoeImage}
          alt="first shoe"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <motion.div
              key={shoe.id}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%",
              }}
            >
              <ShoeCar
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImage(shoe)}
                bigShoeImg={bigShoeImage}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

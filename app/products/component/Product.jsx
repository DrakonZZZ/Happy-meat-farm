'use client';

import { productData } from '@/data/productData';
import { motion } from 'framer-motion';

const Product = () => {
  return (
    <motion.div
      variants={animeOpacity}
      initial="initial"
      animate="open"
      exit="close"
      className="h-full flex flex-col md:flex-row justify-evenly"
    >
      <div className="md:flex flex-col justify-center md:w-1/3 mb-6 md:mb-0">
        <div className="border-l-4 border-secondary">
          <h2 className="text-4xl lg:text-6xl font-semibold uppercase pl-4">
            <span className="block">Product</span>
            <span className="block">And</span>
            <span className="block">Services</span>
          </h2>
        </div>
        <p className="text-ternary/80 pl-4 md:w-1/2">
          See how Happy Meat Farms is shaping a new world in the meat industry.
        </p>
      </div>

      <div>
        <div className="w-full grid lg:grid-cols-1 xl:grid-cols-2 gap-4">
          {productData.map((data) => {
            const { id, title, content } = data;
            return (
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: '-30px' },
                  visible: { opacity: 1, x: '0' },
                }}
                transition={{ delay: 0.3 * id, duration: 0.5 }}
                initial="hidden"
                animate="visible"
                key={id}
                className="w-fit md:w-[450px] p-8 divide-x border-2 border-ternary/30 "
              >
                <h3 className="text-2xl md:text-2xl xl:text-4xl font-semibold mb-2 uppercase">
                  {title}
                </h3>
                <p className="text-ternary font-sm">{content}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

const animeOpacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.25,
      ease: 'easeIn',
      delay: 0.5,
    },
  },
  close: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default Product;

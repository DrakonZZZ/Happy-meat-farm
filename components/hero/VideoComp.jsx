import Image from 'next/image';
import fieldView from '../../public/images/view.jpg';
import { PiPottedPlant, PiFlask, PiTruckDuotone } from 'react-icons/pi';
import Player from './Player';
import Link from 'next/link';
import { motion } from 'framer-motion';

const VideoComp = () => {
  return (
    <motion.div
      variants={animeOpacity}
      initial="initial"
      animate="open"
      exit="close"
      className="w-full h-full flex flex-col-reverse md:flex-col gap-6 mt-6"
    >
      <div className="bg-ternary h-full flex flex-col lg:flex-row rounded-2xl p-4 gap-4 shadow-inner">
        <div className="w-full md:h- flex flex-col md:flex-row gap-4">
          <div className="flex flex-row md:flex-col gap-2 w-full md:max-w-[14rem]">
            <motion.span
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative w-full h-full
          flex items-center bg-secondary p-2 rounded-lg overflow-clip box-shadow"
            >
              <PiPottedPlant
                size={80}
                className="absolute right-[-20px] text-[#264944] opacity-25"
              />
              <p className="text-md lg:text-xl md:font-semibold opacity-75">
                Organic Products
              </p>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.62 }}
              className="relative w-full h-full flex items-center bg-secondary p-2 rounded-lg overflow-clip box-shadow"
            >
              <PiFlask
                size={80}
                className="absolute right-[-20px] text-[#264944] opacity-25"
              />
              <p className="text-md  lg:text-xl md:font-semibold opacity-75">
                Research & Development
              </p>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.64 }}
              className="relative w-full h-full flex items-center bg-secondary p-2 rounded-lg overflow-clip box-shadow"
            >
              <PiTruckDuotone
                size={80}
                className="absolute right-[-20px] text-[#264944] opacity-25"
              />
              <p className="text-md  lg:text-xl md:font-semibold opacity-75">
                Logistics & Equipment
              </p>
            </motion.span>
          </div>
          <div className="flex flex-col-reverse w-full">
            <div className="">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary  mb-4 py-2">
                A farm you can trust
              </h3>
              <p className="md:text-md opacity-75">
                We don't see problems as problems, we see problems as future
                solutions. Happy Meat Farms is dedicated to making the
                healthiest, most humane meat based products on the market. Where
                others cut corners to make a profit, we strive to innovate and
                revolutionize the farming process. Experience tomorrow's future
                today
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.66 }}
              className=" relative w-full flex-1"
            >
              <Image
                src={fieldView}
                alt="about-us-image"
                fill={true}
                style={{ objectFit: 'cover', borderRadius: '12px' }}
              />
              <Link href="/about">
                <span className="arrow absolute flex items-center gap-3 bottom-1 right-2 bg-[#112421] text-[#91A884] py-2 px-3 rounded-lg text-sm font-bold cursor-pointer hover:text-[#112421] hover:bg-[#91A884] transition">
                  About Us
                </span>
              </Link>
            </motion.div>
          </div>
          <Player />
        </div>
      </div>
    </motion.div>
  );
};

const animeOpacity = {
  initial: {
    opacity: 0,
    scale: 1.1,
  },
  open: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeIn',
      delay: 0.2,
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

export default VideoComp;

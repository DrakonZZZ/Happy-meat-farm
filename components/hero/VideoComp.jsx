import Image from 'next/image';
import fieldView from '../../public/images/view.jpg';
import { PiPottedPlant, PiFlask, PiTruckDuotone } from 'react-icons/pi';
import Player from './Player';

const VideoComp = () => {
  return (
    <div className="w-full h-full flex flex-col-reverse md:flex-col gap-6 mt-6">
      <div className="bg-ternary h-full flex flex-col md:flex-col rounded-2xl p-4 gap-4 shadow-inner">
        <Player />
        <div className="w-full flex flex-col md:flex-row gap-4">
          <div className="flex flex-row md:flex-col gap-2 w-full md:w-1/4">
            <span
              className="relative w-full h-full
          flex items-center bg-secondary p-2 rounded-lg overflow-clip box-shadow"
            >
              <PiPottedPlant
                size={80}
                className="absolute right-[-20px] text-[#264944] opacity-25"
              />
              <p className="text-sm md:text-xl md:font-semibold opacity-75">
                Organic Products
              </p>
            </span>
            <span className="relative w-full h-full flex items-center bg-secondary p-2 rounded-lg overflow-clip box-shadow">
              <PiFlask
                size={80}
                className="absolute right-[-20px] text-[#264944] opacity-25"
              />
              <p className="text-sm md:text-lg md:font-semibold opacity-75">
                Research & Development
              </p>
            </span>
            <span className="relative w-full h-full flex items-center bg-secondary p-2 rounded-lg overflow-clip box-shadow">
              <PiTruckDuotone
                size={80}
                className="absolute right-[-20px] text-[#264944] opacity-25"
              />
              <p className="text-sm md:text-lg md:font-semibold opacity-75">
                Logistics & Equipment
              </p>
            </span>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-3xl md:text-6xl font-semibold text-secondary  mb-4">
              A farm you can trust
            </h3>
            <p className="opacity-75">
              We don't see problems as problems, we see problems as future
              solutions. Happy Meat Farms is dedicated to making the healthiest,
              most humane meat based products on the market. Where others cut
              corners to make a profit, we strive to innovate and revolutionize
              the farming process. Experience tomorrow's future today
            </p>
          </div>
          <div className=" relative w-full flex-auto">
            <Image
              src={fieldView}
              alt="about-us-image"
              fill={true}
              style={{ objectFit: 'cover', borderRadius: '12px' }}
            />
            <span className="arrow absolute flex items-center gap-3 bottom-1 right-2 bg-[#112421] text-[#91A884] py-2 px-3 rounded-lg text-sm font-bold cursor-pointer hover:text-[#112421] hover:bg-[#91A884] transition">
              About Us
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoComp;

import Image from 'next/image';
import fieldView from '../../public/images/view.webp';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { PiPottedPlant, PiFlask, PiTruckDuotone } from 'react-icons/pi';

const VideoComp = () => {
  return (
    <div className="flex w-full flex-col-reverse md:flex-row gap-6 mt-6">
      <div className="bg-[#112421] flex flex-col md:flex-row rounded-2xl p-4 gap-4">
        <div className="w-full flex flex-col justify-evenly md:pr-4">
          <div>
            <h3 className="text-3xl md:text-6xl font-semibold text-[#91A884] shadow-sm mb-4">
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

          <div className="relative w-full h-[200px] md:h-full mt-8">
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

        <div className="flex flex-row md:flex-col gap-2 w-full md:w-1/4">
          <span
            className="relative w-full h-full
          flex items-center bg-[#18332F] p-2 rounded-lg overflow-clip"
          >
            <PiPottedPlant
              size={80}
              className="absolute right-[-20px] text-[#264944] opacity-25"
            />
            <p className="text-sm md:text-xl md:font-semibold opacity-75">
              Organic Products
            </p>
          </span>
          <span className="relative w-full h-full flex items-center bg-[#18332F] p-2 rounded-lg overflow-clip">
            <PiFlask
              size={80}
              className="absolute right-[-20px] text-[#264944] opacity-25"
            />
            <p className="text-sm md:text-lg md:font-semibold opacity-75">
              Research & Development
            </p>
          </span>
          <span className="relative w-full h-full flex items-center bg-[#18332F] p-2 rounded-lg overflow-clip">
            <PiTruckDuotone
              size={80}
              className="absolute right-[-20px] text-[#264944] opacity-25"
            />
            <p className="text-sm md:text-lg md:font-semibold opacity-75">
              Logistics & Equipment
            </p>
          </span>
        </div>
      </div>
      <div className="relative">
        <video
          preload="none"
          autoPlay
          playsInline={true}
          muted
          loop
          src="https://video.wixstatic.com/video/e08edd_16408b179beb47fa98f28fd9de1cfebe/1080p/mp4/file.mp4"
          className="rounded-2xl"
        ></video>
        <span className="arrow absolute flex items-center gap-3 top-2 right-2 bg-[#112421] text-[#91A884] py-2 px-3 rounded-2xl text-sm font-bold cursor-pointer hover:text-[#112421] hover:bg-[#91A884] transition">
          Watch
          <BsFillArrowRightCircleFill size={26} />
        </span>
      </div>
    </div>
  );
};

export default VideoComp;

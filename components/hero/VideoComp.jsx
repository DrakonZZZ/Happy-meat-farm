import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { PiPottedPlant, PiFlask, PiTruckDuotone } from 'react-icons/pi';

const VideoComp = () => {
  return (
    <div className="flex w-full flex-col-reverse md:flex-row gap-6 mt-6">
      <div className="bg-[#112421] flex flex-col md:flex-row justify-evenly rounded-2xl p-4">
        <div className="p-2 w-full md:w-3/4">
          <h3 className="text-3xl md:text-7xl font-semibold text-[#91A884] shadow-sm mb-4">
            A farm you can trust
          </h3>
          <p className="opacity-75">
            Our perspective doesn't categorize problems as obstacles, but rather
            as opportunities to find solutions. At Happy Meat Farms, our
            unwavering commitment is to produce the healthiest and most
            ethically raised meat products on the market. In an industry where
            cutting corners for profit is common, we stand apart by prioritizing
            innovation and reinventing farming practices. We invite you to be
            part of the journey to experience the future today, where quality
            and ethics converge.
          </p>
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
            <p className="text-sm md:text-lg">Organic Products</p>
          </span>
          <span className="relative w-full h-full flex items-center bg-[#18332F] p-2 rounded-lg overflow-clip">
            <PiFlask
              size={80}
              className="absolute right-[-20px] text-[#264944] opacity-25"
            />
            <p className="text-sm md:text-lg">Research & Development</p>
          </span>
          <span className="relative w-full h-full flex items-center bg-[#18332F] p-2 rounded-lg overflow-clip">
            <PiTruckDuotone
              size={80}
              className="absolute right-[-20px] text-[#264944] opacity-25"
            />
            <p className="text-sm md:text-lg">Logistics & Equipment</p>
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

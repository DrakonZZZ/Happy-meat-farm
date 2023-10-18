import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const VideoComp = () => {
  return (
    <div className="w-full flex gap-6 mt-6">
      <div className="bg-[#112421]  rounded-2xl p-8">
        <h3 className="text-6xl font-bold text-[#91A884] shadow-sm mb-4">
          A farm you can trust
        </h3>
        <p className="">
          We don't see problems as problems, we see problems as future
          solutions. Happy Meat Farms is dedicated to making the healthiest,
          most humane meat based products on the market. Where others cut
          corners to make a profit, we strive to innovate and revolutionize the
          farming process. Experience tomorrow's future today.
        </p>
        <div></div>
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

import Image from 'next/image';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import thumbnail from '../../public/images/thumbnail.png';

const Player = () => {
  return (
    <div className="relative">
      {/* <video
        preload="none"
        autoPlay
        playsInline={true}
        muted
        loop
        src="https://video.wixstatic.com/video/e08edd_16408b179beb47fa98f28fd9de1cfebe/1080p/mp4/file.mp4"

      ></video> */}
      <Image
        src={thumbnail}
        alt="video thumbnail"
        className="rounded-2xl w-full h-full"
        style={{ objectFit: 'cover' }}
      />
      <span className="arrow absolute flex items-center gap-3 bottom-4 right-4 bg-[#112421] text-ternary py-2 px-1 md:py-2 md:px-3 rounded-2xl text-xs md:text-sm font-bold cursor-pointer hover:text-[#112421] hover:bg-[#91A884] transition">
        Watch
        <BsFillArrowRightCircleFill size={20} />
      </span>
    </div>
  );
};

export default Player;

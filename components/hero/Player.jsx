import Image from 'next/image';
import { useState } from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import thumbnail from '../../public/images/thumbnail.png';
import { motion } from 'framer-motion';
import { RxCross2 } from 'react-icons/rx';

const Player = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.68 }}
      className="relative"
    >
      <Image
        src={thumbnail}
        alt="video thumbnail"
        className="rounded-2xl w-full h-full cursor-pointer"
        style={{ objectFit: 'cover' }}
        onClick={toggleModal}
      />
      <span
        onClick={toggleModal}
        className="arrow absolute flex items-center gap-3 bottom-4 right-4 bg-[#112421] text-ternary py-2 px-1 md:py-2 md:px-3 rounded-2xl text-xs md:text-sm font-bold cursor-pointer hover:text-[#112421] hover:bg-[#91A884] transition"
      >
        Watch
        <BsFillArrowRightCircleFill size={20} />
      </span>

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-start bg-black bg-opacity-75 z-50 p-2 lg:p-8">
          <div className="lg:max-w-[75vw] w-full rounded-2xl p-0 relative">
            <button
              onClick={toggleModal}
              className="mt-4 flex justify-end w-full p-2  text-white rounded-md"
            >
              <RxCross2 size={30} />
            </button>
            <video
              preload="none"
              autoPlay
              playsInline
              controls
              loop
              src="https://video.wixstatic.com/video/e08edd_16408b179beb47fa98f28fd9de1cfebe/1080p/mp4/file.mp4"
              className="w-full rounded-lg"
            ></video>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Player;

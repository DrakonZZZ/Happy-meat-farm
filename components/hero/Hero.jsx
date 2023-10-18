import HeroImage from './HeroImage';
import VideoComp from './VideoComp';

const Hero = () => {
  return (
    <div className="w-full h-[50vh] text-white p-4 mt-10 md:p-8 md:mt-8">
      <HeroImage />
      <VideoComp />
    </div>
  );
};

export default Hero;

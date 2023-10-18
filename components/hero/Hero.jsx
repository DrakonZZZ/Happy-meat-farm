import HeroImage from './HeroImage';
import VideoComp from './VideoComp';

const Hero = () => {
  return (
    <div className="w-full h-full text-white p-4 md:p-8 mt-8">
      <HeroImage />
      <VideoComp />
    </div>
  );
};

export default Hero;

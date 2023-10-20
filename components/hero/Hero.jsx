import HeroImage from './HeroImage';
import News from './News';
import VideoComp from './VideoComp';

const Hero = () => {
  return (
    <div className="w-full h-full text-white px-4 md:px-8 py-4">
      <HeroImage />
      <VideoComp />
      <News />
    </div>
  );
};

export default Hero;

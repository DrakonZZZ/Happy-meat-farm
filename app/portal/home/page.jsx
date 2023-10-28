import SectionLayout from '../component/SectionLayout';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const page = () => {
  return <SectionLayout pageTitle="Employee Portal" compType={<Home />} />;
};

const Home = () => {
  return (
    <div className="p-2">
      <h2 className="text-zinc-500/60 text-md">
        We're so glad to have you on our team! If you've just recently joined us
        make sure to watch the employee orientation video.
      </h2>
      <div>
        <h3>Employee Orientation</h3>
        <div className="relative pb-[56.25%] h-[0]">
          <video
            preload="none"
            playsInline={true}
            controls
            loop
            src="https://video.wixstatic.com/video/e08edd_4f13ef2d2c354f129d18bc9eb1f3ae36/1080p/mp4/file.mp4"
            className="absolute top-0 left-0 w-full h-full rounded-lg"
          ></video>
        </div>
      </div>
    </div>
  );
};
export default page;

import SectionLayout from '../component/SectionLayout';
import { GiStarShuriken } from 'react-icons/gi';

const page = () => {
  return <SectionLayout pageTitle="Employee Portal" compType={<Home />} />;
};

const benefits = [
  "The knowledge that you're making a real difference in making the world a better place.",
  'Access to top of the line Health Insurance',
  'Free mandatory weekly counseling sessions',
  'Knowing that we care about you.',
  'Financial insurance for your family in the event of your untimely demise.',
  'The opportunity to work your way up the company.',
  'Being a part of the New World.',
];

const Home = () => {
  return (
    <div className="p-2">
      <h2 className="text-zinc-500/60 text-md mb-4">
        We're so glad to have you on our team! If you've just recently joined us
        make sure to watch the employee orientation video.
      </h2>
      <span className="text-secondary font-semibold rounded-t-lg text-2xl px-4 py-2  ml-2 bg-ternary/20">
        Employee Orientation
      </span>
      <div className=" bg-ternary p-2 border border-ternary/30 rounded-lg shadow-sm">
        <p className="text-sm mb-2 p-2 text-primary bg-secondary rounded-md shadow-sm">
          Happy Meat Farms was founded in 1998 with the same values it shares
          today. We're so excited to have you as a part of our team and an
          extension of our values. The work at Happy Meat Farms may be
          difficult, but you'll be satisfied knowing that you are part of the
          New World.
        </p>
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
      <div className="mt-4 p-4 border border-ternary/30 ">
        <h2 className="text-secondary text-2xl font-semibold">
          What can HMF do for me?
        </h2>
        <p className="text-ternary/80 text-sm mb-8">
          Being a part of the HMF team gives you access to many different
          benefits!
        </p>
        <ul>
          {benefits.map((item, idx) => {
            return (
              <li
                key={idx}
                className="text-secondary/90 flex items-center gap-2 mb-2"
              >
                <GiStarShuriken className="text-secondary/30" /> {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default page;

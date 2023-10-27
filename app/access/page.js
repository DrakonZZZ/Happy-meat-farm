import meetingImg from '../../public/images/access/meeting.webp';
import Image from 'next/image';
import AccessInput from './component/AccessInput';

const page = () => {
  return (
    <main className="w-full h-full flex-1 flex bg-primary">
      <section className="w-full h-[calc(100vh-165px)] flex flex-col md:flex-row justify-evenly relative">
        <div className="hidden w-full p-4 md:flex flex-col justify-end relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center z-10"></div>
          <Image
            src={meetingImg}
            alt="meeting image"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className=" h-[100%] md:absolute top-0 right-24 flex flex-col justify-between md:w-1/3 p-4 bg-primary z-20 text-right">
          <div>
            <h2 className="text-secondary text-4xl lg:text-5xl xl:text-6xl font-semibold p-4">
              Welcome to the Happy Meat Farms Family
            </h2>
            <h3 className="text-ternary/60 md:text-2xl p-4">
              Happy Meat Farms is a growing community that is continually
              expanding and adding more people to its collective.
            </h3>
          </div>

          <div className="p-4 text-center border border-secondary/40 rounded-md">
            <AccessInput />
            <p className="text-ternary/60 text-md p-4 md:w-full leading-5">
              Current HMF employees can access our employee portal by entering
              your Access card code. Each employee should have a unique HMFID
              code that can give you access to your portal. We look forward to
              working with you!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;

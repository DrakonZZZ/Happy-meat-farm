import { aboutData } from '@/data/aboutData';
import Image from 'next/image';

const AboutBody = () => {
  return (
    <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {aboutData.map((data) => {
        const { id, title, content, src } = data;
        return (
          <div key={id} className="h-full relative">
            <Image
              src={`/images/${src}`}
              alt={title}
              width={400}
              height={400}
              style={{ objectFit: 'cover' }}
              className="w-full h-[400px] md:h-[300px] lg:h-[500px] rounded-xl contrast-125"
            />
            <div>
              <div className="w-full h-full absolute top-0 left-0 p-4 z-10 flex flex-col justify-between">
                <h2 className="text-4xl top-0 font-semibold text-white">
                  {title}
                </h2>
                <p className="h-[80px] w-2/3 font-medium leading-5 text-white opacity-80">
                  {content}
                </p>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black/75 rounded-lg" />
          </div>
        );
      })}
    </div>
  );
};

export default AboutBody;

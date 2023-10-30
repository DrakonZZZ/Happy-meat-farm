import Image from 'next/image';
import { news } from '@/data/newsdata';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const News = () => {
  const newsRef = useRef(null);
  const cardRef = useRef(null);
  const isInView = useInView(newsRef, { once: true });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView]);
  return (
    <div className="mt-8 md:p-4 bg-primary rounded-2xl">
      <motion.h3
        ref={newsRef}
        variants={{
          hidden: { opacity: 0, x: '-100px' },
          visible: { opacity: 1, x: '0' },
        }}
        transition={{ delay: 0.3, duration: 0.5 }}
        initial="hidden"
        animate={controls}
        className="text-6xl font-semibold mb-4 text-secondary"
      >
        News
      </motion.h3>
      <div className="flex flex-col md:flex-row gap-4">
        {news.map((data, idx) => {
          const { id, title, content, date, src } = data;
          return (
            <motion.div
              ref={cardRef}
              key={id}
              variants={{
                hidden: { opacity: 0, x: '-50px' },
                visible: { opacity: 1, x: '0' },
              }}
              transition={{ delay: 0.3 * idx, duration: 0.5 }}
              initial="hidden"
              animate={controls}
              className="h-full md:w-1/3 relative"
            >
              <div>
                <p className="p-1 text-xs font-bold leading-3 absolute top-2 right-2 z-10  rounded-md">
                  {date}
                </p>
                <div className="w-full absolute bottom-0 left-0 p-4 z-10">
                  <h2 className="text-xl font-semibold">{title}</h2>
                  <p className="h-[60px] font-light text-sm leading-4 text-white  opacity-75">
                    {content}
                  </p>
                  <a
                    href="#"
                    className="focus:outline-none focus:underline flex justify-end items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                  >
                    <p className="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      className="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-black/60 rounded-lg" />
              <Image
                src={`/images/${src}`}
                alt={title}
                width={400}
                height={400}
                style={{ objectFit: 'cover', height: '300px' }}
                className="w-full rounded-xl"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default News;

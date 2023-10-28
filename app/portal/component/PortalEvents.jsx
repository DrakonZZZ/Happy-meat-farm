import Image from 'next/image';
import { fakeNews } from '@/data/fakeNews';

const PortalEvents = () => {
  return (
    <section className="border-r border-ternary/30 md:w-[30rem] text-white  rounded-sm p-2">
      <h3 className="text-3xl font-semibold mb-4 text-secondary">
        Recent Fake News
      </h3>
      <p className="text-zinc-500/60 text-md mb-2">
        As many of you know, HMF has been the target of many fake news attacks
        from the media and other sources. We want you to know that these are all
        lies and we're taking action against anyone who stands in our way.
      </p>
      <div className="flex flex-col gap-4 relative">
        {fakeNews.map((data, idx) => {
          const { id, title, content, date, src, sourceStatus, sourceLink } =
            data;

          return (
            <div key={id} className="h-fit relative">
              <div>
                <p className="p-1 text-xs font-bold leading-3 absolute bottom-2 right-2 z-10 rounded-md">
                  {date}
                </p>
                <div className="w-full absolute top left-0 p-4 z-10">
                  <h2 className="md:text-xl lg:text-2xl font-semibold">
                    {title}
                  </h2>
                  <p className="font-light md:text-sm lg:text-md leading-5 opacity-75">
                    {content}
                  </p>
                  {sourceStatus ? (
                    <a
                      href={sourceLink}
                      target="_blank"
                      className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer hover:text-gray-200 hover:underline"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        visit
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
                  ) : null}
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-black/70 rounded-lg" />
              <Image
                src={`/images/${src}`}
                alt={title}
                width={400}
                height={400}
                style={{ objectFit: 'cover', minHeight: '300px' }}
                className="w-full rounded-xl"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PortalEvents;

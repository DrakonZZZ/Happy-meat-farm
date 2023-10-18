import Image from 'next/image';
import plant from '../../public/images/news/planting.webp';

const News = () => {
  return (
    <div className="mt-8 p-4 bg-[#112421] rounded-2xl">
      <h3 className="text-6xl font-semibold mb-4 text-[#91A884]">News</h3>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="sm:w-1/2 h-full md:1/3 relative">
          <div>
            <p className="p-2 text-xs font-bold leading-3 text-[#91A884] absolute top-2 right-2 z-10 bg-[#18332F] rounded-lg">
              July 09 2021
            </p>
            <div className="absolute bottom-0 left-0 p-4 z-10">
              <h2 className="text-xl font-semibold">
                HMF supports the community
              </h2>
              <p className="font-light text-sm leading-4 text-white mt-2 opacity-75">
                As many of you know, HMF inc. has begun supporting the online
                community by sponsoring up and coming creators. We think this is
                a great way to help artists grow and meet new collaborators.
              </p>
              <a
                href="javascript:void(0)"
                className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black rounded-lg" />
          <Image
            src={plant}
            alt="plant"
            style={{ objectFit: 'cover', height: '300px' }}
            className="w-full rounded-xl"
          />
        </div>
        <div className="sm:w-1/2 h-full md:1/3 relative">
          <div>
            <p className="p-2 text-xs font-bold leading-3 text-[#91A884] absolute top-2 right-2 z-10 bg-[#18332F] rounded-lg">
              July 09 2021
            </p>
            <div className="absolute bottom-0 left-0 p-4 z-10">
              <h2 className="text-xl font-semibold">
                HMF supports the community
              </h2>
              <p className="font-light text-sm leading-4 text-white mt-2 opacity-75">
                As many of you know, HMF inc. has begun supporting the online
                community by sponsoring up and coming creators. We think this is
                a great way to help artists grow and meet new collaborators.
              </p>
              <a
                href="javascript:void(0)"
                className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black rounded-lg" />
          <Image
            src={plant}
            alt="plant"
            style={{ objectFit: 'cover', height: '300px' }}
            className="w-full rounded-xl"
          />
        </div>
        <div className="sm:w-1/2 h-full md:1/3 relative">
          <div>
            <p className="p-2 text-xs font-bold leading-3 text-[#91A884] absolute top-2 right-2 z-10 bg-[#18332F] rounded-lg">
              July 09 2021
            </p>
            <div className="absolute bottom-0 left-0 p-4 z-10">
              <h2 className="text-xl font-semibold">
                HMF supports the community
              </h2>
              <p className="font-light text-sm leading-4 text-white mt-2 opacity-75">
                As many of you know, HMF inc. has begun supporting the online
                community by sponsoring up and coming creators. We think this is
                a great way to help artists grow and meet new collaborators.
              </p>
              <a
                href="javascript:void(0)"
                className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black rounded-lg" />
          <Image
            src={plant}
            alt="plant"
            style={{ objectFit: 'cover', height: '300px' }}
            className="w-full rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default News;

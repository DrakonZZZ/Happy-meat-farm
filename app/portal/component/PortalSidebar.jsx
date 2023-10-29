'use client';

import { dashboardLinks, dashboardLinks2 } from '@/data/links';
import Image from 'next/image';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

const PortalSidebar = () => {
  return (
    <section className="border-l border-ternary/30 md:min-w-[15rem] lg:w-[26rem] rounded-sm p-2">
      <h3 className="text-secondary font-semibold text-xl border-b border-ternary/30 mr-4 p-4">
        Dashboard
      </h3>
      <div className=" flex-col md:h-[80vh] flex md:flex-row lg:flex-col justify-between">
        <DashboardLink link={dashboardLinks} />
        {/* <DashboardLink link={dashboardLinks2} /> */}
      </div>
    </section>
  );
};

const DashboardLink = ({ link }) => {
  const activeSegment = useSelectedLayoutSegment();

  console.log(activeSegment);

  return (
    <ul className="">
      {link.map((item) => {
        const { link, title, icon, id, imageSrc } = item;
        return (
          <li key={id} className="p-6 relative mb-4 rounded-md">
            <Link
              href={link}
              passHref
              className={`${
                activeSegment === link ? 'text-white ' : 'text-white/60'
              } flex flex-col text-md font-semibold  hover:text-white  transition duration-300  group`}
            >
              <span className="relative z-10 text-[1.2rem] font-medium">
                {title}
              </span>
              <Image
                src={`/images/${imageSrc}`}
                alt={title}
                layout="fill"
                className={`${
                  activeSegment === link ? 'contrast-100 ' : 'contrast-[0.2]'
                } absolute object-cover top-0 left-0 z-0 transition duration-300 group-hover:contrast-100 filter`}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default PortalSidebar;

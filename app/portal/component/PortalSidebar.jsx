import { dashboardLinks, dashboardLinks2 } from '@/data/links';
import Link from 'next/link';

const PortalSidebar = () => {
  return (
    <section className="border-r border-ternary/30 w-[12rem] rounded-sm">
      <h3 className="text-secondary font-semibold text-xl border-b border-ternary/30 mr-4 p-4">
        Dashboard
      </h3>
      <div className="h-[80vh] flex flex-col justify-between">
        <DashboardLink link={dashboardLinks} />
        <DashboardLink link={dashboardLinks2} />
      </div>
    </section>
  );
};

const DashboardLink = ({ link }) => {
  return (
    <ul className="">
      {link.map((item) => {
        const { link, title, icon, id } = item;
        return (
          <li key={id} className="my-8">
            <Link
              href={link}
              className="flex gap-2 items-center text-md text-zinc-500/80 font-semibold"
            >
              <span>{icon}</span>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default PortalSidebar;

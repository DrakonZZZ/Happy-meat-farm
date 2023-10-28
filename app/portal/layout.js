import PortalEvents from './component/PortalEvents';
import PortalSidebar from './component/PortalSidebar';

const layout = ({ children }) => {
  return (
    <main className="w-full h-full flex flex-col-reverse md:flex-row flex-1 gap-2 bg-primary">
      <PortalEvents />
      {children}
      <PortalSidebar />
    </main>
  );
};

export default layout;

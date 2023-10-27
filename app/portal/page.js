import PortalMainContent from './component/PortalMainContent';
import PortalSidebar from './component/PortalSidebar';

const page = () => {
  return (
    <main className="w-full h-full flex flex-1 gap-2 bg-primary px-8 pt-4">
      <PortalSidebar />
      <PortalMainContent />
    </main>
  );
};

export default page;

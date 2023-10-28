import PortalSidebar from './component/PortalSidebar';

const layout = ({ children }) => {
  return (
    <main className="w-full h-full flex flex-1 gap-2 bg-primary">
      <PortalSidebar />
      {children}
    </main>
  );
};

export default layout;

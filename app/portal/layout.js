import { redirect } from 'next/navigation';
import PortalEvents from './component/PortalEvents';
import PortalSidebar from './component/PortalSidebar';
import { cookies } from 'next/headers';

const layout = ({ children }) => {
  const cookieStore = cookies();
  const cookie = cookieStore.get(process.env.COOKIE_NAME);

  if (!cookie?.value) {
    redirect('/access');
  }
  return (
    <main className="w-full h-full flex flex-col-reverse md:flex-row flex-1 gap-2 bg-primary">
      <PortalEvents />
      {children}
      <PortalSidebar />
    </main>
  );
};

export default layout;

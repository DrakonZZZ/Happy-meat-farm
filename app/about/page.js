import AboutHead from './component/AboutHead';
import AboutBody from './component/AboutBody';

const page = () => {
  return (
    <main className="bg-primary flex-1 flex justify-center items-center text-secondary w-full  p-4 md:p-8">
      <div className="h-full justify-between">
        <AboutHead />
        <AboutBody />
      </div>
    </main>
  );
};

export default page;

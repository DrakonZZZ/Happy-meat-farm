import Product from './component/Product';

const page = () => {
  return (
    <main className="bg-primary flex-1 flex justify-center items-center text-secondary w-full  p-4 md:p-8">
      <Product />
    </main>
  );
};

export default page;

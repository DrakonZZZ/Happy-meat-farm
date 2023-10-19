import Product from './component/Product';

const page = () => {
  return (
    <main className="bg-primary flex-1 text-secondary w-full md:h-[200vh] p-4 md:p-8">
      <Product />
    </main>
  );
};

export default page;

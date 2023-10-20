import { productData } from '@/data/newsdata';

const Product = () => {
  return (
    <div className="h-full flex flex-col md:flex-row justify-evenly">
      <div className="md:flex flex-col justify-center md:w-1/3 mb-6 md:mb-0">
        <div className="border-l-4 border-secondary">
          <h2 className="text-4xl md:text-6xl font-semibold uppercase pl-4">
            <span className="block">Product</span>
            <span className="block">And</span>
            <span className="block">Services</span>
          </h2>
        </div>
        <p className="text-ternary/80 pl-4 md:w-1/2">
          See how Happy Meat Farms is shaping a new world in the meat industry.
        </p>
      </div>

      <div>
        <div className="w-full grid md:grid-cols-2 gap-4">
          {productData.map((data) => {
            const { id, title, content } = data;
            return (
              <div
                key={id}
                className="w-fit md:w-[450px] p-8 border-2 border-ternary/30 "
              >
                <h3 className="text-2xl md:text-4xl font-semibold mb-2 uppercase">
                  {title}
                </h3>
                <p className="text-ternary font-sm">{content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;

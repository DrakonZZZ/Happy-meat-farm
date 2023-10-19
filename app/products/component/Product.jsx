import React from 'react';

const Product = () => {
  return (
    <div className="md:flex justify-center mt-20">
      <div className="md:flex flex-col items-center md:w-1/2">
        <div className="border-l-[6px] pl-4 border-secondary">
          <h2 className="text-4xl md:text-7xl font-semibold uppercase">
            <span className="block">Product</span>
            <span className="block">And</span>
            <span className="block">Services</span>
          </h2>
        </div>
      </div>

      <div className="flex flex-col items-center md:w-1/2">
        <div className=" md:w-1/2">
          <div className="text-md md:text-xl mb-[250px]">
            <h3 className="text-2xl md:text-5xl font-semibold mb-2 uppercase">
              Organic Products
            </h3>
            <p className="text-white/70">
              Every product Happy Meat Farms creates is 100% organic with no
              preservatives or GMOs. We believe the best meat comes from nature
              itself, and adding chemicals to that only makes things worse. Our
              mission from the start hasn't changed, we want a better future for
              both animals and people.
            </p>
          </div>
          <div className="text-md md:text-xl mb-[250px]">
            <h3 className="text-2xl md:text-5xl font-semibold mb-2 uppercase">
              Equipment
            </h3>
            <p className="text-white/70">
              We only use the best, state of the art equipment at our
              facilities. Our priority isn't just productivity, we want to
              ensure the safety of all of our employees. All of our machinery is
              built right here in the USA, because we believe the best hands are
              still the ones right at home. We're constantly improving ourselves
              and archiving the past!
            </p>
          </div>
          <div className="text-md md:text-xl mb-[250px]">
            <h3 className="text-2xl md:text-5xl font-semibold mb-2 uppercase">
              Logistics
            </h3>
            <p className="text-white/70">
              Making the meat is only step one of our process, delivering the
              meat to your local grocery stores is just as important to us. We
              have an elite team of drivers that ship our products around the
              world. If it's not Happy Meat Farms meat, then it's not real meat!
            </p>
          </div>
          <div className="text-md md:text-xl mb-[250px]">
            <h3 className="text-2xl md:text-5xl font-semibold mb-2 uppercase">
              Research and Development
            </h3>
            <p className="text-white/70">
              Our R&D department is on the cutting edge of science, discovering
              new ways to efficiently create our products in a safe and humane
              way. Together we have revolutionized the way people think about
              meat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

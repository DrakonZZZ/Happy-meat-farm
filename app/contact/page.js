'use client';

import Image from 'next/image';
import fieldView from '../../public/images/view.jpg';

const page = () => {
  return (
    <main className="bg-primary flex-1 flex justify-center items-center text-secondary w-fully">
      <div className="w-full md:w-[90%] lg:w-[75%] xl:lg:w-[65%]  flex flex-col md:flex-row shadow-md m-4">
        <div className="md:w-1/3 h-[300px] md:h-[600px] relative md:rounded-tl-lg md:rounded-bl-lg">
          <div>
            <Image
              src={fieldView}
              fill={true}
              alt=""
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
        <div className="md:w-2/3  bg-[#e6e7e3] text-ternary  md:rounded-tr-lg md:rounded-br-lg flex flex-col justify-start p-4">
          <div className="mb-4">
            <h2 className="text-3xl font-semibold">Contact Us</h2>
            <h3 className="text-lg font-medium text-ternary/60 py-3">
              Thank you for your interest in Happy Meat Farms.
            </h3>
          </div>
          <form className="flex h-full flex-col justify-between w-full ">
            <div className="flex flex-col  gap-2">
              <div className="w-full flex">
                <label className="text-2xl font-semibold"></label>
                <input
                  type="text"
                  className="w-full p-4 bg-[#dededb] rounded-sm border-none outline-none shadow-inner"
                  placeholder="First Name"
                ></input>
                <label className="text-2xl font-semibold"></label>
                <input
                  type="text"
                  className="w-full p-4  bg-[#dededb] rounded-sm border-none outline-none shadow-inner"
                  placeholder="Last Name"
                ></input>
              </div>
              <label className="text-2xl font-semibold"></label>
              <input
                type="email"
                className="w-full p-4 bg-[#dededb] rounded-sm border-none outline-none shadow-inner"
                placeholder="Email"
              ></input>
              <label className="text-2xl font-semibold"></label>
              <textarea
                className="w-full p-4 bg-[#dededb] rounded-sm border-none outline-none shadow-inner resize-none overflow-auto"
                rows="5"
                cols="50"
                placeholder="Message"
              ></textarea>
            </div>

            <button className="w-full bg-secondary p-4 text-xl uppercase text-primary font-semibold rounded-md mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default page;

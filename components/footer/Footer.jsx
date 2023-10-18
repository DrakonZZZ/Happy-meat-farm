import React from 'react';

const Footer = () => {
  return (
    <footer className=" bg-[#18332F] px-6 py-4">
      <p className="text-[#91A884] text-xs text-center mb-2 opacity-30">
        All characters and corporations or establishments appearing in this work
        are fictitious. Any resemblance to real companies or persons is purely
        coincidental. Do not contact other companies with similar names.
      </p>
      <div className="w-full mx-auto max-w-screen p-4 md:flex md:items-center md:justify-between bg-[#112421] rounded-xl shadow-2xl">
        <span className="text-sm text-[#91A884] sm:text-center ">
          © 2023{' '}
          <a href="#" className="font-semibold">
            HAPPY MEAT FARMS™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-[#91A884]  sm:mt-0">
          <li>
            <a href="#" className="mr-4 md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 md:mr-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

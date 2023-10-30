'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

const AccessInput = () => {
  const [textVisible, setTextVisible] = useState();
  const [isloading, setIsloading] = useState(false);

  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    Cookies.set('check', true);
    router.push('/portal/home');
  };
  return (
    <div className="relative border-b border-secondary/30">
      <form
        action="/api/protected"
        method="post"
        onSubmit={(e) => submitHandler(e)}
      >
        <input
          type={`${!textVisible ? 'password' : 'text'}`}
          disabled={isloading ? true : false}
          className="h-20 w-4/5 text-md lg:text-2xl text-secondary p-4 bg-primary outline-none text-center placeholder-secondary/40 tracking-widest"
          placeholder={isloading ? 'LOADING' : 'ACCESS CODE'}
        />
        <span onClick={() => setTextVisible(!textVisible)}>
          {textVisible ? (
            <AiFillEyeInvisible className="absolute top-5 right-5 text-secondary/40 h-8 w-8" />
          ) : (
            <AiFillEye className="absolute top-5 right-5 text-secondary/40 h-8 w-8" />
          )}
        </span>
      </form>
    </div>
  );
};

export default AccessInput;

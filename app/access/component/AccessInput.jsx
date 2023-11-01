'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { RiLoader3Line } from 'react-icons/ri';

const AccessInput = () => {
  const [code, setCode] = useState('');
  const [textVisible, setTextVisible] = useState(false);
  const [isloading, setIsloading] = useState(false);

  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('entered');
    setIsloading(true);
    const req = await fetch('/api/protected', {
      body: JSON.stringify({ code }),
      headers: { 'Content-type': 'application/json' },
      method: 'post',
    });

    setIsloading(false);

    if (req.status == 200) {
      setCode('');
      router.push('/portal/home');
    } else {
      router.push('/');
    }
  };

  return (
    <div className="relative border-b border-secondary/30">
      <form onSubmit={submitHandler}>
        {isloading && (
          <RiLoader3Line
            size={40}
            className="absolute top-5 left-5 text-secondary animate-spin"
          />
        )}
        <label htmlFor="code"></label>
        <input
          id="code"
          type={`${!textVisible ? 'password' : 'text'}`}
          disabled={isloading ? true : false}
          value={code}
          onChange={(e) => setCode(e.target.value)}
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

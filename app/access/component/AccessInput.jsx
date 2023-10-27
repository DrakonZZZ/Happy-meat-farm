'use client';

import { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

const AccessInput = () => {
  const [textVisible, setTextVisible] = useState();
  return (
    <div className="relative border-b border-secondary/30 ">
      <input
        type={`${!textVisible ? 'password' : 'text'}`}
        className="h-20 w-4/5 text-2xl text-secondary p-4 bg-primary outline-none text-center placeholder-secondary/40 tracking-widest"
        placeholder="ACCESS CODE"
      />
      <button onClick={() => setTextVisible(!textVisible)}>
        {textVisible ? (
          <AiFillEyeInvisible className="absolute top-5 right-5 text-secondary/40 h-8 w-8" />
        ) : (
          <AiFillEye className="absolute top-5 right-5 text-secondary/40 h-8 w-8" />
        )}
      </button>
    </div>
  );
};

export default AccessInput;


import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import Keyboard from '@/components/Keyboard'
import Keyboard2 from './Keyboard2';
import Image from 'next/image';

const Hero = () => {
  

    return (
        <div className='pt-8'>
            <div className='flex flex-col items-center gap-y-4'>
                <h1 className='text-black text-[2.38rem] leading-[3.19rem] font-poppins'>Welcome!</h1>
                <span>
                    <span>Go to this step by step guideline process on how to certify for your weekly benefits:</span>
                    <span className="font-semibold">{` `}</span>
                    <Link href="#" target="_blank">
                        <span className="font-semibold">
                            <span className="[text-decoration:underline]">See our guideline</span>
                        </span>
                    </Link>
                </span>
                <span className='rounded-[90px] bg-blue-400 box-border text-[1rem] font-poppins p-4'>00:10:06:250</span>
                <Keyboard />
                <Keyboard2 />
            </div>
        </div>
    );
}

export default Hero;

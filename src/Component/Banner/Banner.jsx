import Image from 'next/image';
import React from 'react';
import { ManuBar } from '../ManuBar/ManuBar';
import { Button } from '@heroui/react';

const Banner = () => {
    return (
        <div className=' relative overflow-hidden'>
            <Image src={'https://i.ibb.co.com/TqRGjmSc/Chat-GPT-Image-May-11-2026-03-01-18-AM-1-Photoroom-Picsart-Ai-Image-Enhancer.png'} height={900} width={1200} className='w-full h-[900px] relative overflow-hidden' alt='banner'></Image>

            <div className=' absolute z-50 top-8 px-10 flex   items-center justify-between w-full'>
                <div className='flex items-center'>
                    <Image src={'https://i.ibb.co.com/QjfmQPjd/Chat-GPT-Image-May-11-2026-03-56-37-AM-removebg-preview.png'} width={40} height={40} className='' alt='logo'></Image>
                    <h1 className='font-bold leading-tight mt-3 text-xl'>JESTATEX</h1>
                </div>

                <ManuBar></ManuBar>
                <div className='flex gap-2'>
                    <Button variant='outline' className={'rounded-md bg-white/40 border border-white/70 font-semibold'}>Login</Button>
                    <Button variant='outline' className={'rounded-md bg-white/40 border border-white/70 font-semibold'}>Registration</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
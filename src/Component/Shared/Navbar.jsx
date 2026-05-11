import React from 'react';
import { ManuBar } from '../ManuBar/ManuBar';
import { Button } from '@heroui/react';
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className=''>
            <div className=' absolute fixed z-50 top-8 px-10 flex   items-center justify-between w-full'>
                <div className='flex items-center'>
                    <Image src={'https://i.ibb.co.com/QjfmQPjd/Chat-GPT-Image-May-11-2026-03-56-37-AM-removebg-preview.png'} width={40} height={40} className='' alt='logo'></Image>
                    <h1 className='font-extrabold leading-tight mt-3 text-2xl'>JESTATEX</h1>
                </div>

                <ManuBar></ManuBar>
                <div className='flex gap-2'>
                    <Button variant='outline' className={'rounded-md bg-white/40 border border-white/70 font-bold'}>Login</Button>
                    <Button variant='outline' className={'rounded-md bg-white/40 border border-white/70 font-bold'}>Registration</Button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
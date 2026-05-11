"use client"
import { CircleFill } from '@gravity-ui/icons';
import { Button, Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';


const Banner = () => {
    return (
        <div className=' relative overflow-hidden'>
            <Image src={'https://i.ibb.co.com/TqRGjmSc/Chat-GPT-Image-May-11-2026-03-01-18-AM-1-Photoroom-Picsart-Ai-Image-Enhancer.png'} height={900} width={1200} className='w-full h-[900px] relative overflow-hidden' alt='banner'></Image>


            <div className=' absolute top-1/3 left-1/12 space-y-2 mt-5'>
                <Chip variant="" className='bg-white/40 border-white/70 mb-2'>
                    <span className=' animate-ping'><CircleFill width={6} /></span>
                    <Chip.Label className='font-semibold'>Trusted Real Estate Platform</Chip.Label>
                </Chip>
                <h1 className='text-6xl font-extrabold mt-3 leading-tight'>Modern Real <br /> Estate Platform</h1>
                <div>
                    <TypeAnimation
                        sequence={[
                            'Discover trusted real estate listings...',
                            1000,
                            'Smooth browsing experience...',
                            1000,
                            'Secure property management...',
                            1000,
                        ]}
                        wrapper="p"
                        speed={50}
                        repeat={Infinity}
                        className="text-2xl text-black"
                    />
                </div>
                <Button variant='outline' className={'bg-white/40 border font-bold  border-white/70 rounded-md'}>Get Started</Button>
            </div>

        </div>
    );
};

export default Banner;
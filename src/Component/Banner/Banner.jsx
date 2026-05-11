import Image from 'next/image';
import React from 'react';


const Banner = () => {
    return (
        <div className=' relative overflow-hidden'>
            <Image src={'https://i.ibb.co.com/TqRGjmSc/Chat-GPT-Image-May-11-2026-03-01-18-AM-1-Photoroom-Picsart-Ai-Image-Enhancer.png'} height={900} width={1200} className='w-full h-[900px] relative overflow-hidden' alt='banner'></Image>

            
        </div>
    );
};

export default Banner;
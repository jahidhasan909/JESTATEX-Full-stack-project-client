import React from 'react';
import ImageSlider from './ImageSlider';
import Image from 'next/image';

const RecentlySold = () => {
    return (
        <div className='mt-30'>
            <h1 className='text-center font-bold text-2xl'>Recently Sold Properties</h1>
             <div className="flex items-center justify-center py-7 gap-3">
            <div className="">
                <ImageSlider></ImageSlider>
            </div>
            <div className="h-[590px] space-y-3">
                <Image height={300} width={450} className="h-[292px] w-[450px]  rounded" src="https://images.unsplash.com/photo-1748063578185-3d68121b11ff" alt="" />
                <Image height={300} width={450} className="h-[292px] w-[450px] rounded" src="https://images.unsplash.com/photo-1730888509834-5af1ff78f433" alt="" />
            </div>
        </div>
        </div>
    );
};

export default RecentlySold;
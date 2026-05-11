"use client"
import { Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { GoCodeReview } from "react-icons/go";
import Marquee from "react-fast-marquee";




const ClientReview = () => {
    return (
        <div className=' overflow-hidden grayscale hover:grayscale-0  absolute z-50 top-[670px]   left-1/12 right-1/12 '>

        <div className='w-full container mx-auto py-7  my-20 backdrop-blur-3xl bg-white/40 border border-white/60 rounded-md'>
            <h2 className='text-center text-3xl font-bold pb-2'>Client Review</h2>
            <Marquee pauseOnHover={true} speed={100}>

                <div className='flex'>
                    <div className='w-[300px] bg-white/20 border-white/70 border shadow-md rounded-md p-2 space-y-2 mr-3'>

                        <div className='flex justify-between'>
                            <GoCodeReview />
                        </div>
                        <p className='line-clamp-3'>It was really awesome journey.One of the key highlights of this project is the user review system, where real clients share their honest experiences about properties and services, helping new users make confident decisions. It also includes secure contact options, booking inquiries, and agent communication features.</p>
                        <div className='flex items-center gap-2'>
                            <Image src={'https://i.ibb.co.com/Nd5pX0y6/Screenshot-2026-05-01-at-12-48-16-AM.png'} width={'60'} height={'60'} className=' rounded-full' alt=''></Image>
                            <div>
                                <h3 className='text-[1rem] font-bold'>Emma Clary</h3>
                            </div>
                        </div>
                    </div>



                    <div className='w-[300px] bg-white/20 border-white/70 border shadow-md rounded-md p-2 space-y-2 mr-3'>
                        <div className='flex justify-between'>
                            <GoCodeReview />
                        </div>
                        <p className='line-clamp-3'>Jestatex  has been a true turning point in my career. One of the key highlights of this project is the user review system, where real clients share their honest experiences about properties and services, helping new users make confident decisions. It also includes secure contact options, booking inquiries, and agent communication features </p>
                        <div className='flex items-center gap-2'>
                            <Image src={'https://i.ibb.co.com/0VBrfTP3/pexels-yusuf-alp-2891146-31420959.jpg'} width={'60'} height={'60'} className=' rounded-full' alt=''></Image>
                            <div >
                                <h3 className='text-[1rem] font-bold'>Jhon doe</h3>
                            </div>
                        </div>
                    </div>



                    <div className='w-[300px] bg-white/20 border-white/70 border shadow-md rounded-md p-2 space-y-2 mr-3'>
                        <div className='flex justify-between' >
                            <GoCodeReview />
                        </div>
                        <p className='line-clamp-3'>Jestatex has had a huge impact One of the key highlights of this project is the user review system, where real clients share their honest experiences about properties and services, helping new users make confident decisions. It also includes secure contact options, booking inquiries, and agent communication features</p>
                        <div className='flex items-center gap-2'>
                            <Image src={'https://i.ibb.co.com/SwQdzyXm/pexels-ahmed-abdelhalem-3427792-35389092.jpg'} width={'60'} height={'60'} className=' rounded-full' alt=''></Image>
                            <div>
                                <h3 className='text-[1rem] font-bold'>Illia Aderson</h3>
                            </div>
                        </div>
                    </div>



                    <div className='w-[300px] bg-white/20 border-white/70 border shadow-md rounded-md p-2 space-y-2 mr-3'>
                        <div className='flex justify-between'>
                            <GoCodeReview />
                        </div>
                        <p className='line-clamp-3'>For me, SOne of the key highlights of this project is the user review system, where real clients share their honest experiences about properties and services, helping new users make confident decisions. It also includes secure contact options, booking inquiries, and agent communication features</p>
                        <div className='flex items-center gap-2'>
                            <Image src={'https://i.ibb.co.com/jknd0NcD/pexels-pessoas-uem-503045317-16160859.jpg'} width={'60'} height={'60'} className=' rounded-full' alt=''></Image>
                            <div>
                                <h3 className='text-[1rem] font-bold'>James bond</h3>
                            </div>
                        </div>
                    </div>


                    <div className='w-[300px] bg-white/20 border-white/70 bordershadow-md rounded-md p-2 space-y-2 mr-3'>
                        <div className='flex justify-between'>
                            <GoCodeReview />
                        </div>
                        <p className='line-clamp-3'>It was really awesome journey. One of the key highlights of this project is the user review system, where real clients share their honest experiences about properties and services, helping new users make confident decisions. It also includes secure contact options, booking inquiries, and agent communication features</p>
                        <div className='flex items-center gap-2'>
                            <Image src={'https://i.ibb.co.com/mQ5DYn1/pexels-pessoas-uem-503045317-16173670.jpg'} width={'60'} height={'60'} className=' rounded-full' alt=''></Image>
                            <div>
                                <h3 className='text-[1rem] font-bold'>Mical james</h3>
                            </div>
                        </div>
                    </div>


                    <div className='w-[300px] bg-white/20 border-white/70 border shadow-md rounded-md p-2 space-y-2 mr-3'>
                        <div className='flex justify-between'>
                            <GoCodeReview />
                        </div>
                        <p className='line-clamp-3'>Its was really amazing.One of the key highlights of this project is the user review system, where real clients share their honest experiences about properties and services, helping new users make confident decisions. It also includes secure contact options, booking inquiries, and agent communication features </p>
                        <div className='flex items-center gap-2'>
                            <Image src={'https://i.ibb.co.com/sdPbqk9k/pexels-gilles-33136738.jpg'} width={'60'} height={'60'} className=' rounded-full' alt=''></Image>
                            <div>
                                <h3 className='text-[1rem] font-bold'>Vladimir</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </Marquee>
        </div>
        </div>
    );
};

export default ClientReview;








       

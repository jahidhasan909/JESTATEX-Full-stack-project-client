import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaLinkedin, FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className=''>
            <footer className="flex flex-col backdrop-blur-3xl justify-center items-center text-center bg-gray-100 container mx-auto mt-40 mb-5 rounded-xl py-20 border border-white/70 space-y-2">
                <aside className=' space-y-2'>
                    <div className='flex flex-col items-center justify-center'>
                      <div className='bg-white/50 border-white/70 border rounded-md mb-1'>
                          <Image src={'https://i.ibb.co.com/QjfmQPjd/Chat-GPT-Image-May-11-2026-03-56-37-AM-removebg-preview.png'} width={65} height={65} className='' alt='logo'></Image>
                      </div>
                        <h1 className='font-bold leading-tight text-3xl'>JESTATEX</h1>
                    </div>
                    <ul className='flex gap-2'>
                        <li>
                            <a href="">
                                ABOUT US
                            </a>
                        </li>
                        |
                        <li>
                            <a href="">
                                CAREERS
                            </a>
                        </li>
                        |
                        <li><a href="">
                            CONTACT US
                        </a>
                        </li>
                        |
                        <li>
                            <a href="">
                                TERMS & PRIVACY POLICY
                            </a>
                        </li>
                    </ul>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a>
                         <FaFacebook />
                        </a>
                        <a>
                          <FaSquareXTwitter />
                        </a>
                        <a>
                          <FaLinkedin />
                        </a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
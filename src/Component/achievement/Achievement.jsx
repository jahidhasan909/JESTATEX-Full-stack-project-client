import { Card } from '@heroui/react';
import React from 'react';
import { FaBuildingColumns } from 'react-icons/fa6';
import { GrUserManager } from "react-icons/gr";
import { LiaAwardSolid } from "react-icons/lia";
import { GiDiamondTrophy } from "react-icons/gi";

const Achievement = () => {
    return (
        <div className='mt-50'>
            <h1 className='text-center font-bold text-2xl py-6'>Company Statistics</h1>
            <div className=' p-3 rounded-md bg-gray-100 backdrop-blur-3xl grid grid-cols-4 gap-4 max-w-7xl mx-auto'>
                <Card className="bg-white/20 border border-white/70 rounded-md" variant="">
                    <Card.Header className='flex flex-row items-center text-center justify-center gap-3'>
                        <span className='bg-white/50 p-5 border-white/70 border rounded-md'><FaBuildingColumns /></span>
                        <div>
                            <Card.Title className='font-bold text-xl'>259+</Card.Title>
                            <Card.Description>Project complete</Card.Description>
                        </div>
                    </Card.Header>
                </Card>
                <Card className="bg-white/20 border border-white/70 rounded-md" variant="">
                    <Card.Header className='flex flex-row items-center text-center justify-center gap-3'>
                        <span className='bg-white/50 p-5 border-white/70 border rounded-md'><GrUserManager /></span>
                        <div>
                            <Card.Title className='font-bold text-xl'>559+</Card.Title>
                            <Card.Description>Happy client</Card.Description>
                        </div>
                    </Card.Header>
                </Card>
                <Card className="bg-white/20 border border-white/70 rounded-md" variant="">
                    <Card.Header className='flex flex-row items-center text-center justify-center gap-3'>
                        <span className='bg-white/50 p-5 border-white/70 border rounded-md'><GiDiamondTrophy /></span>
                        <div>
                            <Card.Title className='font-bold text-xl'>150+</Card.Title>
                            <Card.Description>Awards Won</Card.Description>
                        </div>
                    </Card.Header>
                </Card>
                <Card className="bg-white/20 border border-white/70 rounded-md" variant="">
                    <Card.Header className='flex flex-row items-center text-center justify-center gap-3'>
                        <span className='bg-white/50 p-5 border-white/70 border rounded-md'><LiaAwardSolid /></span>
                        <div>
                            <Card.Title className='font-bold text-xl'>10+</Card.Title>
                            <Card.Description>Years experience</Card.Description>
                        </div>
                    </Card.Header>
                </Card>
            </div>
        </div>
    );
};

export default Achievement;
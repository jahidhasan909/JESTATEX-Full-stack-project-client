import { Button, Card, Link } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaMapLocation } from 'react-icons/fa6';

const BuyPropertyCard = ({ buy }) => {


    const { _id, name, email, number, imageUrlsellar, propertytitle, location, category, price, areasize, departureDate, imageUrl, description } = buy


    return (
        <div>
            <Card className="bg-white/70 border-white/40 rounded-md" variant="">
                <Card.Header className=' space-y-2'>
                    <Image className='w-full object-cover rounded-md h-[200px]' src={imageUrl} height={200} width={350} alt='propertyimg'></Image>
                    <Card.Description className='my-2 flex items-center gap-1'><FaMapLocation /> {location}</Card.Description>
                    <Card.Content>
                    <Card.Title className=' truncate  font-semibold text-[1rem]'>{propertytitle}</Card.Title>
                        <p className='text-neutral-500 text-xs'>{areasize}(sqft)</p>
                    </Card.Content>
                    <div className='flex items-center justify-between'>
                        <Link className={'font-semibold'} href={`/buy/${_id}`}>
                            Buy Now
                            <Link.Icon />
                        </Link>
                        <span className=' font-semibold'>${price}</span>
                    </div>
                </Card.Header>
            </Card>
        </div>
    );
};

export default BuyPropertyCard;






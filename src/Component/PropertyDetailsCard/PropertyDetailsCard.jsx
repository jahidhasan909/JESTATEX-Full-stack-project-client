import { Avatar, Button, Card, Link } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaMapLocation } from 'react-icons/fa6';
import { GoArrowUpLeft } from 'react-icons/go';
import { PencilToLine, TrashBin } from '@gravity-ui/icons';

const PropertyDetailsCard = ({ propertyDetails }) => {


    const { _id, name, email, number, imageUrlsellar, propertytitle, location, category, price, areasize, departureDate, imageUrl, description } = propertyDetails



    return (
        <div>
            <div className='flex justify-between items-center p-1 my-4'>
                <Link href={'/buy'} className='flex items-center gap-1 underline text-neutral-600'>
                    <GoArrowUpLeft></GoArrowUpLeft>
                    Back to Buy
                </Link>
                <div className='flex items-center gap-2'>
                    <Button variant='outline' className={' rounded-md '}><PencilToLine></PencilToLine> Edit</Button>
                    <Button variant='outline' className={' rounded-md text-red-400 border-red-400'}><TrashBin></TrashBin> Deleted</Button>
                </div>
            </div>
            <Card className="bg-white/70 border-white/40 rounded-md" variant="">
                <Image className='w-full object-cover rounded-md h-[600px]' src={imageUrl} height={600} width={1000} alt='propertyimg'></Image>
                <Card.Description className='my-2 flex items-center gap-1'><FaMapLocation /> {location}</Card.Description>
                <Card.Header className=' space-y-2  flex flex-row  justify-between items-center'>
                    <div>
                        <Card.Content className=' space-y-2'>
                            <Card.Title className='font-bold text-xl'>{propertytitle}</Card.Title>
                            <p className='max-w-5xl text-gray-500'>{description}</p>
                            <div className='flex gap-2 items-center'>
                                <p className=' '>{areasize}(sqft)</p>
                                |
                                <p>{category}</p>
                                |
                                <p>{departureDate}</p>
                            </div>
                        </Card.Content>
                    </div>
                    <Card className=' rounded-md shadow-md'>

                        <div className=''>
                            <div className='flex  items-center gap-2'>
                                <Avatar className='' size='lg'>
                                    <Avatar.Image className='' alt="John Doe" src={imageUrlsellar} />
                                    <Avatar.Fallback>{name}</Avatar.Fallback>
                                </Avatar>
                                <div className=''>
                                    <h3 className='font-semibold'>{name}</h3>
                                    <p className='text-xs'>{email}</p>
                                    <p className='text-xs mt-1'>{number}</p>
                                </div>
                            </div>




                            <div className='flex flex-col space-y-2'>
                                <span className=' font-semibold text-center my-2 text-xl'>${price}</span>
                                <Button variant='outline' className={'w-full rounded-md'}>Wishlist</Button>
                                <Button variant='outline' className={'w-full rounded-md'}>Buy</Button>
                            </div>
                        </div>
                    </Card>
                </Card.Header>
            </Card>
        </div>
    );
};

export default PropertyDetailsCard;
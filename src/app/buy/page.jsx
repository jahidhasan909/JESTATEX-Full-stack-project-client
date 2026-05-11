import BuyPropertyCard from '@/Component/BuyPropertyCard/BuyPropertyCard';
import React from 'react';

const BuyPage = async () => {

    const res = await fetch('http://localhost:5002/property')
    const buydata = await res.json()
   


    return (
        <div className=' container mx-auto mt-30'>
       
       <div className='grid grid-cols-4 gap-4'>
        {
            buydata.map(buy=><BuyPropertyCard key={buy._id} buy={buy}></BuyPropertyCard>)
        }
       </div>
        </div>
    );
};

export default BuyPage;
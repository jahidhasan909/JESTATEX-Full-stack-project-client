import PropertyDetailsCard from '@/Component/PropertyDetailsCard/PropertyDetailsCard';
import React from 'react';

const PropertyDetailsPage = async({params}) => {
    
    const {id}=await params;
    const res=await fetch(`http://localhost:5002/property/${id}`)
    const propertyDetails=await res.json()

    
    
    

    
    return (

        <div className=' container mx-auto mt-30'>
            <PropertyDetailsCard propertyDetails={propertyDetails}></PropertyDetailsCard>
        </div>
    );
};

export default PropertyDetailsPage;
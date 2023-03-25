import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('https://car-server-ashen.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data));
    },[]);
    return (
        <div className="py-10">
            <div className="text-center">
                <p className="text-2xl font-bold text-orange-600">Service</p>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p className="lg:w-2/5 md:w-2/5 w-full mx-auto lg:px-0 md:px-0 px-5 my-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    services.map(service =><ServiceCard key={service._id} service ={service}></ServiceCard>)
                }
                
            </div>
        </div>
    );
};

export default Service;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';

const Services = () => {
    const services = useLoaderData();
    console.log(services);
    return (
        <div className='flex mb-10 flex-col justify-center items-center '>
            <h1 className="my-5 text-5xl font-bold text-rose-600 text-center">All The Services</h1>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;
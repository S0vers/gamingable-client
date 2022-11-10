import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false)
            })
    }, [])
    const loadingItems = <>
        {
            loading ?
                <>
                    <div className='flex flex-col justify-center items-center'>
                        <div className="radial-progress bg-red-500 animate-spin" style={{ "--value": 20 }}></div>
                    </div>
                </>
                :
                <>
                    <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5'>
                        {
                            services.map(service => <ServiceCard
                                key={service._id}
                                service={service}
                            ></ServiceCard>)
                        }
                    </div>
                </>

        }
    </>
    return (
        <div className='flex mb-10 flex-col justify-center items-center '>
            <h1 className="my-5 text-5xl font-bold text-rose-600 text-center">All The Services</h1>
            {loadingItems}
        </div>
    );
};

export default Services;
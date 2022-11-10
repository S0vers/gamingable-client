import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';

const HomeServices = () => {
    const [services, setSetServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/homeservices')
            .then(res => res.json())
            .then(data => setSetServices(data))
    }, [])
    return (
        <div className='flex flex-col justify-center items-center '>
            <h1 className="my-5 text-5xl font-bold text-rose-600 text-center">My Services</h1>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <Link to='/services'><button className="btn btn-primary mt-20">See more</button></Link>
        </div>
    );
};

export default HomeServices;
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { img, price, title, _id, description } = service;
    return (
        <PhotoProvider>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <PhotoView src={img}>
                    <figure><img className='' src={img} alt="service" /></figure>
                </PhotoView>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-xl'>
                        {description.length > 100 ?
                            <>{description.slice(0, 100) + ' ... '}</>
                            :
                            description
                        }
                    </p>
                    <div className="card-actions justify-between mt-10">
                        <p className='text-xl text-rose-600'>Price: ${price}</p>
                        <Link to={`/services/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </PhotoProvider>
    );
};

export default ServiceCard;
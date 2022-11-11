import React, { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Reviews from '../../Shared/Reviews/Reviews';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext)
    const { img, price, title, _id, description } = useLoaderData();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true)
    const handleAddReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = user.displayName;
        const userImg = user.photoURL;
        const email = user?.email || 'unregistered';
        const reviewText = form.review.value;
        const date = new Date().getTime();
        const uid = user.uid;
        const serviceImg = img;
        const review = {
            service: _id,
            serviceName: title,
            userName: name,
            userEmail: email,
            details: reviewText,
            userUid: uid,
            userImg: userImg,
            date: date,
            serviceImg: serviceImg,

        }
        fetch('https://gamingable-server-e8mcnhjtb-s0vers.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`

            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Review Posted Successfully.');
                    form.reset();
                }
            })
            .catch(err => console.log(err))

    }
    useEffect(() => {
        fetch(`https://gamingable-server-e8mcnhjtb-s0vers.vercel.app/reviews?service=${_id}`, {
            headers: {
            }
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                setReviews(data)
                setLoading(false)
            })
    }, [_id])
    return (
        <PhotoProvider>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <PhotoView src={img}>
                    <figure><img className='' src={img} alt="service" /></figure>
                </PhotoView>
                <div className="card-body">
                    <h1 className="card-title my-5 text-5xl font-bold text-rose-600 text-center">{title}</h1>
                    <p className='text-xl'>
                        {
                            description
                        }
                    </p>
                    <p className='text-xl text-rose-600'>Price: ${price}</p>
                </div>
            </div>
            {
                user?.uid ?
                    <>
                        <form onSubmit={handleAddReview} className=''>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Review</span>
                                </label>
                                <input name='review' type="text" placeholder="review" className="input input-bordered " />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add Review</button>
                            </div>
                        </form>
                    </>
                    : <div className='flex flex-col justify-center items-center'>
                        <h1 className="my-5 text-2xl font-bold text-rose-600 text-center">New User?<Link className='mx-5' to='/login'><button className='btn btn-primary'>Login</button></Link></h1>
                    </div>
            }
            {
                loading ?
                    <>
                        <div className='flex flex-col justify-center items-center'>
                            <div className="radial-progress bg-red-500 animate-spin" style={{ "--value": 20 }}></div>
                        </div>
                    </>
                    :
                    <Reviews review={reviews}></Reviews>
            }
            <Toaster></Toaster>
        </PhotoProvider>
    );
};

export default ServiceDetails;
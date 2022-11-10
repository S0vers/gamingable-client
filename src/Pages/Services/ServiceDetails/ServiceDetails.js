import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Reviews from '../../Shared/Reviews/Reviews';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext)
    const { img, price, title, _id, description } = useLoaderData();
    const handleAddReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = user.displayName;
        const userImg = user.photoURL;
        const email = user?.email || 'unregistered';
        const reviewText = form.review.value;
        const date = new Date().getTime();
        const uid = user.uid;
        const review = {
            service: _id,
            serviceName: title,
            userName: name,
            userEmail: email,
            details: reviewText,
            userUid: uid,
            userImg: userImg,
            date: date
        }
        console.log(review)
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`

            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Review Posted Successfully.');
                    form.reset();
                }
            })
            .catch(err => console.log(err))

    }
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
                    : <p>higgls berb</p>
            }
            <Reviews></Reviews>
            <Toaster></Toaster>
        </PhotoProvider>
    );
};

export default ServiceDetails;
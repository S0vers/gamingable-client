import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';

const MyReview = () => {
    const { user, logout } = useContext(AuthContext);
    const [loading, setLoading] = useState(true)
    const [reviews, setReview] = useState([])
    const [edited, setEdited] = useState([])
    //http://localhost:5000/myreviews
    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?userEmail=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logout()
                }
                return res.json()
            })
            .then(data => {
                setReview(data)
                setLoading(false)
            })
    }, [user?.email, logout])
    const handleDelete = _id => {
        const proceed = window.confirm('Are you sure, you want to delete this order?')
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${_id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('genius-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.error('deleted successfully');
                        const remaining = reviews.filter(rev => rev._id !== _id)
                        console.log(remaining)
                        setReview(remaining)
                    }
                })

        }
    }
    const handleEditReview = (_id, edited) => {
        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ details: edited })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('Update successfully');
                    const remaining = reviews.filter(rev => rev._id !== _id)
                    const edited = reviews.find(rev => rev._id === _id)
                    const newOrders = [edited, ...remaining]
                    setReview(newOrders);
                }
            })

    }

    const menuItems = <>
        {loading ?
            <>
                <div className='flex flex-col justify-center items-center'>
                    <div className="radial-progress bg-red-500 animate-spin" style={{ "--value": 20 }}></div>
                </div>
            </>
            :
            <>

                <div className='flex flex-col justify-center items-center '>
                    <h1 className="my-5 text-5xl font-bold text-rose-600 text-center">Total Reviews:{reviews.length}</h1>
                </div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reviews.map(review => <ReviewRow key={review._id}
                                    review={review}
                                    handleDelete={handleDelete}
                                    handleEditReview={handleEditReview}
                                ></ReviewRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </>

        }
    </>

    return (
        <div>
            <Helmet>
                <title>Gamingable || My Review</title>
                <meta name="Gamingable" content="Website" ></meta>
            </Helmet>
            {menuItems}
            <Toaster></Toaster>
        </div>
    );
};

export default MyReview;
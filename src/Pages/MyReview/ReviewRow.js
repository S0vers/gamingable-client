import React, { useState } from 'react';

const ReviewRow = ({ review, handleDelete }) => {
    const { details, serviceImg, serviceName, _id } = review;
    const [edited, setEdited] = useState([])
    const handleUpdateReview = event => {
        const field = event.target.name;
        const revidewChange = event.target.value;
        const newReview = { ...edited }
        newReview[field] = revidewChange;
        setEdited(newReview)
    }
    const handleEditReview = () => {
        fetch(`https://gamingable-server-e8mcnhjtb-s0vers.vercel.app/reviews/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(edited)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update successfully');
                }
            })

    }
    // 
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask w-40">
                            <img src={serviceImg} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                    </div>
                </div>
            </td>
            <td>
                <p>{details}</p>
            </td>
            <td>
                {/* The button to open modal */}
                <label htmlFor={_id} className="btn btn-primary">Edit</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id={_id} className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <form onSubmit={handleEditReview} className=''>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Review</span>
                                </label>
                                <input onChange={handleUpdateReview} name='details' type="text" placeholder="review" defaultValue={details} className="input input-bordered " />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Edit Review</button>
                            </div>
                        </form>
                    </div>
                </div>
            </td>
            <td>
                <button onClick={() => handleDelete(_id)} className='btn btn-danger'>Delete</button>
            </td>
        </tr>
    );
};

export default ReviewRow;
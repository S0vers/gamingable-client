import React from 'react';

const ReviewRow = ({ review, handleDelete, handleEditReview }) => {
    const { details, userImg, userName, _id } = review
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={userImg} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{userName}</div>
                    </div>
                </div>
            </td>
            <td>
                <p>{details}</p>
            </td>
            <td>
                {/* The button to open modal */}
                <label htmlFor="my-modal-5" className="btn btn-primary">Edit</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <form className=''>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Review</span>
                                </label>
                                <input name='review' type="text" placeholder="review" defaultValue={details} className="input input-bordered " />
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
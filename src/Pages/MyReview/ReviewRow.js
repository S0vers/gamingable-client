import React from 'react';

const ReviewRow = ({ review, handleDelete }) => {
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
                <button className='btn btn-primary'>Edit</button>
            </td>
            <td>
                <button onClick={() => handleDelete(_id)} className='btn btn-danger'>Delete</button>
            </td>
        </tr>
    );
};

export default ReviewRow;
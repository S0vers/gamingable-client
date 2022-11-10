import React from 'react';

const ReviewRow = ({ review }) => {
    const { details, userImg, userName } = review
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
        </tr>
    );
};

export default ReviewRow;
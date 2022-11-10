import React from 'react';
import ReviewRow from './ReviewRow';

const Reviews = (reviews) => {
    const { review } = reviews
    console.log(review)
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Review</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        review.map(review => <ReviewRow
                            key={review._id}
                            review={review}
                        ></ReviewRow>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default Reviews;
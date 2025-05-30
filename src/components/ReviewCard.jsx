import React from 'react'

const ReviewCard = ({ review }) => {
    return (
        <>
            <div className="col-12 col-md-6 col-lg-4">
                <h4>{review.name}</h4>
                <p>Vote: {review.vote}</p>
                <p>{review.text}</p>
            </div>
        </>
    )
}

export default ReviewCard
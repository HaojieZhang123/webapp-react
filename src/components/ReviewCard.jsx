import React from 'react'

const ReviewCard = ({ review }) => {
    return (
        <>
            <div className="col-12 card mb-2 p-3">
                <div className="row">
                    <div className="col-6">
                        <h4>{review.name}</h4>
                    </div>
                    <div className="col-6">
                        <p className='text-end'>Vote: {review.vote}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p>{review.text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewCard
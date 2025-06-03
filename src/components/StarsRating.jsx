import React from 'react'

const StarsRating = ({ vote }) => {
    const starsRating = (vote) => {
        return [1, 2, 3, 4, 5].map((elem, i) => {
            return (
                <i key={`star-${i}`} className={`text-warning ${elem <= vote ? "fa-solid fa-star" : "fa-regular fa-star"}`}></i>
            )
        })
    }
    return (
        <span>{starsRating(vote)}</span>
    )
}

export default StarsRating
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ReviewForm = ({ movie_id, updateReviews }) => {
    // initial form data
    const initialFormData = {
        name: '',
        vote: '',
        text: ''
    }

    // form data
    const [formData, setFormData] = useState(initialFormData)

    // onChangeHandler
    const onChangeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    // onSubmitHandler
    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:3000/api/movies/${movie_id}/reviews`, formData, { headers: { "Content-Type": "application/json" } })
            .then((response) => {
                console.log(response)
                updateReviews()
                setFormData(initialFormData)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <form onSubmit={onSubmitHandler} className='mt-5'>
                <div className="row">
                    <div className="col-12">
                        <h2>
                            Add Review
                        </h2>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name='name' value={formData.name} onChange={onChangeHandler} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="vote" className="form-label">Vote</label>
                    <input type="number" min={0} max={5} className="form-control" id="vote" name='vote' value={formData.vote} onChange={onChangeHandler} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Text</label>
                    <textarea className="form-control" id="text" name='text' value={formData.text} onChange={onChangeHandler}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default ReviewForm
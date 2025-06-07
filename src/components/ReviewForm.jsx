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

    // check form data
    const [isFormValid, setIsFormValid] = useState(true)

    const validateForm = () => {
        // check if form data is void
        if (formData.name === '' || formData.vote === '' || formData.text === '') {
            return false
        }

        // check if vote is a number and if it is between 0 and 5
        if (isNaN(formData.vote) || formData.vote < 0 || formData.vote > 5) {
            return false
        }
    }

    // onChangeHandler
    const onChangeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    // onSubmitHandler
    const onSubmitHandler = (e) => {
        e.preventDefault()

        if (validateForm() === false) {
            setIsFormValid(false)
            return
        }

        axios.post(`http://localhost:3000/api/movies/${movie_id}/reviews`, formData, { headers: { "Content-Type": "application/json" } })
            .then((response) => {
                console.log(response)
                setIsFormValid(true)
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

                {!isFormValid &&
                    <div className="alert alert-danger mb-3" role="alert">
                        Please fill all the fields
                    </div>
                }
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
                    <textarea className="form-control" id="text" name='text' value={formData.text} onChange={onChangeHandler} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default ReviewForm
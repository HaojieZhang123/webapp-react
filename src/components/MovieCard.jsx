import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {
    return (
        <>
            <div className="col-4">
                <div className="card movie-card">
                    <img
                        src={movie.image}
                        className="card-img-top"
                        alt={movie.title}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>

                        <Link to={`/movies/${movie.id}`}>
                            <button className="btn btn-primary">
                                See more details
                            </button>
                        </Link>
                    </div>
                </div>
            </div >
        </>
    )
}

export default MovieCard
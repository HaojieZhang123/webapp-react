import React from 'react'

const MovieCard = ({ movie }) => {
    return (
        <>
            <div className="col-4">
                <div className="card">
                    <img src={movie.image} className="card-img-top" alt={movie.title} />
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">Director: {movie.director}</p>
                        <p className="card-text">Genre: {movie.genre}</p>
                        <p className="card-text">Release Year: {movie.release_year}</p>
                        <p className="card-text">Abstract: {movie.abstract}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieCard
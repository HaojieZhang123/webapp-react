import React from 'react'
import { useState } from 'react'

import MovieCard from '../components/MovieCard'

const initialMovies = [
    {
        id: 1,
        title: "Inception",
        director: "Christopher Nolan",
        genre: "Science Fiction",
        release_year: 2010,
        abstract: "A skilled thief is given a chance at redemption if he can successfully perform inception.",
        image: "inception.jpg",
    },
    {
        id: 2,
        title: "The Godfather",
        director: "Francis Ford Coppola",
        genre: "Crime",
        release_year: 1972,
        abstract: "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
        image: "godfather.jpg",
    },
    {
        id: 3,
        title: "Titanic",
        director: "James Cameron",
        genre: "Romance",
        release_year: 1997,
        abstract: "A romantic story set against the tragic sinking of the RMS Titanic.",
        image: "titanic.jpg",
    },
    {
        id: 4,
        title: "The Matrix",
        director: "Lana Wachowski",
        genre: "Action",
        release_year: 1999,
        abstract: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in it.",
        image: "matrix.jpg",
    },
    {
        id: 5,
        title: "Interstellar",
        director: "Christopher Nolan",
        genre: "Science Fiction",
        release_year: 2014,
        abstract: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        image: "interstellar.jpg",
    }
]

const Homepage = () => {

    const [movies, setMovies] = useState(initialMovies)

    return (
        <>
            <div className="container my3">
                <h2 className='my-3'>Movie List</h2>
                <div className="row gy-4">
                    {movies.map((movie) => (

                        <MovieCard movie={movie} key={movie.id} />

                        // <div className="col-4" key={movie.id}>
                        //     <div className="card">
                        //         <img src={movie.image} className="card-img-top" alt={movie.title} />
                        //         <div className="card-body">
                        //             <h5 className="card-title">{movie.title}</h5>
                        //             <p className="card-text">Director: {movie.director}</p>
                        //             <p className="card-text">Genre: {movie.genre}</p>
                        //             <p className="card-text">Release Year: {movie.release_year}</p>
                        //             <p className="card-text">Abstract: {movie.abstract}</p>
                        //         </div>
                        //     </div>
                        // </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Homepage
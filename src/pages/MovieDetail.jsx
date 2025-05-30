import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

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


const MovieDetail = () => {

    const { id } = useParams()

    const [movies, setMovies] = useState(initialMovies)
    const [movie, setMovie] = useState({})

    const findActualMovie = () => {
        const actualMovie = movies.find(movie => movie.id === parseInt(id))
        setMovie(actualMovie)
    }

    useEffect(() => {
        findActualMovie()
    }, [])

    return (
        <>
            <h2>MovieDetail</h2>

            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <img src={movie.image} alt={movie.title} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-8">
                        <h3>{movie.title}</h3>
                        <p>Director: {movie.director}</p>
                        <p>Genre: {movie.genre}</p>
                        <p>Release Year: {movie.release_year}</p>
                        <p>Abstract: {movie.abstract}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieDetail
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import ReviewCard from '../components/ReviewCard'
import StarsRating from '../components/StarsRating'
import ReviewForm from '../components/ReviewForm'

import GlobalContext from '../context/globalContext'
import { useContext } from 'react'

// const initialMovies = [
//     {
//         id: 1,
//         title: "Inception",
//         director: "Christopher Nolan",
//         genre: "Science Fiction",
//         release_year: 2010,
//         abstract: "A skilled thief is given a chance at redemption if he can successfully perform inception.",
//         image: "inception.jpg",

//         reviews: [
//             {
//                 id: 1,
//                 name: "Alice",
//                 vote: 5,
//                 text: "A mind-bending masterpiece."
//             },
//             {
//                 id: 2,
//                 name: "Bob",
//                 vote: 4,
//                 text: "Great visuals and a compelling story."
//             },
//             {
//                 id: 3,
//                 name: "Charlie",
//                 vote: 3,
//                 text: "Confusing at times, but worth watching."
//             }
//         ]
//     },
//     {
//         id: 2,
//         title: "The Godfather",
//         director: "Francis Ford Coppola",
//         genre: "Crime",
//         release_year: 1972,
//         abstract: "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
//         image: "godfather.jpg",

//         reviews: [
//             {
//                 id: 4,
//                 name: "Diana",
//                 vote: 5,
//                 text: "The best crime movie ever made."
//             },
//             {
//                 id: 5,
//                 name: "Eve",
//                 vote: 5,
//                 text: "A cinematic classic that never gets old."
//             },
//             {
//                 id: 6,
//                 name: "Frank",
//                 vote: 3,
//                 text: "A bit slow-paced but very impactful."
//             }
//         ]
//     },
//     {
//         id: 3,
//         title: "Titanic",
//         director: "James Cameron",
//         genre: "Romance",
//         release_year: 1997,
//         abstract: "A romantic story set against the tragic sinking of the RMS Titanic.",
//         image: "titanic.jpg",

//         reviews: [
//             {
//                 id: 7,
//                 name: "Grace",
//                 vote: 5,
//                 text: "A heartbreaking love story."
//             },
//             {
//                 id: 8,
//                 name: "Hank",
//                 vote: 4,
//                 text: "Beautiful visuals and a moving plot."
//             },
//             {
//                 id: 9,
//                 name: "Ivy",
//                 vote: 3,
//                 text: "A bit too melodramatic for my taste."
//             }
//         ]
//     },
//     {
//         id: 4,
//         title: "The Matrix",
//         director: "Lana Wachowski",
//         genre: "Action",
//         release_year: 1999,
//         abstract: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in it.",
//         image: "matrix.jpg",

//         reviews: [
//             {
//                 id: 10,
//                 name: "Jack",
//                 vote: 5,
//                 text: "A revolutionary film in every sense."
//             },
//             {
//                 id: 11,
//                 name: "Karen",
//                 vote: 4,
//                 text: "Great action and a thought-provoking plot."
//             },
//             {
//                 id: 12,
//                 name: "Liam",
//                 vote: 4,
//                 text: "A unique take on reality and perception."
//             }
//         ]
//     },
//     {
//         id: 5,
//         title: "Interstellar",
//         director: "Christopher Nolan",
//         genre: "Science Fiction",
//         release_year: 2014,
//         abstract: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//         image: "interstellar.jpg",

//         reviews: [
//             {
//                 id: 10,
//                 name: "Mia",
//                 vote: 5,
//                 text: "Visually stunning and emotionally resonant."
//             },
//             {
//                 id: 11,
//                 name: "Noah",
//                 vote: 3,
//                 text: "Interesting ideas but too long."
//             },
//             {
//                 id: 12,
//                 name: "Olivia",
//                 vote: 4,
//                 text: "A beautiful story about love and survival."
//             }
//         ]
//     }
// ]


const MovieDetail = () => {

    const { id } = useParams()

    const { isLoading, setIsLoading } = useContext(GlobalContext)

    // const [movies, setMovies] = useState(initialMovies)
    const [movie, setMovie] = useState({})

    const [reviews, setReviews] = useState([])

    const fetchMovie = () => {
        // is loading is true before fetching
        setIsLoading(true)
        axios
            .get(`http://localhost:3000/api/movies/${id}`)
            .then((response) => {
                setMovie(response.data)
                setReviews(response.data.reviews)
                // is loading is false after fetching
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // const findActualMovie = () => {
    //     const actualMovie = movies.find(movie => movie.id === parseInt(id))
    //     setMovie(actualMovie)
    //     setReviews(actualMovie.reviews)
    // }

    useEffect(() => {
        fetchMovie()
    }, [])


    return (
        <>

            <div className="container">
                <div className="row my-3">
                    <div className="col-12">
                        <h2>MovieDetail</h2>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-12 col-md-6 col-lg-4">
                        <img
                            src={movie.image}
                            alt={movie.title}
                            className='img-fluid'
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-8">
                        <h3 className='mb-3'>{movie.title}</h3>
                        <p>Director: {movie.director}</p>
                        <p>Genre: {movie.genre}</p>
                        <p>Release Year: {movie.release_year}</p>
                        <p>Abstract: {movie.abstract}</p>
                        <p>{reviews.length} reviews</p>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-6">
                        <h3>Reviews</h3>
                    </div>
                    <div className="col-6 text-end">
                        <StarsRating vote={movie.vote} />
                    </div>
                </div>
                <div className="row">
                    {reviews.map(review => (
                        <ReviewCard review={review} key={review.id} />
                        // <div className="col-12 col-md-6 col-lg-4" key={element.id}>
                        //     <h4>{element.name}</h4>
                        //     <p>Vote: {element.vote}</p>
                        //     <p>{element.text}</p>
                        // </div>
                    ))}
                </div>
                <div className="row">
                    <div className="col-12">
                        <ReviewForm movie_id={movie.id} updateReviews={() => { fetchMovie() }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieDetail
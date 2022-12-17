import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './styles.css'

const App = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch('https://www.omdbapi.com/?s=Batman&page=2&apikey=fbbcb5a0')

      const json = await response.json()

      if(!response.ok) {
        console.log('error')
      }else {
        console.log(json.Search)
        setMovies(json.Search)
      }

    }
    fetchMovies()

  }, [])
  return (

    <>
    <h1 className='heading'>MoviesMania</h1>
    <div className="container">
      {movies && movies.map(movie => (
        <div key={movie.imdbId} className="movie">
          <div className="poster">
            <img src={movie.Poster} alt = "poster"/>
          </div>
          <div className="title">
            <h4>{movie.Title}</h4>
          </div>
          <p>Release Year: <span>{movie.Year}</span></p>
        </div>
      ))}
    </div>
    </>
  )
}

export default App
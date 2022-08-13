import React from 'react'
import { useEffect } from 'react'
import { fetchEpisode, fetchMovies, fetchShows } from '../../features/movies/movieSlice'
import { useSelector, useDispatch } from 'react-redux'

import MovieCard from '../MovieCard/MovieCard'
import './MovieListing.scss'



import Slider from "react-slick";
import { Settings } from '../../common/apis/Settings'
import Loading from '../Loading/Loading'

const MovieListing = () => {

 

  const {movies, shows, isLoading, episode} = useSelector((state) => state.movies)
  const dispatch = useDispatch()

  // console.log(episode);

  // fetchMovies 
  let movieText = "Harry"
  useEffect(() =>{
    dispatch(fetchMovies(movieText)) 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  // fetchShows 
  let showText = "Spider"
  useEffect(() =>{
    dispatch(fetchShows(showText)) 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  // fetchEpisode 
  let showEpisode = "Mission"
  useEffect(() =>{
dispatch(fetchEpisode(showEpisode))
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  let renderMovies = "";

  renderMovies = movies.map((movie) =>{
   return  <MovieCard key={movie.imdbID} data={movie} />
  }) 

  if(isLoading) {
    return <Loading />
  }

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
          
        <div className="movie-container">
        {/* {
          movies.map((movie) =>{
            return  (
              <MovieCard key={movie.imdbID} data={movie} />
              )
            })
          } */}
          <Slider {...Settings}>
        {renderMovies}
          </Slider>
        </div>
       
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
        <Slider {...Settings}>
        {
          shows.map((show) =>{
            // console.log(movie);
            return <MovieCard key={show.imdbID} data={show} />
          })
        }
        </Slider>
        </div>
      </div>

      <div className="show-list">
        <h2>Episode</h2>
        <div className="movie-container">
        <Slider {...Settings}>
        {
          episode.map((show) =>{
            // console.log(movie);
            return <MovieCard key={show.imdbID} data={show} />
          })
        }
        </Slider>
        </div>
      </div>

    </div>
  )
}

export default MovieListing
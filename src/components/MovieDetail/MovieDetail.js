import React, {useEffect} from 'react'
import {useParams} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import {fetchMoviesOrShows, removeMoviesOrShow} from '../../features/movies/movieSlice'
import './MovieDetail.scss'



import {Link} from 'react-router-dom'
import Loading from '../Loading/Loading'

const MovieDetail = () => {
  const {imdbID, isLoading} = useParams();
 
  // console.log(imdbID);
  const dispatch = useDispatch()


  useEffect(() =>{
    dispatch(fetchMoviesOrShows(imdbID))
    return () =>{
      dispatch(removeMoviesOrShow())
    }
  },[dispatch, imdbID])


  const {selectMS} = useSelector((state) => state.movies)
 
  // console.log(selectMS.length);


  if(isLoading) {
    return <Loading />
  }

 
  return (
    <>
    <div className="movie-section">


  
          <div className="section-left">
            <div className="movie-title">{selectMS.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <i className="fa fa-star"></i> : {selectMS.imdbRating}
              </span>
              <span>
                IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
                {selectMS.imdbVotes}
              </span>
              <span>
                Runtime <i className="fa fa-film"></i> : {selectMS.Runtime}
              </span>
              <span>
                Year <i className="fa fa-calendar"></i> : {selectMS.Year}
              </span>
            </div>
            <div className="movie-plot">{selectMS.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{selectMS.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{selectMS.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{selectMS.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{selectMS.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{selectMS.Awards}</span>
              </div>
             <Link to="/" > <button type='button' className='btn-new'> Back To Home </button> </Link>
            </div>
          </div>
          <div className="section-right">
            <img src={selectMS.Poster} alt={selectMS.Title} />
          </div>
   
      
    </div>
  </>
  )
}

export default MovieDetail
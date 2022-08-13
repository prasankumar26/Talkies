import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { fetchMovies, fetchShows } from '../../features/movies/movieSlice';
import user from "../../images/user.png";
import "./Header.scss";

const Header = () => {

  const [term, setTerm] = useState("")

  // console.log(term);
  const {isLoading} = useSelector((state) => state.movies)
  // console.log(isLoading);

  const dispatch = useDispatch()

  const submitHandler = (e) =>{
    if(term === "") return alert("Please enter any movie ")
    e.preventDefault()
    dispatch(fetchShows(term))
    dispatch(fetchMovies(term))
    setTerm("")
  }


  return (
    <div className="header">
   
      <div className="logo"><Link to="/">Movie App</Link></div>

      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input 
          type="text" 
          value={term} 
          onChange={(e) => setTerm(e.target.value)} 
          placeholder="Search Movies Or Shows" 
          />
          <button disabled={!term && !isLoading } type="submit"><i className='fa fa-search'></i></button>
        </form>
      </div>
    
    <div className="user-image">
      <img src={user} alt="user" />
    </div>
  </div>
  )
}

export default Header
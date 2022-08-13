import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.scss";

import mirchi from '../../images/mirchi.jpg'


const MovieCard = ({data}) => {

  const {Poster, Title, Year,imdbID} = data

// console.log(Poster, Title,Type, Year,imdbID);
  

  return (
   
    <div className="card-item">
      <Link to={`/movie/${imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
           
              <img src={Poster === 'N/A' ? mirchi : Poster} alt={Title} /> 
              
           
            {/* <img src={`${Poster ? Poster : prabhas}`} alt={Title} /> */}
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{Title}</h4>
              <p>{Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
    
  );
};

export default MovieCard
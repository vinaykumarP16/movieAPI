import React from 'react';

const MovieList = props => {
  const FavoriteComp = props.FavoriteComp;
  return (
    <>
      {props.movies ?
         props.movies.map((movie, index) => (
            <div
              className="image-container d-flex justify-content-start m-3"
              key={index}
            >
              <img src={movie.Poster} alt={movie.Title} />
              <div
                onClick={() => props.handleFavList(movie)}
                className="overlay d-flex align-items-center justify-content-center"
              >
                <FavoriteComp />
              </div>
            </div>
          )) : null
        }
    </>
  );
};

export default MovieList;

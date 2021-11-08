import React from 'react';

//Step 2c - import the features required
import { Link, useRouteMatch } from 'react-router-dom';

export default function MovieList(props) {
//Step 2d - declare some props!
const { movies } = props.movie;
const { id } = useRouteMatch;



  return (
    <div className="movie-list">
      {props.movie.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}

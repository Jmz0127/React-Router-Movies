import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SavedList from './Movies/SavedList';

//Step 2a - add the Route feature since you are adding two routes
import { Route, Link } from 'react-router-dom';

//Step 2b - import the necessary component items for the routes
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>

      <SavedList list={[ /* This is stretch */]} />


      <Link to='/'>MoviesList</Link>
      <Link to='/movies'>Movies</Link>
      {/* <div>Replace this Div with your Routes</div> */}
      <Route path="/movies/:movieid">
        <Movie movies={Movie} />
      </Route>
      <Route path="/">
        <MovieList movie={movieList}/>
      </Route>

    </div>
  );
}

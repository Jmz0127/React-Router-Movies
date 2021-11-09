import React, { useState, useEffect } from 'react';
import axios from 'axios';



//Step 2a - add the Route feature since you are adding two routes
import { Route } from 'react-router-dom';

//Step 2b - import the necessary component items for the routes
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import SavedList from './Movies/SavedList';

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
          // ALWAYS CONSOLE.LOG(RESPONSE) FIRST AND INSPECT CONSOLE!! THATS HOW WE KNOW TO USE .data BELOW!!
          console.log(response)
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


  


      {/* Two routes below, first going to MovieList.js - one route for / that loads the MovieList component. This component will need the movies injected into it via props.
      
      and the other going to Movie.js - one route that will take an id parameter after/movies/ (ex: /movies/2, /movies/3 where the id is dynamic). This route should load the Movie component.
      */}
  
      <Route exact path="/">
        <MovieList movies={movieList} />
      </Route>
      <Route path="/movies/:id">
        <Movie />
      </Route>

    </div>
  );
}

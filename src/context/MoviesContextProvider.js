import React from "react";
import MoviesContext from "./movies-context";

const initialState = [{
  id: "m1", title: "The Tomorrow War"
}];

const MoviesReducer = (state, action) => {
  switch(action.type) {
    case "ADD_MOVIE":
      const movies = [...state];
      movies.push({title: action.title, id: Math.random().toString()});
      console.log(movies);
      return movies;

    default:
      return initialState;
  }
};

const MoviesContextProvider = ({ children }) => {
  const [movies, dispatch] = React.useReducer(MoviesReducer, initialState);
  const [isLoading, setIsLoading] = React.useState(false);

  const addMovieHandler = (title) => {
    setIsLoading(true);
    dispatch({ type: "ADD_MOVIE", title: title });
    setIsLoading(false);
  };

  const contextValue = {
    movies: movies,
    addMovie: addMovieHandler,
    loading: isLoading
  };

  return (
    <MoviesContext.Provider value={contextValue}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;

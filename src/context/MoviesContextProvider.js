import React from "react";
import MoviesContext from "./movies-context";

const MoviesContextProvider = ({ children }) => {
  const [movies, setMovies] = React.useState([
    { id: 'm1', title: "The Tomorrow War" },
  ]);

  const contextValue = {
    movies: movies
  };

  return (
    <MoviesContext.Provider value={contextValue}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;

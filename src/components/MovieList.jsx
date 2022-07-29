import { useContext } from "react";
import MoviesContext from "../context/movies-context";
import MovieItem from "./MovieItem";


const MovieList = () => {
  const context = useContext(MoviesContext);
  
  let content = [];
  for(let movie of context.movies) {
    content.push(<MovieItem key={movie.id} movie={movie} />);
  }

  return (
    <>
      {content}
    </>
  );
};

export default MovieList;

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
    <div style={{textAlign: "center", marginTop: "10px", marginBottom: "10px"}}>
      {content}
    </div>
  );
};

export default MovieList;

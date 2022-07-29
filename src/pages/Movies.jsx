import { Link } from "react-router-dom";
import MovieList from "../components/MovieList";

const Movies = () => {
  return (
     <div style={{textAlign: "center"}}>
       <MovieList />
       <Link to="/add-movie" style={{marginTop: "50px"}}>Add Your Own Movie</Link>
     </div>
  );
};

export default Movies;

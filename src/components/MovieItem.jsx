const MovieItem = ({ movie }) => {
  return (
    <div class="item" style={{marginTop: "10px"}}>{movie.title}</div>
  );
};

export default MovieItem;

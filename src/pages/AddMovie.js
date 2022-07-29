import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useContext, useState } from "react";
import MoviesContext from "../context/movies-context";

const AddMovie = (props) => {
  const context = useContext(MoviesContext);
  const [title, setTitle] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  
  const navigate = useNavigate();
  console.log(navigate);

  useEffect(() => {
    if(title.trim().length > 0) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [title]);

  const formSubmitHandler = e => {
    e.preventDefault();
    
    const enteredTitle = title.trim();
      
    context.addMovie(enteredTitle);
    setTitle("");
    navigate("/movies");
  };

  return (
    <div style={{textAlign: "center", margin: "auto"}}>
      <h1>Add A Movie</h1>
      <form onSubmit={formSubmitHandler} style={{marginTop: "20px", marginBottom: "10px"}}>
        <input style={{display: "inline"}} type="text" value={title} onChange={e => setTitle(e.target.value)} />
        <button disabled={btnDisabled}>Add</button>
      </form>
      <Link style={{marginTop: "10px"}} to="/movies">Back To Movies</Link>
    </div>
  );
};

export default AddMovie;

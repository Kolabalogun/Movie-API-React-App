import './App.css'

const MovieCard = (props) => {
    return ( 
        <div className="movie">
          <div>
            <p>{props.movie1.Year}</p>
          </div>

          <div>
            <img
              src={
                props.movie1.Poster === "N/A"
                  ? "http://via.placeholder.com/400"
                  : props.movie1.Poster
              }
              alt={props.movie1.Title}
            />
          </div>
          <div>
              <span>{props.movie1.Type}</span>
              <h3>{props.movie1.Title}</h3>
          </div>
        </div>
     );
}
 
export default MovieCard;
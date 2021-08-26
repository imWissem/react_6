import Rating from "./Rating";
const MovieCard = ({Movie}) => {
    return ( 
    <div className="MovieCard Mv">
        <img className='Face front' src={Movie.Pic} alt={Movie.Name}/>
        <div className="Face back">
        <h3 className="nm">{Movie.Name}</h3>
        <p className="info">{Movie.Type} / {Movie.Date} / <Rating Rating={Movie.Rating} /></p>
        <p className="desc">{Movie.Description}</p>
        <a href={Movie.Trailer}>See Trailer</a>
        </div>
    </div> 
    );
}
 
export default MovieCard;
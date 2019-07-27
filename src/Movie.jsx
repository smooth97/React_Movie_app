import React from 'react';
import './styles/movie.css';

const Movie = ({title, image, key, genres, synopsis}) => {
    return (
        <div className="Movie">
            <div className="Movie_Colums">
                <img className="Movie_Poster" src={image} alt={title} title={title}/>
            </div>
            <div className="Movie_Colums">
                <h2>{title}</h2>
                <div className="Movie_Genres">
                    {genres.map((genre, index) => {
                        return <MovieGenre genre={genre} key={index} />
                    })}
                </div>
                <p className="Movie_Synopsis">
                    {synopsis}
                </p>
            </div>
            
        </div>
    );
};

const MovieGenre = ({genre}) => {
    return (
        <span className="Movie_Genre">{genre}</span>
    )
}

/*Movie.prototype = {
    title : PropTypes.string.isRequired,
    image : PropTypes.string.isRequired,
    generes : PropTypes.array.isRequired,
    synopsis : PropTypes.string.isRequired,
}*/

export default Movie;
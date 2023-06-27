import React, { useState } from 'react';

const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`movie-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={movie.cardImg} alt={movie.title} />
    </div>
  );
};

const Streaming = ({ movies, heading }) => {
  console.log(movies);

  return (
    <div>
      <div className="streams">
        <h2>{heading}</h2>
        <div id="movie-cards">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Streaming;

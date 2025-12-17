import React, { useEffect, useState, useRef } from "react";
import axios from "../../../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import "./row.css";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const rowRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `https://api.themoviedb.org/3${fetchUrl}`
      );
      setMovies(request.data?.results || []);
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    movieTrailer(movie?.name || movie?.title)
      .then((url) => {
        const id = new URLSearchParams(new URL(url).search).get("v");
        setTrailerUrl(id);
      })
      .catch(() => setTrailerUrl(""));
  };

  // 👉 Scroll handlers
  const scrollLeft = () => {
    rowRef.current.scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRight = () => {
    rowRef.current.scrollBy({ left: 500, behavior: "smooth" });
  };

  return (
    <div className="container-fluid mb-4 row-wrapper">
      <h4 className="text-white mb-2">{title}</h4>

      <div className="row-container">
        {/* LEFT BUTTON */}
        <button className="scroll-btn left" onClick={scrollLeft}>
          &#10094;
        </button>

        {/* MOVIES */}
        <div className="movie-row" ref={rowRef}>
          {movies.map((movie) => (
            <img
              key={movie.id}
              className={`movie-poster ${isLargeRow ? "large" : ""}`}
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              onClick={() => handleClick(movie)}
              alt={movie.name}
            />
          ))}
        </div>

        {/* RIGHT BUTTON */}
        <button className="scroll-btn right" onClick={scrollRight}>
          &#10095;
        </button>
      </div>

      {trailerUrl && (
        <div className="mt-3">
          <YouTube videoId={trailerUrl} />
        </div>
      )}
    </div>
  );
};

export default Row;

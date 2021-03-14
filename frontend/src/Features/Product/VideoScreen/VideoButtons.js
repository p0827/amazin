import React from "react";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";

const movieTrailer = require("movie-trailer");

const opts = {
  height: "390",
  width: "60%",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};
export default function UTube({ trailerUrl }) {
  return trailerUrl ? (
    <div className="trailer__frame">
      <YouTube
        className="movie__trailer"
        videoId={trailerUrl === "no trailer" ? "k4D7cuDAvXE" : trailerUrl}
        opts={opts}
      />
    </div>
  ) : (
    <></>
  );
}

export const findTrailer = async (movie, trailerUrl) =>
  trailerUrl
    ? ""
    : await movieTrailer(movie?.name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          return urlParams.get("v");
        })
        .catch((e) => "no trailer");

export function VideoButtons({ movie, trailerUrl, setTrailerUrl, isSeller }) {
  return (
    <>
      {trailerUrl ? (
        <button className="banner__button" onClick={() => setTrailerUrl("")}>
          <i className="fa fa-stop"></i> Close
        </button>
      ) : movie.video ? (
        <button
          className="banner__button"
          disabled={movie.video === "no trailer"}
          onClick={() => setTrailerUrl(movie.video)}
        >
          <i className="fa fa-play"></i> Trailer
        </button>
      ) : (
        <button
          className="banner__button"
          onClick={() => {
            setTrailerUrl(findTrailer(movie), trailerUrl);
            console.log(trailerUrl);
          }}
        >
          <i className="fa fa-search"></i> Trailer
        </button>
      )}

      {isSeller && (
        <Link
          className="banner__button"
          disabled={isSeller === -1}
          onClick={() => {}}
        >
          Sell This?
        </Link>
      )}

      <Link
        className="banner__button"
        disabled={!movie.seller}
        //is there any seller sells this movie?
        to={movie.seller ? `/cart/${movie._id}?qty=1` : `#`}
      >
        <i className="fa fa-shopping-cart"></i> Rent[Buy]
      </Link>
    </>
  );
}

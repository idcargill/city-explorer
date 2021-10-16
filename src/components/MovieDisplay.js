import React from "react";
import Movie from "./Movie";

class MovieDisplay extends React.Component {
  render() {
    return (
      <>
        {this.props.movies.map((movie) => (
          <Movie movie={movie} />
        ))}
      </>
    );
  }
}

export default MovieDisplay;

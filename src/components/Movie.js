import React from "react";
import Card from "react-bootstrap/Card";

class Movie extends React.Component {
  render() {
    return (
      <>
        <Card id={this.props.movie.id} style={{ width: "18rem" }} className='m-2 p-3'>
          <Card.Img variant='top' src={this.props.movie.image_url} />
          <Card.Title>{this.props.movie.title}</Card.Title>
          <Card.Text>{this.props.movie.overview}</Card.Text>
          <Card.Text>Average Rating {this.props.movie.average_votes}</Card.Text>
        </Card>
      </>
    );
  }
}

export default Movie;

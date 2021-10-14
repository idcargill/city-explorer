import React from "react";
import Card from "react-bootstrap/Card";

class MovieDisplay extends React.Component {
  render() {
    return (
      <>
        {this.props.movies.map((m) => (
          <Card id={m.id} style={{ width: "18rem" }} className='m-2 p-3'>
            <Card.Img variant='top' src={m.image_url} />
            <Card.Title>{m.title}</Card.Title>
            <Card.Text>{m.overview}</Card.Text>
            <Card.Text>Average Rating {m.average_votes}</Card.Text>
          </Card>
        ))}
      </>
    );
  }
}

export default MovieDisplay;

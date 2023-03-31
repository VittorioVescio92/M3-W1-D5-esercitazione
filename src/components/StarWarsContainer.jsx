import { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

class StarWarsContainer extends Component {
  render() {
    const { movies } = this.props;

    return (
      <Container fluid className="px-0">
        <div>
          <h3 className="text-light">Star Wars</h3>
        </div>
        <Row id="col" className="mb-5 mt-4 px-0">
          {movies &&
            movies.map(movie => (
              <Col key={movie.imdbID} xs={12} sm={6} md={4} xl={3} className="g-3">
                <Card className="bg-secondary rounded-3 overflow">
                  <Card.Img variant="top" className="cover" src={movie.Poster} alt="Film Cover" />
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default StarWarsContainer;

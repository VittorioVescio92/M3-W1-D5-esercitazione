import { Component } from "react";
import { Container } from "react-bootstrap";
import StarWars from "./StarWars";

class MyMain extends Component {
  state = {
    StarWars: [],
  };

  async componentDidMount() {
    try {
      const response = await fetch("http://www.omdbapi.com/?apikey=4d29747d&s=star wars");
      const data = await response.json();
      this.setState({ StarWars: data.Search });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <Container className="container-fluid justify-content-center px-1">
        <StarWars movies={this.state.StarWars} />
      </Container>
    );
  }
}

export default MyMain;

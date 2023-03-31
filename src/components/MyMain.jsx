import { Component } from "react";
import { Container } from "react-bootstrap";
import TheLordOfTheRingsContainer from "./TheLordOfTheRingsContainer";
import StarWarsContainer from "./StarWarsContainer";
import HarryPotterContainer from "./HarryPotterContainer";

class MyMain extends Component {
  state = {
    TheLordOfTheRings: [],
    StarWars: [],
    HarryPotter: [],
  };

  async componentDidMount() {
    try {
      const response = await fetch("http://www.omdbapi.com/?apikey=4d29747d&s=The lord of the rings");
      const data = await response.json();
      const movies = data.Search.filter(movie => movie.Type === "movie");
      this.setState({ TheLordOfTheRings: movies });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <>
        <Container className="container-fluid justify-content-center px-1">
          <TheLordOfTheRingsContainer movies={this.state.TheLordOfTheRings} />
        </Container>
        <Container className="container-fluid justify-content-center px-1">
          <StarWarsContainer movies={this.state.StarWars} />
        </Container>
        <Container className="container-fluid justify-content-center px-1">
          <HarryPotterContainer movies={this.state.HarryPotter} />
        </Container>
      </>
    );
  }
}

export default MyMain;

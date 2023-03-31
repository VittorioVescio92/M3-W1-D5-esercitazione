import { Component } from "react";
import { Alert, Container, Spinner } from "react-bootstrap";
import TheLordOfTheRingsContainer from "./TheLordOfTheRingsContainer";
import StarWarsContainer from "./StarWarsContainer";
import HarryPotterContainer from "./HarryPotterContainer";

class MyMain extends Component {
  state = {
    TheLordOfTheRings: [],
    StarWars: [],
    HarryPotter: [],
    isLoading: true,
    StarWarsError: false,
    HarryPotterError: false,
    TheLordOfTheRingsError: false,
  };

  async componentDidMount() {
    try {
      const response = await fetch("http://www.omdbapi.com/?apikey=4d29747d&s=Star wars");
      const data = await response.json();
      const movies = data.Search.filter(movie => movie.Type === "movie");
      this.setState({ StarWars: movies, isLoading: false });
    } catch (error) {
      this.setState({ isLoading: false, StarWarsError: true });
      console.error(error);
    }

    try {
      const response = await fetch("http://www.omdbapi.com/?apikey=4d29747d&s=Harry Potter");
      const data = await response.json();
      const movies = data.Search.filter(movie => movie.Type === "movie");
      this.setState({ HarryPotter: movies, isLoading: false });
    } catch (error) {
      this.setState({ isLoading: false, HarryPotterError: true });
      console.error(error);
    }

    try {
      const response = await fetch("http://www.omdbapi.com/?apikey=4d29747d&s=The lord of the rings");
      const data = await response.json();
      const movies = data.Search.filter(movie => movie.Type === "movie");
      this.setState({ TheLordOfTheRings: movies, isLoading: false });
    } catch (error) {
      this.setState({ isLoading: false, TheLordOfTheRingsError: true });
      console.error(error);
    }
  }

  render() {
    return (
      <>
        {this.state.isLoading && (
          <div className="text-center mt-5">
            <Spinner variant="danger" animation="border" role="status" id="spinner">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
        <Container className="container-fluid justify-content-center px-1">
          <StarWarsContainer movies={this.state.StarWars} />
          {this.state.StarWarsError && <Alert variant="danger">Ops! Qualcosa è andato storto...</Alert>}
          <HarryPotterContainer movies={this.state.HarryPotter} />
          {this.state.HarryPotterError && <Alert variant="danger">Ops! Qualcosa è andato storto...</Alert>}
          <TheLordOfTheRingsContainer movies={this.state.TheLordOfTheRings} />
          {this.state.TheLordOfTheRingsError && <Alert variant="danger">Ops! Qualcosa è andato storto...</Alert>}
        </Container>
      </>
    );
  }
}

export default MyMain;

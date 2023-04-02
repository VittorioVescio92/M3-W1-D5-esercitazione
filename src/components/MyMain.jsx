import { Component } from "react";
import { Alert, Container, Spinner } from "react-bootstrap";
import MoviesContainer from "./MoviesContainer.jsx";

class MyMain extends Component {
  state = {
    TheLordOfTheRings: [],
    StarWars: [],
    HarryPotter: [],
    StarWarsIsLoading: true,
    HarryPotterIsLoading: true,
    TheLordOfTheRingsIsLoading: true,
    StarWarsError: false,
    HarryPotterError: false,
    TheLordOfTheRingsError: false,
  };

  async componentDidMount() {
    try {
      const response = await fetch("http://www.omdbapi.com/?apikey=4d29747d&s=Star wars");
      const data = await response.json();
      const movies = data.Search.filter(movie => movie.Type === "movie");
      this.setState({ StarWars: movies, StarWarsIsLoading: false });
    } catch (error) {
      this.setState({ StarWarsIsLoading: false, StarWarsError: true });
      console.error(error);
    }

    try {
      const response = await fetch("http://www.omdbapi.com/?apikey=4d29747d&s=Harry Potter");
      const data = await response.json();
      const movies = data.Search.filter(movie => movie.Type === "movie");
      this.setState({ HarryPotter: movies, HarryPotterIsLoading: false });
    } catch (error) {
      this.setState({ HarryPotterIsLoading: false, HarryPotterError: true });
      console.error(error);
    }

    try {
      const response = await fetch("http://www.omdbapi.com/?apikey=4d29747d&s=The lord of the rings");
      const data = await response.json();
      const movies = data.Search.filter(movie => movie.Type === "movie");
      this.setState({ TheLordOfTheRings: movies, TheLordOfTheRingsIsLoading: false });
    } catch (error) {
      this.setState({ TheLordOfTheRingsIsLoading: false, TheLordOfTheRingsError: true });
      console.error(error);
    }
  }

  render() {
    return (
      <>
        <Container className="container-fluid justify-content-center px-1">
          <MoviesContainer movies={this.state.StarWars} title="Star Wars" />
          {this.state.StarWarsIsLoading && !this.state.StarWarsError && (
            <div className="text-center mt-5">
              <Spinner variant="danger" animation="border" role="status" id="spinner">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          )}
          {this.state.StarWarsError && <Alert variant="danger">Ops! Qualcosa è andato storto...</Alert>}

          <MoviesContainer movies={this.state.HarryPotter} title="Harry Potter" />
          {this.state.HarryPotterIsLoading && !this.state.HarryPotterError && (
            <div className="text-center mt-5">
              <Spinner variant="danger" animation="border" role="status" id="spinner">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          )}
          {this.state.HarryPotterError && <Alert variant="danger">Ops! Qualcosa è andato storto...</Alert>}

          <MoviesContainer movies={this.state.TheLordOfTheRings} title="The Lord of the Rings" />
          {this.state.TheLordOfTheRingsIsLoading && !this.state.TheLordOfTheRingsError && (
            <div className="text-center mt-5">
              <Spinner variant="danger" animation="border" role="status" id="spinner">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          )}
          {this.state.TheLordOfTheRingsError && <Alert variant="danger">Ops! Qualcosa è andato storto...</Alert>}
        </Container>
      </>
    );
  }
}
export default MyMain;

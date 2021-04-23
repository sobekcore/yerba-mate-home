import { Component } from "react";
import axios from "axios";
import LoadingImage from "../assets/loading.svg";
import Navbar from "../components/navbar";
import Icons from "../components/icons";

let endpoint = "https://yerba-mate-home.herokuapp.com";

export default class DatabasePage extends Component {
  state = {
    items: [],
    search: "",
  };

  componentDidMount() {
    this.getAllMate();
  }

  // Getting all the mate from DB
  getAllMate = () => {
    axios.get(endpoint + "/api/mate").then((response) => {
      if (response.data) {
        this.setState({
          items: response.data,
        });
      } else {
        this.setState({
          items: [],
        });
      }
    });
  };

  // Change search query after inputs
  handleInputChange(e) {
    this.setState({ search: e.target.value });
  }

  render() {
    // Filtering items array with search
    var items = this.state.items;
    var search = this.state.search;
    var filteredItems = items.filter((item) => {
      return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
      <>
        <Navbar />
        <div className="nav-offset">
          <h1 className="database__title">Yerba Mate Database</h1>
          <div className="database__input">
            <div className="database__input__box">
              <Icons style="search" />
              <input
                className="database__input__box--field"
                onChange={this.handleInputChange.bind(this)}
                placeholder="Search for mate..."
                maxLength="30"
              />
            </div>
          </div>
          <ul className="database__list">
            {items == 0 ? (
              <div className="database__loading">
                <img className="database__loading--img" src={LoadingImage} />
              </div>
            ) : (
              // Show either loading or mate data
              filteredItems.map((item) => {
                return (
                  <li className="database__item" key={item.slug}>
                    {item.name} - {item.country}
                    <br />
                  </li>
                );
              })
            )}
          </ul>
        </div>
      </>
    );
  }
}

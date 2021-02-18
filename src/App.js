import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";
import FooterComponent from "./components/FooterComponent";
import NavbarComponent from "./components/NavbarComponent";
import CarouselComponent from "./components/CarouselComponent";
import ReturnPolicyComponent from "./components/ReturnPolicyComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="dark">
          <div className="container">
            <NavbarBrand href="/"> <h1>Gurung Brothers Bookstore </h1></NavbarBrand>
          </div>
        </Navbar>
        <NavbarComponent />
        <CarouselComponent />
        <ReturnPolicyComponent />
        <FooterComponent />
      </div>
    );
  }
}

export default App;

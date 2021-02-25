import React, { Component } from "react";
import Header from "../layout/Header";
import Banner from "../Banner";
import Product from "../Product";
import '../Product.css';

class Homepage extends Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        <Banner />
        <div className="product__row">
        <Product id={1} title="The King Of Drugs - Nora Barret" price={4.99} rating = {3} image ="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105" />
        <Product id={2} title="The King Of Drugs - Nora Barret" price={4.99} rating = {3} image ="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105" />

        </div>
      </>
        
    );
  }
}

export default Homepage;

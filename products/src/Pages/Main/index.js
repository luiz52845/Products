import React, { Component } from "react";
import api from "../../services/api";

import "./styles.css"


export default class Main extends Component {

  state = {
    products: [],
  }


  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get("products");

    this.setState({ products: response.data.docs })
    console.log(response.data)
  };

  render() {
    return (
      <div className="product-list">
        {this.state.products.map(product => (
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>
            <p>{product.url}</p>

            <a href="www.google.com">Acessar</a>


          </article>
        ))}
      </div>
    )
  }
}
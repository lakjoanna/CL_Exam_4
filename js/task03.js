import React, {Component} from "react";
import ReactDOM from "react-dom";
import products from "./data/products";


class Shop extends React.Component {
  constructor(props) {
      super(props)

      this.state = {
          cart: []
      }
  }

  
  addProductToCart = product => {
      let cart = this.state.cart

      let a = cart.filter(p => p.id == product.id)

      if (a.length == 0) {
          cart.push(product)
          this.setState({
              cart
          })
      }
  }

  render() {
      return (
          <div>
              <Products addProductToCart={this.addProductToCart} products={products} />
              <Cart products={this.state.cart} />
          </div>
      )
  }
}

class Products extends React.Component {
  constructor(props) {
      super(props)
  }

  render() {
      return (
          <div>
              <h2>Produkty</h2>
              <ul>
                  {
                      this.props.products.map((p, key) => {
                          return (
                              <li key={key}>
                                  {p.id}
                                  -
                                  {p.name}
                                  <button onClick={() => { this.props.addProductToCart(p) }} class="btn btn-primary">Kup!</button>
                              </li>
                          )
                      })
                  }
              </ul>
          </div>

      )
  }
}

class Cart extends React.Component {
  constructor(props) {
      super(props)
  }

  render() {
      return (
          <div>
              <h2>Koszyk</h2>
              <ul>
                  {
                      this.props.products.map((p, key) => {
                          return (
                              <li key={key}>
                                  {p.id}
                                  -
                                  {p.name}
                              </li>
                          )
                      })
                  }
              </ul>
          </div>

      )
  }
}



function App() {
  return (
          <Shop />
  )
}



ReactDOM.render(
  <App />,
  document.getElementById("app")
);




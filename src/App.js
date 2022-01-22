import logo from './logo.svg';
import './styles/styles.scss';
import NavBar from './components/navbarComponent';
import Footer from './components/footerComponent';
import Breadcrumb from './components/breadcrumbComponent';
import SingleProduct from './components/singleProductComponent';
import React, { Component, Suspense, lazy } from 'react';
import dummyProducts from './services/products.json'

const Cart = React.lazy(() => import('./components/CartComponent'));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finalPrice: 0,
      cartItems: [],
      newaddedProductQuantity: 1,

      products: dummyProducts,
    }

    this.onAddNewProductToCart = this.onAddNewProductToCart.bind(this)
    this.onRemoveProductFromCart = this.onRemoveProductFromCart.bind(this)
    this.onQuantityControlBtnClicked = this.onQuantityControlBtnClicked.bind(this)
  }

  onAddNewProductToCart(productId) {
    const product = this.state.products.find(product => product.id === productId);
    product.quantity = this.state.newaddedProductQuantity;
    this.setState({ newaddedProductQuantity: 1 });
    if (this.state.cartItems.filter(product => product.id === productId).length <= 0) {
      const cartItems = [...this.state.cartItems, product];
      this.setState({ cartItems })
      let finalPrice = this.state.finalPrice + (product.price * product.quantity);
      this.setState({ finalPrice });

    }
  }

  onRemoveProductFromCart(productId, index) {
    const cartItem = this.state.cartItems.find(product => product.id === productId);
    const cartItems = this.state.cartItems.slice(productId, 1);
    let finalPrice = this.state.finalPrice -  (cartItem.price * cartItem.quantity);
    this.setState({ finalPrice });
    this.setState({ cartItems })
  }

  onQuantityControlBtnClicked(productId, quantity) {
    let newaddedProductQuantity = quantity;
    this.setState({ newaddedProductQuantity });
  }

  render() {
    return (
      <div className="body-wrapper">
        <NavBar cartCount={this.state.cartItems.length} />
        <Suspense fallback="....">
          <Cart items={this.state.cartItems}
            finalPrice={this.state.finalPrice}
            onRemoveProductFromCart={this.onRemoveProductFromCart} />
        </Suspense>

        <Breadcrumb />
        <SingleProduct product={this.state.products[0]}
          onAddNewProductToCart={this.onAddNewProductToCart}
          onQuantityControlBtnClicked={this.onQuantityControlBtnClicked} />
        <Footer />
      </div>
    );
  }
}

export default App;

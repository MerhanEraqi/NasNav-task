import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <header>
        <div className="header-top py-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4 p-0">
                <div className="header-top-left d-flex">
                  <button className="navbar-toggler pr-5 pl-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="true" aria-label="Toggle navigation">
                    <i class="fas fa-bars"></i>
                  </button>
                  <div className="logo pb-sm-30 pb-xs-30">
                    <a href="index.html">
                      <img src={window.location.origin + '/images/logo.png'} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="header-top-right col-lg-9 col-md-8 justify-content-end align-items-center d-flex">
                <ul className="ht-menu">
                  <li>
                    <i class="fas fa-phone-volume"></i>
                    <span>Contact US</span>
                  </li>
                  <li>
                    <i class="fas fa-shopping-cart"></i>
                    <span>Track Order</span>
                  </li>
                  <li>
                    <i class="fas fa-map-marker-alt"></i>
                    <span>Find A Store</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="header-middle pl-sm-0 pr-sm-0 pl-xs-0 pr-xs-0 navbar-collapse collapse show" id='navbarsExample01'>
          <div className="container">
            <div className="row">
              <div className="header-middle-container col-lg-9 pl-0 ml-sm-15 ml-xs-15">
                <form action="#" className="hm-searchbox">
                  <input type="text" placeholder="Search" />
                  <button className="search-btn" type="submit"><i className="fa fa-search"></i></button>
                </form>
                <div className='brand'>
                  <img src={window.location.origin + '/images/1280px-Adidas_Logo.svg.png'} alt="" />
                </div>
                <div className="header-middle-right">
                  <ul className="hmr-menu">
                    <li>
                      <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <span className='position-relative'>
                          <i class="fab fa-opencart"></i>
                          <span class="position-absolute top-0 start-100 translate-middle p-2 border border-light rounded-circle">
                            {this.props.cartCount}
                          </span>
                        </span>
                        <span>Cart</span>
                      </button>
                    </li>
                    <li>
                      <i class="far fa-heart"></i>
                      <span>Wishlist</span>
                    </li>
                    <li>
                      <i class="far fa-user"></i>
                      <span>Login</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="header-bottom mb-0 header-sticky stick d-none d-lg-block d-xl-block">
          <div className="container">
            <ul className='hb-list row list-unstyle'>
              <li><a href='/'>Men</a></li>
              <li>Women</li>
              <li>Unisex</li>
              <li>Kids</li>
              <li>Best Sellers</li>
              <li>New Arrivals</li>
              <li className='text-danger'>Offers</li>
            </ul>

          </div>
        </div>
      </header>
    );
  }
}

export default NavBar;
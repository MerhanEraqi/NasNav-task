import React, { Component } from 'react';

class Breadcrumb extends Component {
  render() {
    return (
      <div className='breadcrumb-contaier py-3' aria-label="breadcrumb">
        <ol class="breadcrumb container my-0">
          <li class="breadcrumb-item"><a href="#">Men</a></li>
          <li class="breadcrumb-item"><a href="#">Clothing</a></li>
          <li class="breadcrumb-item"><a href="#">Tops</a></li>
          <li class="breadcrumb-item"><a href="#">Adidas</a></li>
          <li class="breadcrumb-item active" aria-current="page">Adidas Black T-Shirt</li>
        </ol>
      </div>
    );
  }
}

export default Breadcrumb;
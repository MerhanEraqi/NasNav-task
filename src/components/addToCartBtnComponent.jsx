import React, { Component } from 'react';

class AddToCartBtn extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <button onClick={() => this.props.onAddNewProductToCart(this.props.productId)} className='add-cart col-5'>Add To Cart</button>
        );
    }
}

export default AddToCartBtn;
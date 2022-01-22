import React, { Component } from 'react';

class Cart extends Component {
    constructor(props) {
        super(props);


    }
    removeItem(index) {
        // cartItems = cartItems.find(item => item.id === index);
        // cartItems.splice(index, 1)
        // console.log(cartItems)

    }

    componentDidMount() {
     
    }

    render() {
        return (
            <div className="cart-container offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">My Cart</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    {this.props.items.length > 0 ? this.props.items.map((product, i) => {
                        return <div key={i} id={product.id} className='d-flex cart-card shadow-sm'>
                            <div className='col-4 p-0 product-img'><img className='w-100 h-100' src={product.mainimg} alt="" /></div>
                            <div className='col-8 px-3'>
                                <div className='title'>
                                    {product.name}
                                </div>
                                <div className='quantity py-2'>Quantity: {product.quantity}</div>
                                <div className='d-flex justify-content-between'>
                                    <div className='price'>{product.price} <span>LE</span></div>
                                    <button className='remove-btn' onClick={() => this.props.onRemoveProductFromCart(product.id, i)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    }): ''}

                    <p className='total-price'>Total: {this.props.finalPrice} LE</p>
                    <div>
                        <div className='cart-action-btns justify-content-between d-flex'>
                            <button className='review-cart col-5'>Review Cart</button>
                            <button className='complete-cart col-5'>Complete Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;
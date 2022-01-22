import React, { Component } from 'react';
import AddToCartBtn from './addToCartBtnComponent';
import QuantityControl from './quantityControlComponent';

class ProductDetails extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="product-details-view-content">
                <div className="product-info">
                    <div className="brand"><img src="http://localhost:3000/images/1280px-Adidas_Logo.svg.png" alt="" /></div>
                    <h2>{this.props.product.name}</h2>
                    <span className="product-details-ref">{this.props.type}</span>
                    <div className='price-rate-box'>
                        <div className="rating-box  d-flex py-4">
                            <ul class="rating rating-with-review-item d-flex">
                                <li>
                                    <i className="fas fa-star"></i>
                                </li>
                                <li>
                                    <i className="fas fa-star"></i>
                                </li>
                                <li>
                                    <i className="fas fa-star"></i>
                                </li>
                                <li>
                                    <i className="fas fa-star"></i>
                                </li>
                                <li>
                                    <i className="far fa-star"></i>
                                </li>
                            </ul>
                            <span className='px-4 rating-num'>4.5 of 5.0</span>
                            <span>{this.props.product.rates} Rates</span>
                        </div>

                        <div className='pricing-box pb-4 d-flex align-items-center'>
                            <div className='after-sale-price'>{this.props.product.afterSalePrice} <span>LE</span></div>
                            <div className='actuale-price px-4'>{this.props.product.price} <span>LE</span></div>
                            <div className='sale-percentage shadow-sm px-2 py-1'>{this.props.product.discount} Off</div>
                        </div>
                    </div>

                    <div className="siz-box-container py-4">
                        <h2 className='pb-4'>Size</h2>
                        <ul className='siz-box d-flex align-items-center'>
                            {this.props.product.size.map((size, i) => {
                                return <li key={i}>{size}</li>
                            })}
                        </ul>
                    </div>

                    <div className="color-box-container py-4">
                        <h2 className='pb-4'>Color</h2>
                        <ul className='color-box d-flex align-items-center'>
                            {this.props.product.color.map((color, i) => {
                                return <li key={i}><img src={color} alt="" /></li>

                            })}
                        </ul>
                    </div>


                    <div className="quantity-box-container py-4">
                        <h2 className='pb-4'>Quantity</h2>
                        <QuantityControl productId={this.props.product.id}
                            quantity={this.props.product.quantity}
                            onQuantityControlBtnClicked={this.props.onQuantityControlBtnClicked}/>
                        <div className='quantity-action'>
                            <AddToCartBtn productId={this.props.product.id} 
                            onAddNewProductToCart={this.props.onAddNewProductToCart}/>
                            <button className='pick-up-store col-5'>PickUp From Store</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetails;
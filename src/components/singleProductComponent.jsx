import React, { Component } from 'react';
import ProductDetails from './productDetailsComponent';
import ProductGallery from './productGalleryComponent';
import ProductsSlider from './ProductsSliderComponent';

class SingleProduct extends Component {
    state = {}
    render() {
        return (
            <div>
                <div class="content-wraper">
                    <div class="container">
                        <div class="row single-product-area py-5">
                            <div class="col-6">
                            <ProductGallery product={this.props.product}/>
                            </div>

                            <div class="col-6">
                                <ProductDetails product={this.props.product}
                                onAddNewProductToCart={this.props.onAddNewProductToCart}
                                onQuantityControlBtnClicked={this.props.onQuantityControlBtnClicked}/>
                            </div>
                        </div>
                    </div>
                </div>

                <ProductsSlider/>
            </div>


        );
    }
}

export default SingleProduct;
import React, { Component } from 'react';

class QuantityControl extends Component {
    constructor(props) {
        super(props);
        this.state = { quantity: 1 };

        this.plusQuantityBtnClick = this.plusQuantityBtnClick.bind(this);
        this.minusQuantityBtnClick = this.minusQuantityBtnClick.bind(this);
        this.onQuantityChanges = this.onQuantityChanges.bind(this);
    }

    plusQuantityBtnClick(){
        const quantity = this.state.quantity + 1
        this.setState({
            quantity
          },() => { this.onQuantityChanges(); })
    }

    minusQuantityBtnClick(){
        if(this.state.quantity > 1){
            const quantity = this.state.quantity - 1
            this.setState({
                quantity
              },() => { this.onQuantityChanges(); })
        }
    }

    onQuantityChanges(){
        console.log(this.state.quantity)
        this.props.onQuantityControlBtnClicked(this.props.productId,this.state.quantity);
    }

    render() {
        return (
            <div className='quantity-control col-5 mb-4'>
                <div class="input-group d-flex justify-content-center align-items-center">
                    <span class="input-group-btn">
                        <button onClick={() => this.minusQuantityBtnClick()} type="button" class="btn btn-number" data-type="minus" data-field="quant[2]">
                            -
                        </button>
                    </span>
                    <input type="text" name="quantitu" class="form-control input-number" value={this.state.quantity} min="1" max="100" />
                    <span class="input-group-btn" >
                        <button onClick={() => this.plusQuantityBtnClick()} type="button" class="btn btn-number" data-type="plus" data-field="quant[2]">
                            +
                        </button>
                    </span>
                </div>
            </div>
        );
    }
}

export default QuantityControl;
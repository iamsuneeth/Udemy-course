import React, { Component } from 'react';
import {connect} from 'react-redux';
import {removeFromCart} from '../../actions';
import './shoppingCart.css';

class ShoppingCart extends Component {

    renderList = () => {
    const {shoppingCart} = this.props;
    const {removeFromCartAction} = this.props;
    return shoppingCart.map((item) => (
        <li key={item.id}
        onClick={() => removeFromCartAction(item)}
        className={'list-item'}>
             <img src={item.link} className={'item-image'} alt="presentation" />
             <span>{item.title}</span>
        </li>
    ));
   }

    render() {
        return (
        <ul className={'item-list'}>
            {this.renderList()}
        </ul>
        )    
    }
}

const mapStateToProps = (reduxState) => ({
    shoppingCart: reduxState.shoppingCart
})

const mapDispatchToProps = (dispatch) => ({
    removeFromCartAction: (item) => dispatch(removeFromCart(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
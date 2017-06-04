import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../actions';
import './items.css';

class Items extends Component {

    renderList = () => {
        const { items } = this.props;
        const { addItemAction } = this.props;
        return items.map(( elem ) => (
            <li
            key={elem.id}
            className={'item-list-item'}
            onClick={() => addItemAction(elem)}>
                <img src={elem.link} className={'item-image'} alt="presentation" />
                <span>{elem.title}</span>
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
    items: reduxState.items
})

const mapDispatchToProps = (dispatch) => ({
    addItemAction: (item) => dispatch(addToCart(item))
})
export default connect(mapStateToProps, mapDispatchToProps)(Items);
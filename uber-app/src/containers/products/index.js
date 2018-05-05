import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import './products.css';

class Products extends React.Component {

    render() {
        console.log(this.props);
        const {products} = this.props;
        return (
            <div className={'products'}>
                Hi I'm {this.props.params.name}
                <div className={'product-list'}>
                { products.map(elem => (
                    <div key={elem.product_id} className={'product-list-item'}>
                        <h2>{elem.display_name}</h2>
                        <h2>{elem.estimate}</h2>
                    </div>
                ))}
                </div>
                <Link to='/'>Go back</Link>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.product
    }
}


export default connect(mapStateToProps)(Products);
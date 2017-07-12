import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Autocomplete from 'react-google-autocomplete';
import { addLocation, fetchProducts } from '../../actions';
import './location.css';

const style = {
    width:'400px',
    height: '40px',
    borderRadius: '3px',
    padding: '5px',
    border: '1px solid gray',
    margin: '10px auto'
}

class Location extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
        }
    }
    render() {
        return (
            <div className={'location'}>
                <div className={'name'}>
                    <label htmlFor="location-name">Enter Name: </label>
                    <input type="text" className={'location-name'} name="location-name" onChange={(e) => this.setState({ name: e.target.value })}/>
                </div>
                <Autocomplete 
                style={style}
                onPlaceSelected={(place) => {
                    console.log(place);
                    const startLatitude = place.geometry.location.lat();
                    const startLongitude = place.geometry.location.lng();
                    console.log(startLatitude);
                    this.props.addLocationDispatch({startLatitude,startLongitude})
                }}
                types={[]}
                componentRestrictions={{country:"in"}}/>
                 <Autocomplete 
                style={style}
                onPlaceSelected={(place) => {
                    console.log(place);
                    const endLatitude = place.geometry.location.lat();
                    const endLongitude = place.geometry.location.lng();
                    console.log(endLatitude);
                    this.props.addLocationDispatch({endLatitude,endLongitude})
                }}
                types={[]}
                componentRestrictions={{country:"in"}}/>
                <button className='location-button' onClick={() => this.props.fetchProductsAction(this.state.name)}>Find Location</button>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProductsAction: (name) => dispatch(fetchProducts(name)),
        addLocationDispatch: (location) => dispatch(addLocation(location))
    }
}

export default connect(null, mapDispatchToProps)(Location);

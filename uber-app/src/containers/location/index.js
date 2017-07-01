import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Autocomplete from 'react-google-autocomplete';
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
    render() {
        return (
            <div className={'location'}>
                <Autocomplete 
                style={style}
                onPlaceSelected={(place) => {
                    console.log(place);
                }}
                types={['address']}
                componentRestrictions={{country:"in"}}/>
            </div>
        )
    }
}

export default connect()(Location);

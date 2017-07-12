import { server_secret } from '../secrets';

export const ADD_LOCATION = 'ADD_LOCATION';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export const addLocation = location => ({
    type: ADD_LOCATION,
    payload: location
});

const headers = {
    'Authorization' : `Token ${server_secret}`  ,
    'Content-Type' : 'application/json',
    'Accept-Language' : 'en_EN'
}

export const fetchProducts = name => {

    return (dispatch, getState) => {
        const { startLatitude, startLongitude, endLatitude, endLongitude} = getState().location;

        fetch(`https://api.uber.com/v1.2/estimates/price?start_latitude=${startLatitude}&start_longitude=${startLongitude}&end_latitude=${endLatitude}&end_longitude=${endLongitude}`,
        {
            method: 'GET',
            headers
        }).then((data) => data.json())
        .then((data) => console.log(data));

        return {
            type: FETCH_PRODUCTS,
            payload: name
        }
    }
}
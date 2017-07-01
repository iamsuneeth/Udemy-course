import React from 'react';
import { Route } from 'react-router';

import App from './components/App';
import Location from './containers/location';

export default (
    <Route path={'/'} component={App}>
        <Route path={'location'} component={Location} />
    </Route>
)
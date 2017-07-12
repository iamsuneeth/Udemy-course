import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Location from './containers/location';

export default (
    <Route path={'/'} component={App}>
        <IndexRoute component={Location} />
    </Route>
)
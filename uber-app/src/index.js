import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import { Router } from 'react-router';
import routes from './routes';
import './index.css';
import reducers from './reducers';

const middleware = [thunk];
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={ store }>
        <Router routes={routes} />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
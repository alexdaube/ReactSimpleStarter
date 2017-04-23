import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import { anchorate } from 'anchorate';
import { Provider } from "react-redux";
import { BrowserRouter as Router} from 'react-router-dom';
import reduxThunk from 'redux-thunk';


import reducers from "./reducers/rootReducer";
import routes from './routes';
import '../styles/app.scss';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

function onUpdate () {
    anchorate()
}

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('app'));

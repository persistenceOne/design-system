import React from 'react';
import ReactDOM from 'react-dom';
import './assets/design-components/scss/main.css';
import './css/main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
import {rootReducer} from "./store/reducers";
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

const store = createStore(
    rootReducer,
    composeWithDevTools({
        trace: true,
    })(applyMiddleware(thunk)),
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();

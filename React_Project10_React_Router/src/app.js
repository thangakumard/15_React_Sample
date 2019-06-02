"use strict"

//REACT
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
//REACT-ROUTER
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
//IMPORT COMBINE REDUCERS
import reducers from './reducers/index'

//IMPORT ACTIONS
import { addToCart } from './actions/cartActions'
import { postBooks, deleteBooks, updateBooks } from './actions/booksActions'

//IMPORT 
import BooksList from './components/pages/booksList';
import Cart from './components/pages/cart';
import BookForm from './components/pages/bookForm';
import Main from './main';


//STEP 1 Create the store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

const Routes = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={BooksList} />
                <Route path="/admin" component={BookForm} />
                <Route path="/cart" component={Cart} />
            </Route>
        </Router>
    </Provider>
);

render(
    Routes, document.getElementById('app')
);
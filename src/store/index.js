import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),window.__REDUX_DEVTOOL_EXTENSION__ ? window.__REDUX_DEVTOOL_EXTENSION__() : (f) => (f)
    )
)

export default store
// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import { createStore } from 'redux';
import rootReducer from '../reducers';

// const initialState = {};

// const middleware = [thunk];

// const store = createStore(
//     rootReducer,
//     initialState,
//     compose(
//         applyMiddleware(...middleware),window.__REDUX_DEVTOOL_EXTENSION__ ? window.__REDUX_DEVTOOL_EXTENSION__() : (f) => (f)
//     )
// )

const store = createStore(
    rootReducer,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
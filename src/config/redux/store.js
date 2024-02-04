// import { createStore } from 'redux'
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from "./reducer/reducer";

const store = createStore(reducer, applyMiddleware(thunk));

export default store;


// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from '../reducers';

// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk)
// );

// export default store;

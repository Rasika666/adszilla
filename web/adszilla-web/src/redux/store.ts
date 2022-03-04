import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'
import {rootReducer} from "./post-loggin/reducers/rootReducer";


const initState = {};
const middleware = [thunk]


const store = () => createStore(
    rootReducer,
    initState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;


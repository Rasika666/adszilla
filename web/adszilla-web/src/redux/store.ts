import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import {composeWithDevTools} from 'redux-devtools-extension'


const initState = {};
const middleware = [thunk]


const store = () => createStore(
    rootReducer,
    initState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;


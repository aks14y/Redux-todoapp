import { applyMiddleware, createStore } from "redux";  
import rootReducer from "../reducer/RootReducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';



const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default Store;
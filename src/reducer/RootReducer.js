import TodoReducer from "./TodoReducer";
import PostReducer from "./PostReducer"

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  TodoReducer,
  PostReducer
})

export default rootReducer;
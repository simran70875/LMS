// rootReducer.js
import { combineReducers } from "redux";
import authReducer from "../reducers/authReducer";
import bookReducer  from "../reducers/bookSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  books: bookReducer ,
});

export default rootReducer;

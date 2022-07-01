import { combineReducers } from "redux";
import productReducer from "./productreducer";
import usersReducers from "./userreducer";

const rootReducer = combineReducers({
  user: usersReducers,product:productReducer
});

export default rootReducer;

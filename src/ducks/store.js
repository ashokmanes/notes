import { createStore, combineReducers } from "redux";
import { notesReducer } from "./notesReducer";
import { userLoginReducer } from "./loginReducer";

const reducer = combineReducers({
  notes: notesReducer,
  user: userLoginReducer,
});
const store = createStore(reducer);

export default store;

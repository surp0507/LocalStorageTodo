import { combineReducers } from "redux";
import { todoReducer } from "./todosReducer";
import updateReducer from "./updateReducer";
const reducer=combineReducers({
  todoReducer,
  updateReducer

})
export default reducer;
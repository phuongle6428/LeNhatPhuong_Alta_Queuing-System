import { combineReducers } from "redux";
import loginReducer from "../module/Login/reducer/loginReducer";

const rootReducer = combineReducers({
  login: loginReducer.reducer
})
export default rootReducer
import { combineReducers } from "redux";
import deviceReducer from "../module/Device/reducer/deviceReducer";
import loginReducer from "../module/Login/reducer/loginReducer";

const rootReducer = combineReducers({
  login: loginReducer.reducer,
  device: deviceReducer.reducer
})
export default rootReducer
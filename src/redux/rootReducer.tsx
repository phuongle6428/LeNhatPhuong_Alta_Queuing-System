import { combineReducers } from "redux";
import deviceReducer from "../routes/Device/reducer/deviceReducer";
import loginReducer from "../routes/Login/reducer/loginReducer";

const rootReducer = combineReducers({
  login: loginReducer.reducer,
  device: deviceReducer.reducer
})
export default rootReducer
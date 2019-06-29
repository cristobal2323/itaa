import { combineReducers } from "redux";

/* Reducers */
import login from "./login/";
import dashboard from "./dashboard/";
import nav from "./nav/";
import home from "./home/";

const reducer = combineReducers({
  login,
  dashboard,
  home,
  nav
});

export default reducer;

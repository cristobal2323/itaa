import { combineReducers } from "redux";

/* Reducers */
import login from "./login/";
import dashboard from "./dashboard/";
import nav from "./nav/";
import home from "./home/";
import list_user from "./list_user/";
import add_user from "./add_user/";

const reducer = combineReducers({
  login,
  dashboard,
  home,
  nav,
  list_user,
  add_user
});

export default reducer;

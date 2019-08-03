import { combineReducers } from "redux";

/* Reducers */
import login from "./login/";
import dashboard from "./dashboard/";
import nav from "./nav/";
import home from "./home/";
import list_user from "./list_user/";
import add_user from "./add_user/";
import update_user from "./update_user/";
import list_datos_personales from "./list_datos_personales/";
import add_datos_personales from "./add_datos_personales/";
import update_datos_personales from "./update_datos_personales/";
import list_trabajador_empresa from "./list_trabajador_empresa/";
import add_trabajador_empresa from "./add_trabajador_empresa/";
import update_trabajador_empresa from "./update_trabajador_empresa/";
import list_examen_medico from "./list_examen_medico/";
import add_examen_medico from "./add_examen_medico/";

const reducer = combineReducers({
  login,
  dashboard,
  home,
  nav,
  list_user,
  add_user,
  update_user,
  list_datos_personales,
  add_datos_personales,
  update_datos_personales,
  list_trabajador_empresa,
  add_trabajador_empresa,
  update_trabajador_empresa,
  list_examen_medico,
  add_examen_medico
});

export default reducer;

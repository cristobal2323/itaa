import initialState from "./initialState";
import {
  FETCH_DASHBOARD_INIT,
  FETCH_DASHBOARD_SUCCESS,
  FETCH_DASHBOARD_FAILURE
} from "../../actions/dashboard/types";
import { saveLocalState, deleteLocalState } from "../../store/localStorage";

export default function dashboard(state = initialState, action) {
  switch (action.type) {
    /* Setting */
    case FETCH_DASHBOARD_INIT:
      return {
        ...state,
        loading: true
      };
    case FETCH_DASHBOARD_SUCCESS:
      saveLocalState({
        key: "permits",
        value: action.payload.data.datos.permits
      });
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: action.payload.status
      };
    case FETCH_DASHBOARD_FAILURE:
      return {
        ...state,
        data: false,
        loading: false,
        status: 501
      };
    default:
      return state;
  }
}

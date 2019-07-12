import initialState from "./initialState";
import {
  FETCH_LIST_USER_INIT,
  FETCH_LIST_USER_SUCCESS,
  FETCH_LIST_USER_FAILURE,
  RESET_LIST_USER
} from "../../actions/list_user/types";

export default function listUser(state = initialState, action) {
  switch (action.type) {
    /* Setting */
    case RESET_LIST_USER:
      return {
        ...state,
        status: 0
      };
    case FETCH_LIST_USER_INIT:
      return {
        ...state,
        loading: true
      };
    case FETCH_LIST_USER_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: action.payload.status
      };
    case FETCH_LIST_USER_FAILURE:
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

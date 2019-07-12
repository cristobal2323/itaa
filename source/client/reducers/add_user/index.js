import initialState from "./initialState";
import {
  SAVE_USER_INIT,
  SAVE_USER_SUCCESS,
  SAVE_USER_FAILURE,
  RESET_ADD_USER
} from "../../actions/add_user/types";

export default function listUser(state = initialState, action) {
  switch (action.type) {
    /* Setting */
    case RESET_ADD_USER:
      return {
        ...state,
        data: {},
        loading: false,
        status: 0
      };
    case SAVE_USER_INIT:
      return {
        ...state,
        loading: true
      };
    case SAVE_USER_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: action.payload.status
      };
    case SAVE_USER_FAILURE:
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

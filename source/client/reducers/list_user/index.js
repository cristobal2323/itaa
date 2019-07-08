import initialState from "./initialState";
import {
  FETCH_LIST_USER_INIT,
  FETCH_LIST_USER_SUCCESS,
  FETCH_LIST_USER_FAILURE
} from "../../actions/list_user/types";

export default function listUser(state = initialState, action) {
  switch (action.type) {
    /* Setting */
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

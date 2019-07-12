import initialState from "./initialState";
import {
  FETCH_GET_USER_INIT,
  FETCH_GET_USER_SUCCESS,
  FETCH_GET_USER_FAILURE,
  UPDATE_USER_INIT,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  RESET_GET_USER
} from "../../actions/update_user/types";

export default function listUser(state = initialState, action) {
  switch (action.type) {
    /* Setting */
    case RESET_GET_USER:
      return {
        ...state,
        status: 0,
        statusUpdate: 0
      };
    case FETCH_GET_USER_INIT:
      return {
        ...state,
        loading: true
      };
    case FETCH_GET_USER_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: action.payload.status
      };
    case FETCH_GET_USER_FAILURE:
      return {
        ...state,
        data: false,
        loading: false,
        status: 501
      };
    case UPDATE_USER_INIT:
      return {
        ...state,
        loadingUpdate: true
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        dataUpdate: action.payload.data,
        loadingUpdate: false,
        statusUpdate: action.payload.status
      };
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        dataUpdate: false,
        loadingUpdate: false,
        statusUpdate: 501
      };
    default:
      return state;
  }
}

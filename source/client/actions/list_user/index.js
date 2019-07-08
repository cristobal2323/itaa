import {
  FETCH_LIST_USER_INIT,
  FETCH_LIST_USER_SUCCESS,
  FETCH_LIST_USER_FAILURE
} from "./types";
import API from "./api";

/* Config setting */

function fetchApiSuccess(data) {
  return {
    type: FETCH_LIST_USER_SUCCESS,
    payload: data
  };
}

function fetchApiFailure(error) {
  return {
    type: FETCH_LIST_USER_FAILURE
  };
}

function fetchApiInit() {
  return {
    type: FETCH_LIST_USER_INIT
  };
}

export function fetchListUserApi(data) {
  return async dispatch => {
    dispatch(fetchApiInit());
    try {
      const resp = await API.data.get(data);
      return dispatch(fetchApiSuccess(resp));
    } catch (error) {
      return dispatch(fetchApiFailure(error));
    }
  };
}

import {
  FETCH_DASHBOARD_INIT,
  FETCH_DASHBOARD_SUCCESS,
  FETCH_DASHBOARD_FAILURE,
  RESET_DASHBOARD
} from "./types";
import API from "./api";

export function resetDashboard() {
  return {
    type: RESET_DASHBOARD
  };
}

/* Config setting */

function fetchApiSuccess(data) {
  return {
    type: FETCH_DASHBOARD_SUCCESS,
    payload: data
  };
}

function fetchApiFailure(error) {
  return {
    type: FETCH_DASHBOARD_FAILURE,
    error
  };
}

function fetchApiInit() {
  return {
    type: FETCH_DASHBOARD_INIT
  };
}

export function fetchDashboardApi(data) {
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

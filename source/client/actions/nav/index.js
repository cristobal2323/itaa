import { SAVE_NAV } from "./types";

/* Actions Creators */

export function saveNav(value) {
  return {
    type: SAVE_NAV,
    payload: value
  };
}

import initialState from "./initialState";
import { SAVE_NAV } from "../../actions/nav/types";
import { saveLocalState } from "../../store/localStorage";

export default function nav(state = initialState, action) {
  switch (action.type) {
    case SAVE_NAV: {
      saveLocalState({ key: "nav", value: action.payload });
      return {
        ...state,
        nav: true
      };
    }
    default:
      return state;
  }
}

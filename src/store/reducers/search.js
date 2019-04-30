import { SEARCH_MODE_DEFAULT } from "../../configs/constants";

const initialState = {
  query: "",
  mode: SEARCH_MODE_DEFAULT
};

export default function search(state = initialState, action) {

  switch (action.type) {

    case "SEARCH_SET":
      return {
        ...state,
        query: action.query.trim(),
        mode: action.mode
      };

    case "SEARCH_RESET":
      return {
        ...initialState
      };

    default:
      return state;
  }

};
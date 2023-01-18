/** @format */

import {
  GET_TRANSLATION,
  UPDATE_LANGUAGES,
  RESET_FIELDS,
  DETECT_OBJECT,
  RESET_OBJ,
} from "../types";

const modelReducer = (state, action) => {
  switch (action.type) {
    case GET_TRANSLATION:
      return {
        ...state,
        translatedText: action.payload,
      };

    case UPDATE_LANGUAGES:
      return {
        ...state,
        languages: action.payload,
      };
    case DETECT_OBJECT:
      return {
        ...state,
        objects: action.payload,
      };
    case RESET_FIELDS:
      return {
        ...state,
        translatedText: action.payload,
      };
    case RESET_OBJ:
      return {
        ...state,
        objects: null,
      };
    default:
      return state;
  }
};

export default modelReducer;

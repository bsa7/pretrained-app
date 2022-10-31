import { GET_TRANSLATION, UPDATE_LANGUAGES, RESET_FIELDS } from "../types";

const modalReducer = (state, action) => {
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
    case RESET_FIELDS:
      return {
        ...state,
        translatedText: action.payload,
      };
    default:
      return state;
  }
};

export default modalReducer;

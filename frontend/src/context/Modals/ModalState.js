import axios from "axios";
import { useReducer } from "react";
import modalContext from "./modalContext";
import modalReducer from "./modalReducer";
import { GET_TRANSLATION, UPDATE_LANGUAGES, RESET_FIELDS } from "../types";
const ModalState = (props) => {
  const initialState = {
    userText: "",
    translatedText: "",
    languages: [],
  };

  const [state, dispatch] = useReducer(modalReducer, initialState);
  // get translation based on what the user entered
  const getTranslation = async (text) => {
    if (text.trim() === "") {
      dispatch({ type: RESET_FIELDS, payload: "" });
      return 0;
    }
    try {
      const response = await axios.post(
        `https://api-inference.huggingface.co/models/Helsinki-NLP/opus-mt-${state.languages[0]}-${state.languages[1]}`,
        text,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          },
        }
      );
      const result = await response;
      const payload = await result.data[0].translation_text;
      dispatch({ type: GET_TRANSLATION, payload });
    } catch (error) {
      console.error(error);
    }
  };

  // update the languages
  const updateLanguages = (data) => {
    dispatch({ type: UPDATE_LANGUAGES, payload: data });
  };

  return (
    <modalContext.Provider
      value={{
        translatedText: state.translatedText,
        languages: state.languages,
        getTranslation,
        updateLanguages,
      }}
    >
      {props.children}
    </modalContext.Provider>
  );
};
export default ModalState;

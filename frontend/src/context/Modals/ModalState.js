/** @format */

import axios from "axios";
import { useReducer } from "react";
import modalContext from "./modalContext";
import modalReducer from "./modalReducer";
import {
  GET_TRANSLATION,
  UPDATE_LANGUAGES,
  DETECT_OBJECT,
  RESET_FIELDS,
  RESET_OBJ,
} from "../types";
const ModalState = (props) => {
  const initialState = {
    userText: "",
    translatedText: "",
    audio: null,
    objects: null,
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

  const detectObj = async (url) => {
    try {
      fetch(url)
        .then((res) => res.blob())
        .then(async (blob) => {
          const response = await fetch(
            "https://api-inference.huggingface.co/models/facebook/detr-resnet-50",
            {
              headers: {
                Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
              },
              method: "POST",
              body: blob,
            }
          );
          const result = await response.json();
          dispatch({ type: DETECT_OBJECT, payload: result });
        });
    } catch (error) {
      console.log(error.message);
    }
  };
  const detectObLoc = async (img) => {
    img.arrayBuffer().then(async (arrayBuffer) => {
      const blob = new Blob([new Uint8Array(arrayBuffer)], { type: img.type });
      const response = await fetch(
        "https://api-inference.huggingface.co/models/facebook/detr-resnet-50",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          },
          method: "POST",
          body: blob,
        }
      );
      const result = await response.json();

      dispatch({ type: DETECT_OBJECT, payload: result });
    });
  };

  const readText = async (text) => {
    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/Voicemod/fastspeech2-en-male1",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          },
          method: "POST",
          body: JSON.stringify(text),
        }
      );

      return response;
    } catch (error) {
      console.log(error.message);
    }
  };
  const readTextRapidApi = async (lang, text) => {
    const encodedParams = new URLSearchParams();
    encodedParams.append("voice_code", `${lang}`);
    encodedParams.append("text", `${text}`);
    encodedParams.append("speed", "1.00");
    encodedParams.append("pitch", "1.00");
    encodedParams.append("output_type", "audio_url");

    const options = {
      method: "POST",

      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "473c8d10c4msh4f8a18494934a8fp15004bjsnd0b3031f5df5",
        "X-RapidAPI-Host": "cloudlabs-text-to-speech.p.rapidapi.com",
      },
      body: encodedParams,
    };

    const res = fetch(
      "https://cloudlabs-text-to-speech.p.rapidapi.com/synthesize",
      options
    );
    return res;
  };
  const resetObj = () => {
    dispatch({ type: RESET_OBJ });
  };
  return (
    <modalContext.Provider
      value={{
        translatedText: state.translatedText,
        languages: state.languages,
        audio: state.audio,
        objects: state.objects,
        getTranslation,
        updateLanguages,
        detectObj,
        readText,
        readTextRapidApi,
        detectObLoc,
        resetObj,
      }}
    >
      {props.children}
    </modalContext.Provider>
  );
};
export default ModalState;

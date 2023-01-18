/** @format */

import { useContext, useState, useEffect } from "react";
import ModelContext from "../../context/Models/modelContext";
import DropDownMenu from "../../components/DropDownMenu";
const Translator = () => {
  const modelContext = useContext(ModelContext);
  const { getTranslation, languages, updateLanguages, translatedText } = modelContext;
  const [userText, setUserText] = useState("");
  const [origin, setOrigin] = useState("");
  const [to, setTo] = useState("");
  useEffect(() => {
    updateLanguages([origin, to]);
  }, [to, origin, userText]);

  const handleChange = (event) => {
    setUserText(event.target.value);
  };

  const translate = () => {
    getTranslation(userText);
  };

  return (
    <div className='tr-widget'>
      <div className='menu'>
        {!(origin === "" || to === "" || userText.trim() === "") && (
          <div className='translate-btn' onClick={translate}>
            <i className='fa-solid fa-language'></i>
          </div>
        )}

        <DropDownMenu
          className='left_child'
          setOrigin={setOrigin}
          setTo={setTo}
          origin={true}
          holder={to}
        />
        <DropDownMenu
          className='right_child'
          setOrigin={setOrigin}
          setTo={setTo}
          origin={false}
          holder={origin}
        />
      </div>

      <textarea
        name='originalText'
        cols='30'
        rows='10'
        placeholder='Enter your text here....'
        value={userText}
        onChange={handleChange}
        disabled={origin === "" || to === ""}
      ></textarea>

      <textarea
        name='translatedText'
        cols='30'
        rows='10'
        disabled
        className='bottom_child'
        placeholder='translated text.....'
        value={translatedText}
      ></textarea>
    </div>
  );
};

export default Translator;

import { useContext, useState, useEffect } from "react";
import ModalContext from "../../context/Modals/modalContext";
import DropDownMenu from "../DropDownMenu";
const Translator = () => {
  const modalContext = useContext(ModalContext);
  const { getTranslation, languages, updateLanguages, translatedText } =
    modalContext;
  const [userText, setUserText] = useState("");
  const [origin, setOrigin] = useState("");
  const [to, setTo] = useState("");
  useEffect(() => {
    updateLanguages([origin, to]);

    // }
  }, [to, origin, userText]);

  const handleChange = (event) => {
    setUserText(event.target.value);
    getTranslation(event.target.value);
  };
  return (
    <div className='tr-widget'>
      <div className='menu'>
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

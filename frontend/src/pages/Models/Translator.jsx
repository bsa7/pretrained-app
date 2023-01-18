/** @format */

import { useContext, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ModelContext from '../../context/Models/modelContext';
import DropDownMenu from '../../components/DropDownMenu';

const Translator = () => {
  const modelContext = useContext(ModelContext);
  const { getTranslation, languages, updateLanguages, translatedText } = modelContext;
  const [userText, setUserText] = useState('');
  const [origin, setOrigin] = useState('');
  const [to, setTo] = useState('');
  useEffect(() => {
    updateLanguages([origin, to]);
  }, [to, origin, userText]);

  const handleChange = (event) => setUserText(event.target.value)

  const translate = () => getTranslation(userText)
  const actionButtonDisabled = origin === '' || to === '' || userText.trim() === ''

  return (
    <div className="tr-widget">
      <div className="menu">
        <DropDownMenu
          className="left_child"
          setOrigin={setOrigin}
          setTo={setTo}
          origin
          holder={to}
        />
        <DropDownMenu
          className="right_child"
          setOrigin={setOrigin}
          setTo={setTo}
          origin={false}
          holder={origin}
        />
      </div>

      <textarea
        name="originalText"
        cols="30"
        rows="10"
        placeholder="Enter your text here...."
        value={userText}
        onChange={handleChange}
        disabled={origin === '' || to === ''}
      />

      <textarea
        name="translatedText"
        cols="30"
        rows="10"
        disabled
        className="bottom_child"
        placeholder="translated text....."
        value={translatedText}
      />

      <Button
        disabled={actionButtonDisabled}
        onClick={translate}
        variant="contained"
      >
        <PlayArrowIcon/>
        Translate
      </Button>
    </div>
  );
};

export default Translator;

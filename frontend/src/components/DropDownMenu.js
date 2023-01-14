import React, { useRef } from "react";
const DropDownMenu = (props) => {
  const selectLanguage = (language) => {
    props.origin
      ? props.setOrigin(language.target.value)
      : props.setTo(language.target.value);
  };

  return (
    <>
      <select name='cars' className='language_drop' onChange={selectLanguage}>
        <option value=''>Select a language</option>
        <option value='ar' disabled={props.holder === "ar"}>
          Arabic
        </option>
        <option value='en' disabled={props.holder === "en"}>
          English
        </option>
        <option value='fr' disabled={props.holder === "fr"}>
          French
        </option>
        <option value='ru' disabled={props.holder === "ru"}>
          Russian
        </option>
      </select>
    </>
  );
};

export default DropDownMenu;

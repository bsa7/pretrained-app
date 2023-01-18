import React, { useRef } from 'react';

const DropDownMenu = (dropDownMenuProps) => {
  const { holder, origin, setOrigin, setTo } = dropDownMenuProps
  const selectLanguage = (language) => {
    if (origin) {
      setOrigin(language.target.value)
    } else {
      setTo(language.target.value);
    }
  };

  return (
    <select name="cars" className="language_drop" onChange={selectLanguage}>
      <option value="">Select a language</option>
      <option value="ar" disabled={holder === 'ar'}>
        Arabic
      </option>
      <option value="en" disabled={holder === 'en'}>
        English
      </option>
      <option value="fr" disabled={holder === 'fr'}>
        French
      </option>
      <option value="ru" disabled={holder === 'ru'}>
        Russian
      </option>
    </select>
  );
};

export default DropDownMenu;

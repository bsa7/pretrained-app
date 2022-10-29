import React, { useRef, useState } from "react";

const Objectsdetector = () => {
  const [url, setUrl] = useState("");
  const upBtn = useRef(null);

  const handleChange = (event) => {
    setUrl(event.target.value);
  };
  const handleClick = (event) => {
    upBtn.current.click();
  };
  return (
    <div className='object-detection'>
      <input
        type='url'
        name='image-url'
        className='url-btn'
        onChange={handleChange}
        value={url}
        placeholder='Image url...'
      />
      <input
        type='button'
        className='up-btn upload-btn'
        value='DETECT'
        onClick={handleClick}
      />
      <input
        type='file'
        name='UPLOAD'
        accept='image/*'
        id=''
        hidden
        ref={upBtn}
      />
    </div>
  );
};

export default Objectsdetector;

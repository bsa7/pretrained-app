/** @format */

import React, { useRef, useState, useEffect, useContext } from "react";
import ModalContext from "../../context/Modals/modalContext";
import Canvas from "../Canvas";

const Objectsdetector = () => {
  const [url, setUrl] = useState("");
  const upBtn = useRef(null);
  const modalContext = useContext(ModalContext);
  const { detectObj, detectObLoc, resetObj } = modalContext;
  useEffect(() => {
    if (upBtn.current.value) {
      // detectObj(url);
    }
  }, [url, upBtn]);
  const handleChange = (event) => {
    setUrl(event.target.value);
  };
  const handDetect = () => {
    detectObj(url);
  };
  const handleClick = (event) => {
    upBtn.current.click();
    resetObj();
  };
  const handleImg = (e) => {
    getBase64(e.target.files[0]).then((data) => {
      detectObLoc(e.target.files[0]);
      setUrl(data);
    });
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
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
      {url.trim() === "" ? (
        <input
          type='button'
          className='up-btn upload-btn'
          value='UPLOAD'
          onClick={handleClick}
        />
      ) : (
        <input
          type='button'
          className='up-btn upload-btn'
          value='DETECT'
          onClick={handDetect}
        />
      )}

      <input
        type='file'
        name='UPLOAD'
        accept='image/*'
        id=''
        hidden
        ref={upBtn}
        onChange={handleImg}
      />
      {url && <Canvas url={url} />}
    </div>
  );
};

export default Objectsdetector;

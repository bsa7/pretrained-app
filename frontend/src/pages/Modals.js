import React, { useState } from "react";
import Objectsdetector from "../components/Modals/Objectsdetector";
import Texttospeech from "../components/Modals/Texttospeech";
import Translator from "../components/Modals/Translator";

const Modals = () => {
  // TODO:
  // * create a main layout for the main container
  // * add obj detector  modal from Hugging face
  // *add translation modal from Hugging face
  const [selectedModal, setselectedModal] = useState(null);

  const getSelectedModal = () => {
    const components = [<Objectsdetector />, <Translator />, <Texttospeech />];
    return components[selectedModal];
  };

  return (
    <div className='main modals'>
      <div className='side-bar'>
        <div className='card' onClick={() => setselectedModal(0)}>
          Object-Detection
        </div>
        <div className='card' onClick={() => setselectedModal(1)}>
          Translator
        </div>
        <div className='card' onClick={() => setselectedModal(2)}>
          TextTo-Speech
        </div>
      </div>

      <div className='modal-container'>
        {selectedModal !== null ? getSelectedModal() : <div>empty</div>}
      </div>
    </div>
  );
};

export default Modals;

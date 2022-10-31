import React, { useState } from "react";
import Objectsdetector from "../components/Modals/Objectsdetector";
import Texttospeech from "../components/Modals/Texttospeech";
import Translator from "../components/Modals/Translator";
import holder from "./pretm.svg";
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
        <div
          className={selectedModal === 0 ? "active_card" : ""}
          onClick={() => setselectedModal(0)}
        >
          Object-Detection
        </div>
        <div
          className={selectedModal === 1 ? "active_card" : ""}
          onClick={() => setselectedModal(1)}
        >
          Translator
        </div>
        <div
          className={selectedModal === 2 ? "active_card" : ""}
          onClick={() => setselectedModal(2)}
        >
          TextTo-Speech
        </div>
      </div>

      <div className='modal-container'>
        {selectedModal !== null ? (
          getSelectedModal()
        ) : (
          <div className='image_holder'>
            <img src={holder} alt='' />
          </div>
        )}
      </div>
    </div>
  );
};

export default Modals;

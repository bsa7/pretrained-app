import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import ObjectsDetector from '../pages/Models/ObjectsDetector'
import TextToSpeech from '../pages/Models/TextToSpeech'
import Translator from '../pages/Models/Translator'

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/models/image_object_detector" element={<ObjectsDetector/>}/>
      <Route path="/models/text_to_speech" element={<TextToSpeech/>}/>
      <Route path="/models/translator" element={<Translator/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
  )
}

export default ApplicationRoutes

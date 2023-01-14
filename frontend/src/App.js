import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Modals from "./pages/Modals";
import ModalState from "./context/Modals/ModalState";
function App() {
  return (
    <ModalState>
      <Router>
        <div className='App'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/modals' element={<Modals />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </Router>
    </ModalState>
  );
}

export default App;

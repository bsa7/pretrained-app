import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Modals from "./pages/Modals";
function App() {
  return (
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
  );
}

export default App;

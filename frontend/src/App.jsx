import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import ModelState from './context/Models/ModelState';
import Layout from './components/Layout';
import ApplicationRoutes from './components/ApplicationRoutes';

const App = () => {
  return (
    <ModelState>
      <Router>
        <Layout title="Приложение с предварительно обученными моделями" subtitle="Lorem ipsum">
          <ApplicationRoutes/>
        </Layout>
      </Router>
    </ModelState>
  );
}

export default App;

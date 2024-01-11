import './App.css';
import Layout from './components/Layout';
import Project from './components/Project';
// import Card from './components/Card';
import { Routes, Route } from 'react-router-dom';

function App() {


  return (
    <div>
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route path='/project' element={<Project/>}>
          </Route>
        </Routes>
    </div>
  );
}

export default App;

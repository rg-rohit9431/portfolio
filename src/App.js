import './App.css';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';

function App() {


  return (
    <div>
        <Routes>
          <Route path='/' element={<Layout />} />
        </Routes>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Meals from './pages/Meals';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/meals" element={ <Meals /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

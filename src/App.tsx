import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login/Login';
import Meals from './pages/Meals/Meals';
import Drinks from './pages/Drinks/Drinks';
import Profile from './pages/Profile/Profile';
import DoneRecipes from './pages/DoneRecipes/doneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes/favoriteRecipes';
import RecipesProvider from './context/RecipesProvider';

function App() {
  return (
    <RecipesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/meals" element={ <Meals /> } />
          <Route path="/drinks" element={ <Drinks /> } />
          <Route path="/profile" element={ <Profile /> } />
          <Route path="/done-recipes" element={ <DoneRecipes /> } />
          <Route path="/favorite-recipes" element={ <FavoriteRecipes /> } />
        </Routes>
      </BrowserRouter>
    </RecipesProvider>
  );
}

export default App;

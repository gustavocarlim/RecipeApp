import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login/Login';
import Meals from './pages/Meals/Meals';
import Drinks from './pages/Drinks/Drinks';
import Profile from './pages/Profile/Profile';
import DoneRecipes from './pages/DoneRecipes/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes/favoriteRecipes';
import RecipeDetails from './Components/RecipeDetails';
import RecipiesProvider from './context/RecipiesProvider';

function App() {
  return (
    <RecipiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/meals" element={ <Meals /> } />
          <Route path="/drinks" element={ <Drinks /> } />
          <Route path="/profile" element={ <Profile /> } />
          <Route path="/done-recipes" element={ <DoneRecipes /> } />
          <Route path="/favorite-recipes" element={ <FavoriteRecipes /> } />
          <Route path="/meals/:id" element={ <RecipeDetails isDrinks={ false } /> } />
          <Route path="/drinks/:id" element={ <RecipeDetails isDrinks /> } />
        </Routes>
      </BrowserRouter>
    </RecipiesProvider>
  );
}

export default App;

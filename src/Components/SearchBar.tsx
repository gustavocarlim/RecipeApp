import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import RecipiesContext from '../context/RecipesContext';
import { fetchIngredients, fetchName, fetchfirstLetter } from './services/Api';
import { fetchIngredientsBebida, fetchNameBebida,
  fetchfirstLetterBebida } from './services/ApiBebidas';

function SearchBar() {
  const [radio, setRadio] = useState('');
  const { filter, setFilter } = useContext(RecipiesContext);
  const location = useLocation();
  /* const navigate = useNavigate(); // Obtendo o histórico de navegação */

  const handleClickSearchButton = async () => {
    // comida henderizado pagina mells
    if (location.pathname === '/meals') {
      let results = [];
      if (radio === 'ingredient') {
        const response = await fetchIngredients(filter);
        results = response;
      } else if (radio === 'name') {
        const response = await fetchName(filter);
        results = response;
      } else if (radio === 'firstLetter' && filter.length > 1) {
        alert('Your search must have only 1 (one) character');
      } else if (radio === 'firstLetter') {
        const response = await fetchfirstLetter(filter);
        results = response;
      }
      /*  if (results.length === 1) {
        const recipeId = results[0].idMeal; // Supondo que o ID da receita seja obtido assim
        navigate(`/meals/${recipeId}`); // Redirecionamento para a tela de detalhes da receita
      } */
    }

    if (location.pathname === '/drinks') {
      let results = [];
      if (radio === 'ingredient') {
        const response = await fetchIngredientsBebida(filter);
        results = response;
      } else if (radio === 'name') {
        const response = await fetchNameBebida(filter);
        results = response;
      } else if (radio === 'firstLetter' && filter.length > 1) {
        alert('Your search must have only 1 (one) character');
      } else if (radio === 'firstLetter') {
        const response = await fetchfirstLetterBebida(filter);
        results = response;
      }
      /*   if (results.length === 1) {
      const recipeId = results[0].idDrink; // Supondo que o ID da receita seja obtido assim
      navigate(`/drinks/${recipeId}`); // Redirecionamento para a tela de detalhes da receita */
    /* } */
    }
  };

  return (
    <>
      <div>SearchBar</div>
      <div>
        <label htmlFor="ingredientes">
          <input
            value="ingredient"
            onChange={
              ({ target }:React.ChangeEvent<HTMLInputElement>) => setRadio(target.value)
          }
            id="ingredient"
            name="ingredient"
            type="radio"
            data-testid="ingredient-search-radio"
          />
          ingredientes
        </label>
        <label htmlFor="name">
          <input
            value="name"
            onChange={
              ({ target }:React.ChangeEvent<HTMLInputElement>) => setRadio(target.value)
            }
            id="name"
            name="name"
            type="radio"
            data-testid="name-search-radio"
          />
          name
        </label>
        <label htmlFor="Primeria letra">
          <input
            value="firstLetter"
            onChange={
              ({ target }:React.ChangeEvent<HTMLInputElement>) => setRadio(target.value)
            }
            id="Primeira letra"
            name="firstLetter"
            type="radio"
            data-testid="first-letter-search-radio"
          />
          Primeria letra
        </label>
        <button
          onClick={ handleClickSearchButton }
          data-testid="exec-search-btn"
        >
          Pesquisar
        </button>
      </div>
    </>
  );
}

export default SearchBar;

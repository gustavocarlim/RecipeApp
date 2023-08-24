import { useContext, useState } from 'react';
import RecipiesContext from '../context/RecipesContext';
import { fetchIngredients, fetchName, fetchfirstLetter } from './services/Api';

function SearchBar() {
  const [radio, setRadio] = useState('');
  const { filter, setFilter } = useContext(RecipiesContext);

  const handleClickSearchButton = async () => {
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

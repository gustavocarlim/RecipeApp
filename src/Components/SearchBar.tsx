import React, { useContext, useState } from 'react';
import RecipesContext from '../context/RecipesContext';

function SearchBar() {
  const { setFilter } = useContext(RecipesContext);
  const [selectedFilterId, setSelectedFilterId] = useState('name');

  const handleSearch = () => {
    const input = document.getElementById('header-search-input');
    if (input instanceof HTMLInputElement) {
      if (selectedFilterId === 'name') {
        setFilter({ type: 'name', value: input.value });
      } else if (selectedFilterId === 'ingredientes') {
        setFilter({ type: 'ingredientes', value: input.value });
      } else if (selectedFilterId === 'firstletter') {
        setFilter({ type: 'firstletter', value: input.value });
      }
    }
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="name"
          checked={ selectedFilterId === 'name' }
          onChange={ () => setSelectedFilterId('name') }
          data-testid="name-search-radio"
        />
        Name
      </label>
      <label>
        <input
          type="radio"
          value="ingredientes"
          checked={ selectedFilterId === 'ingredientes' }
          onChange={ () => setSelectedFilterId('ingredientes') }
          data-testid="ingredient-search-radio"
        />
        Ingredientes
      </label>
      <label>
        <input
          type="radio"
          value="firstletter"
          checked={ selectedFilterId === 'firstletter' }
          onChange={ () => setSelectedFilterId('firstletter') }
          data-testid="first-letter-search-radio"
        />
        First Letter
      </label>
      <button onClick={ handleSearch } data-testid="exec-search-btn">
        Pesquisar
      </button>
    </div>
  );
}

export default SearchBar;

function SearchBar() {
  return (
    <>
      <div>SearchBar</div>
      <div>
        <label htmlFor="ingredientes">
          <input
            id="ingredientes"
            name="ingredientes"
            type="radio"
            data-testid="ingredient-search-radio"
          />
          ingredientes
        </label>
        <label htmlFor="name">
          <input
            id="name"
            name="name"
            type="radio"
            data-testid="name-search-radio"
          />
          name
        </label>
        <label htmlFor="Primeria letra">
          <input
            id="Primeira letra"
            name="Primeira letra"
            type="radio"
            data-testid="first-letter-search-radio"
          />
          Primeria letra
        </label>
        <button
          data-testid="exec-search-btn"
        >
          Pesquisar
        </button>
      </div>

    </>
  );
}

export default SearchBar;

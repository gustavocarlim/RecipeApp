import { fireEvent, waitFor } from '@testing-library/dom';
import SearchBar from '../Components/SearchBar';
import RecipiesContext from '../context/RecipesContext';
import { render } from '@testing-library/react';

// Tests that the user can select the 'ingredient' radio button and click the search button for meals
it('should select "ingredient" radio button and click search button for meals', async () => {
  const fetchIngredientsMock = jest.spyOn(Api, 'fetchIngredients').mockResolvedValueOnce(mockResponse);
  const setRadioMock = jest.fn();
  const setFilterMock = jest.fn();
  const locationMock = { pathname: '/meals' };
  const useContextMock = jest.fn().mockReturnValue({ filter: 'chicken', setFilter: setFilterMock });
  const useLocationMock = jest.spyOn(reactRouterDom, 'useLocation').mockReturnValue(locationMock);

  render(
    <RecipiesContext.Provider value={ { filter: '', setFilter: setFilterMock } }>
      <SearchBar />
    </RecipiesContext.Provider>,
  );

  fireEvent.change(screen.getByTestId('ingredient-search-radio'), { target: { value: 'ingredient' } });
  fireEvent.click(screen.getByTestId('exec-search-btn'));

  await waitFor(() => {
    expect(fetchIngredientsMock).toHaveBeenCalledWith('chicken');
    expect(setRadioMock).toHaveBeenCalledWith('ingredient');
    expect(setFilterMock).not.toHaveBeenCalled();
  });

  fetchIngredientsMock.mockRestore();
  useLocationMock.mockRestore();
});

// Tests that the user can select the 'ingredient' radio button and click the search button for drinks
it('should select "ingredient" radio button and click search button for drinks', async () => {
  const fetchIngredientsBebidaMock = jest.spyOn(ApiBebidas, 'fetchIngredientsBebida').mockResolvedValueOnce(mockResponse);
  const setRadioMock = jest.fn();
  const setFilterMock = jest.fn();
  const locationMock = { pathname: '/drinks' };
  const useContextMock = jest.fn().mockReturnValue({ filter: 'vodka', setFilter: setFilterMock });
  const useLocationMock = jest.spyOn(reactRouterDom, 'useLocation').mockReturnValue(locationMock);

  render(
    <RecipiesContext.Provider value={ { filter: '', setFilter: setFilterMock } }>
      <SearchBar />
    </RecipiesContext.Provider>,
  );

  fireEvent.change(screen.getByTestId('ingredient-search-radio'), { target: { value: 'ingredient' } });
  fireEvent.click(screen.getByTestId('exec-search-btn'));

  await waitFor(() => {
    expect(fetchIngredientsBebidaMock).toHaveBeenCalledWith('vodka');
    expect(setRadioMock).toHaveBeenCalledWith('ingredient');
    expect(setFilterMock).not.toHaveBeenCalled();
  });

  fetchIngredientsBebidaMock.mockRestore();
  useLocationMock.mockRestore();
});
// Tests that the user can select the 'firstLetter' radio button and input a single letter for meals
it('should select "firstLetter" radio button and input single letter for meals', async () => {
  const fetchfirstLetterMock = jest.spyOn(Api, 'fetchfirstLetter').mockResolvedValueOnce(mockResponse);
  const setRadioMock = jest.fn();
  const setFilterMock = jest.fn();
  const locationMock = { pathname: '/meals' };
  const useContextMock = jest.fn().mockReturnValue({ filter: 'a', setFilter: setFilterMock });
  const useLocationMock = jest.spyOn(reactRouterDom, 'useLocation').mockReturnValue(locationMock);

  render(
    <RecipiesContext.Provider value={ { filter: '', setFilter: setFilterMock } }>
      <SearchBar />
    </RecipiesContext.Provider>,
  );

  fireEvent.change(screen.getByTestId('first-letter-search-radio'), { target: { value: 'firstLetter' } });
  fireEvent.click(screen.getByTestId('exec-search-btn'));

  await waitFor(() => {
    expect(fetchfirstLetterMock).toHaveBeenCalledWith('a');
    expect(setRadioMock).toHaveBeenCalledWith('firstLetter');
    expect(setFilterMock).not.toHaveBeenCalled();
  });

  fetchfirstLetterMock.mockRestore();
  useLocationMock.mockRestore();
});
// Tests that the user can select the 'firstLetter' radio button and input a single letter for drinks
it('should select "firstLetter" radio button and input single letter for drinks', async () => {
  const fetchfirstLetterBebidaMock = jest.spyOn(ApiBebidas, 'fetchfirstLetterBebida').mockResolvedValueOnce(mockResponse);
  const setRadioMock = jest.fn();
  const setFilterMock = jest.fn();
  const locationMock = { pathname: '/drinks' };
  const useContextMock = jest.fn().mockReturnValue({ filter: 'b', setFilter: setFilterMock });
  const useLocationMock = jest.spyOn(reactRouterDom, 'useLocation').mockReturnValue(locationMock);

  render(
    <RecipiesContext.Provider value={ { filter: '', setFilter: setFilterMock } }>
      <SearchBar />
    </RecipiesContext.Provider>,
  );

  fireEvent.change(screen.getByTestId('first-letter-search-radio'), { target: { value: 'firstLetter' } });
  fireEvent.click(screen.getByTestId('exec-search-btn'));

  await waitFor(() => {
    expect(fetchfirstLetterBebidaMock).toHaveBeenCalledWith('b');
    expect(setRadioMock).toHaveBeenCalledWith('firstLetter');
    expect(setFilterMock).not.toHaveBeenCalled();
  });

  fetchfirstLetterBebidaMock.mockRestore();
  useLocationMock.mockRestore();
});

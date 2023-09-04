import userEvent from '@testing-library/user-event';
import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
/* import userEvent from '@testing-library/user-event/'; */
import { vi } from 'vitest';
import SearchBar from '../Components/SearchBar';
import RecipiesProvider from '../context/RecipiesProvider';
import App from '../App';
import { renderWithRouter } from './helpers/renderWithRouter';
import { mockMealsFetch } from './mocks/fecht';

const INGREDIENT_SEARCH_RADIO = 'ingredient-search-radio';
const FIRST_LETTER_SEARCH_RADIO = 'first-letter-search-radio';
const EXEC_SEARCH_BTN = 'exec-search-btn';
const INPUT_SEARCH = 'search-input';
const SEARCH_ICON = 'search-top-btn';
const LUPA = 'btnLupa';

test('Testa a renderização e funcionamento do componente SearchBar', () => {
  global.fetch = vi.fn().mockImplementation(mockMealsFetch as any);
  window.alert = vi.fn(() => {});

  const { getByTestId } = render(<SearchBar />);

  // Verifique se os elementos de rádio estão presentes
  expect(getByTestId('name-search-radio')).toBeInTheDocument();
  expect(getByTestId(INGREDIENT_SEARCH_RADIO)).toBeInTheDocument();
  expect(getByTestId(FIRST_LETTER_SEARCH_RADIO)).toBeInTheDocument();
  expect(getByTestId(EXEC_SEARCH_BTN)).toBeInTheDocument();
});

test('Testes do input radio Primeira letra', () => {
  const { getByTestId } = render(<SearchBar />);

  const firstLetterRadio = getByTestId(FIRST_LETTER_SEARCH_RADIO);

  // Simule a mudança para o rádio "Nome"
  fireEvent.click(getByTestId('name-search-radio'));
  expect(firstLetterRadio).not.toBeChecked();
});

/* test('Teste no filtro name', async () => {
  const { getByTestId, findByTestId } = renderWithRouter(<Drinks />, { initialEntries: ['/drinks'] });
  // Simule a seleção do filtro "Nome"
  fireEvent.click(getByTestId('name-search-radio'));
  fireEvent.click(getByTestId(SEARCH_ICON));
  await waitFor(() => {
    expect(getByTestId(INPUT_SEARCH)).toBeInTheDocument();
  });
  fireEvent.change(await findByTestId(INPUT_SEARCH), 'shake');
  // Simule o clique no botão de pesquisa
  fireEvent.click(getByTestId(EXEC_SEARCH_BTN));
});
 */
/* test('Teste no filtro ingrediente', async () => {
  const { getByTestId, findByTestId } = renderWithRouter(<SearchBar />, { initialEntries: ['/drinks'] });
  // Simule a seleção do filtro "Nome"
  fireEvent.click(getByTestId('ingredient-search-radio'));
  fireEvent.click(getByTestId(SEARCH_ICON));
  await waitFor(() => {
    expect(getByTestId(INPUT_SEARCH)).toBeInTheDocument();
  });
  fireEvent.change(await findByTestId(INPUT_SEARCH), 'shake');
  // Simule o clique no botão de pesquisa
  fireEvent.click(getByTestId(EXEC_SEARCH_BTN));
}); */

test('Teste no filtro ingrediente', async () => {
  renderWithRouter(<SearchBar />, { initialEntries: ['/drinks'] });
  const inputIngrediente = screen.getByTestId('ingredient-search-radio');
  expect(inputIngrediente).toBeInTheDocument();
  fireEvent.click(inputIngrediente);
  fireEvent.click(screen.getByTestId(EXEC_SEARCH_BTN));
  await waitFor(() => {
    expect(screen.getByTestId(EXEC_SEARCH_BTN)).toBeInTheDocument();
  });
  /*  const lupaBtn = screen.getByTestId(LUPA); */
  /* fireEvent.click(lupaBtn);
  const searchInput = screen.getByTestId(INPUT_SEARCH);
  userEvent.type(searchInput, 'Milk');
});

// tetse filtro name
test('Teste no filtro ingrediente', async () => {
  renderWithRouter(<SearchBar />, { initialEntries: ['/drinks'] });
  const inputIngrediente = screen.getByTestId('ingredient-search-radio');
  expect(inputIngrediente).toBeInTheDocument();
  fireEvent.click(inputIngrediente);
  /*  const lupaBtn = screen.getByTestId(LUPA); */
  /* fireEvent.click(lupaBtn);
  const searchInput = screen.getByTestId(INPUT_SEARCH);
  userEvent.type(searchInput, 'Milk'); */
  fireEvent.click(screen.getByTestId(EXEC_SEARCH_BTN));
  await waitFor(() => {
    expect(screen.getByTestId(EXEC_SEARCH_BTN)).toBeInTheDocument();
  });
});

describe('Testa o SearchBar com busca pela primeira letra', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  beforeEach(async () => {
    global.fetch = vi.fn().mockImplementation(mockMealsFetch as any);
    window.alert = vi.fn(() => {});
  });

  test('Testa a pesquisa pela primeira letra', async () => {
    renderWithRouter(
      <RecipiesProvider>
        <App />
      </RecipiesProvider>,
      { initialEntries: ['/meals'] },
    );
    const searchIcon = screen.getByTestId(SEARCH_ICON);

    await userEvent.click(searchIcon);
    const searchInput = screen.getByTestId(INPUT_SEARCH);
    const firstLetterRadio = screen.getByTestId('first-letter-search-radio');
    const buttonSearch = screen.getByTestId(EXEC_SEARCH_BTN);
    await userEvent.type(searchInput, 'a');
    await userEvent.click(firstLetterRadio);
    await userEvent.click(buttonSearch);

    await screen.findByText('Apam balik');
  });
});
//

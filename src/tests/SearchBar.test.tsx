import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event/';
import { vi } from 'vitest';
import SearchBar from '../Components/SearchBar';
import RecipiesProvider from '../context/RecipiesProvider';
import App from '../App';
import { renderWithRouter } from './helpers/renderWithRouter';

const INGREDIENT_SEARCH_RADIO = 'ingredient-search-radio';
const FIRST_LETTER_SEARCH_RADIO = 'first-letter-search-radio';
const EXEC_SEARCH_BTN = 'exec-search-btn';

test('Testa a renderização e funcionamento do componente SearchBar', () => {
  const { getByTestId } = render(<SearchBar />);

  // Verifique se os elementos de rádio estão presentes
  /* expect(getByTestId('name-search-radio')).toBeInTheDocument(); */
  expect(getByTestId(INGREDIENT_SEARCH_RADIO)).toBeInTheDocument();
  expect(getByTestId(FIRST_LETTER_SEARCH_RADIO)).toBeInTheDocument();
  expect(getByTestId(EXEC_SEARCH_BTN)).toBeInTheDocument();
});

test('Testes do input radio Primeira letra', () => {
  const { getByTestId } = render(<SearchBar />);

  const firstLetterRadio = getByTestId(FIRST_LETTER_SEARCH_RADIO);

  // Verifique se o rádio "Primeira letra" está selecionado por padrão
  /* expect(firstLetterRadio).toBeChecked(); */

  // Simule a mudança para o rádio "Nome"
  fireEvent.click(getByTestId('name-search-radio'));
  expect(firstLetterRadio).not.toBeChecked();
});

test('Teste no filtro name', () => {
  const { getByTestId } = render(<SearchBar />);

  // Simule a seleção do filtro "Nome"
  fireEvent.click(getByTestId('name-search-radio'));

  // Simule o clique no botão de pesquisa
  fireEvent.click(getByTestId(EXEC_SEARCH_BTN));
});

const SEARCH_ICON = 'search-top-btn';
const SEARCH_INPUT = 'search-input';

describe('Testa o SearchBar com busca pela primeira letra', () => {
  beforeEach(() => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => (filterByFirstLetterMock),
    });
    window.alert = vi.fn(() => {});
  });
  afterEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
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
    const searchInput = screen.getByTestId(SEARCH_INPUT);
    const firstLetterRadio = screen.getByTestId('first-letter-search-radio');
    const buttonSearch = screen.getByTestId(EXEC_SEARCH_BTN);
    await userEvent.type(searchInput, 'a');
    await userEvent.click(firstLetterRadio);
    await userEvent.click(buttonSearch);

    await screen.findByText('Apam balik');
  });
});

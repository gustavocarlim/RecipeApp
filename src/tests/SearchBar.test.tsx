import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from '../Components/SearchBar';

test('Testa a renderização e funcionamento do componente SearchBar', () => {
  const { getByTestId } = render(<SearchBar />);

  // Verifique se os elementos de rádio estão presentes
  /* expect(getByTestId('name-search-radio')).toBeInTheDocument(); */
  expect(getByTestId('ingredient-search-radio')).toBeInTheDocument();
  expect(getByTestId('first-letter-search-radio')).toBeInTheDocument();
  expect(getByTestId('exec-search-btn')).toBeInTheDocument();
});

test('Testes do input radio Primeira letra', () => {
  const { getByTestId } = render(<SearchBar />);

  const firstLetterRadio = getByTestId('first-letter-search-radio');

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
  fireEvent.click(getByTestId('exec-search-btn'));
});

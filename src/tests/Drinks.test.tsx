import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import RecipiesProvider from '../context/RecipiesProvider';
import Drinks from '../pages/Drinks/Drinks';

describe('Verifica o componente Drinks', () => {
  test('Verifica se existe um título', () => {
    render(
      <MemoryRouter>
        <RecipiesProvider>
          <Drinks />
        </RecipiesProvider>
      </MemoryRouter>,
    );

    const title = screen.getByTestId('page-title');
    expect(title).toBeInTheDocument();
  });

  test('verifica se existe um ícone de perfil', () => {
    render(
      <MemoryRouter>
        <RecipiesProvider>
          <Drinks />
        </RecipiesProvider>
      </MemoryRouter>,
    );

    const iconProfile = screen.getByTestId('profile-top-btn');
    expect(iconProfile).toBeInTheDocument();
  });

  test('verifica se existe um ícone de pesquisa', () => {
    render(
      <MemoryRouter>
        <RecipiesProvider>
          <Drinks />
        </RecipiesProvider>
      </MemoryRouter>,
    );

    const iconSearch = screen.getByTestId('search-top-btn');
    expect(iconSearch).toBeInTheDocument();
  });
});

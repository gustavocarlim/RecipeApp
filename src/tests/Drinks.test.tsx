import { screen } from '@testing-library/react';
import Drinks from '../pages/Drinks/Drinks';
import { renderWithRouter } from './helpers/renderWithRouter';

describe('Verifica o componente Drinks', () => {
  test('Verifica se existe um título', () => {
    renderWithRouter(<Drinks />, { initialEntries: ['/'] });

    const title = screen.getByTestId('page-title');
    expect(title).toBeInTheDocument();
  });

  test('verifica se existe um ícone de perfil', () => {
    renderWithRouter(<Drinks />, { initialEntries: ['/'] });

    const iconProfile = screen.getByTestId('profile-top-btn');
    expect(iconProfile).toBeInTheDocument();
  });

  test('verifica se existe um ícone de pesquisa', () => {
    renderWithRouter(<Drinks />, { initialEntries: ['/'] });

    const iconSearch = screen.getByTestId('search-top-btn');
    expect(iconSearch).toBeInTheDocument();
  });
});

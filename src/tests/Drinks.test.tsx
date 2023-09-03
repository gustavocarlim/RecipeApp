import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import Drinks from '../pages/Drinks/Drinks';
import { renderWithRouter } from './helpers/renderWithRouter';
import { drinkCategories } from './mocks/mockdrinkCategories';

/* const =  */

describe('Verifica o componente Drinks', () => {
  test('Verifica se existe um título', () => {
    renderWithRouter(<Drinks />, { initialEntries: ['/'] });

    const title = screen.getByTestId('page-title');
    expect(title).toBeInTheDocument();
  });
  beforeEach(() => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => (drinkCategories),
    });
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
  test('Verifca os filtros', async () => {
    renderWithRouter(<Drinks />, { initialEntries: ['/'] });
    const shakebtn = await screen.findByRole('button', { name: 'Shake' });
    expect(shakebtn).toBeInTheDocument();
    userEvent.click(shakebtn);
    expect(await screen.findByTestId('0-recipe-card')).toBeInTheDocument();
    const clearbtn = await screen.findByRole('button', { name: 'Clear Filters' });
    userEvent.click(clearbtn);
    expect(await screen.findByTestId('0-recipe-card')).toBeInTheDocument();
  });
  /*  test('Verifica o fecht', () => {
    expect(global.fetch).toHaveBeenCalled();
  }); */
});

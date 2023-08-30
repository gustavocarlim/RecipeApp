import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Drinks from '../pages/Drinks/Drinks';
import { renderWithRouter } from './helpers/renderWithRouter';
const mockData = 
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
  test('Verifca os filtros', async () => {
    renderWithRouter(<Drinks />, { initialEntries: ['/'] });
    const shakebtn = await screen.findByRole('button', { name: 'Shake' });
    expect(shakebtn).toBeInTheDocument();
    userEvent.click(shakebtn);
    expect(await screen.findByText('151 Florida Bushwacker')).toBeInTheDocument();
    const clearbtn = await screen.findByRole('button', { name: 'Clear Filters' });
    userEvent.click(clearbtn);
    expect(await screen.findByText('GG')).toBeInTheDocument();
  });
  test('Verifica erro', () => {
global.fetch = vi.fn().mockResolvedValue({
  json: async() => ()
})
  });
});



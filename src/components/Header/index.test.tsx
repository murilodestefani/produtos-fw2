import { render } from '@testing-library/react';
import { Header } from './index';

test('verifica sem rederizou o componente Header sem erros', () => {
  render(<Header />);
});

import { fireEvent,  render, screen } from '@testing-library/react';
import App from './App';

describe('Testes para o componente principal', () => {
    test('Deve renderizar corretamente', () => {
        render(<App />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar "Bela foto" na lista', () => {
        render(<App />);
        fireEvent.change(screen.getByTestId('comment'), {
            target: {
                value: 'Bela foto'
            }
        });
        fireEvent.click(screen.getByTestId('btn-submit'));
        expect(screen.getByText('Bela foto')).toBeInTheDocument();
    })

    it('Deve adicionar "Adoro batman" na lista', () => {
        render(<App />);
        fireEvent.change(screen.getByTestId('comment'), {
            target: {
                value: 'Adoro batman'
            }
        });
        fireEvent.click(screen.getByTestId('btn-submit'));
        expect(screen.getByText('Adoro batman')).toBeInTheDocument();
    })

    
    })

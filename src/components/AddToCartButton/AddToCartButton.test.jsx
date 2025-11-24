import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddToCartButton from './AddToCartButton';

describe('AddToCartButton', () => {
  it("Render a button with the text 'Add to Cart'", () => {
    const mockId = 1;
    const mockCart = [];
    const cartFn = vi.fn();
    render(<AddToCartButton albumId={mockId} cart={mockCart} cartSetter={cartFn} />);
    const button = screen.getByRole('button', { name: 'Add to Cart' });
    const increase = screen.getByRole('button', { name: 'increase quantity' });
    const decrease = screen.getByRole('button', { name: 'decrease quantity' });
    expect(button).toBeInTheDocument();
    expect(increase).toBeInTheDocument();
    expect(decrease).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('Incerase and decrement count', async () => {
    const user = userEvent.setup();
    const mockId = 1;
    const mockCart = [];
    const cartFn = vi.fn();
    render(<AddToCartButton albumId={mockId} cart={mockCart} cartSetter={cartFn} />);
    const increase = screen.getByRole('button', { name: 'increase quantity' });
    const decrease = screen.getByRole('button', { name: 'decrease quantity' });
    expect(decrease).toBeDisabled();
    expect(screen.getByText('1')).toBeInTheDocument();
    await user.click(increase);
    expect(decrease).toBeEnabled();
    await user.click(increase);
    expect(screen.getByText('3')).toBeInTheDocument();
    await user.click(decrease);
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('Add item to cart', async () => {
    vi.mock('../CartPopup/CartPopup', () => ({
      default: ({ handleCartPopUp }) => <div>Mock Cart Popup</div>,
    }));
    const user = userEvent.setup();
    const mockId = 1;
    const mockCart = [];
    const cartFn = vi.fn();
    render(<AddToCartButton albumId={mockId} cart={mockCart} cartSetter={cartFn} />);
    const button = screen.getByRole('button', { name: 'Add to Cart' });
    await user.click(button);
    expect(cartFn).toBeCalled(1);
  });
});

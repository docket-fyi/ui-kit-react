import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('<Button>', () => {
  describe('"appearance" prop', () => {
    describe('when not provided', () => {
      it('renders the primary variant by default', () => {
        const { container } = render(<Button />);
        expect(container.firstChild).toHaveClass('primary');
      });
    });

    describe('when "primary"', () => {
      it('renders a primary button', () => {
        const { container } = render(<Button appearance="primary" />);
        expect(container.firstChild).toHaveClass('primary');
      });
    });

    describe('when "disabled"', () => {
      it('renders a disabled button', () => {
        const { container } = render(<Button appearance="disabled" />);
        expect(container.firstChild).toHaveClass('disabled');
      });
    });

    describe('when "error"', () => {
      it('renders a disabled button', () => {
        const { container } = render(<Button appearance="error" />);
        expect(container.firstChild).toHaveClass('error');
      });
    });
  });

  describe('"onClick" prop', () => {
    it('is called when clicked', () => {
      const onClickSpy = jest.fn();
      const { getByText } = render(
        <Button onClick={onClickSpy}>click me</Button>
      );
      fireEvent.click(getByText(/click me/i));
      expect(onClickSpy).toHaveBeenCalled();
    });
  });

  describe('"children" prop', () => {
    it('renders as inner text', () => {
      const { getByText } = render(<Button>click me</Button>);
      expect(getByText('click me')).toBeInTheDocument();
    });
  });
});

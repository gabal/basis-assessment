import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Component from './index';
describe('Navigation', () => {
    it('renders', () => {
        render(<Component />);
        const src = screen.getByRole('img').getAttribute('src');
        expect(src?.includes('/img/basis-logo.svg')).toBeTruthy();
    });
});

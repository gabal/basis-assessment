import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Component from './index';

const testMovie = {
    adult: false,
    backdrop_path: '/img/backdrop.jpg',
    genre_ids: [],
    id: 1,
    original_language: 'en',
    original_title: 'The Ring',
    overview: 'Scary Movie',
    popularity: 3,
    poster_path: '/img/poster.jpg',
    release_date: '1997-07-02',
    title: 'The Ring',
    video: true,
    vote_average: 1,
    vote_count: 2
}
describe('Movie', () => {
    it('renders', () => {
        render(<Component {...testMovie} />);
        expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent('The Ring');
    });
});

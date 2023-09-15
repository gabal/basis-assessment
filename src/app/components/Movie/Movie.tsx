import Image from 'next/image';
import { MovieI } from '../../types/Movie';
import styles from './movie.module.css';



export const Movie = ({ title, poster_path, overview }: MovieI) => {
    return <li className={styles?.['movie']}>
        <div>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
        </div>
        <div>
            <h2>{title}</h2>
            <p>{overview}</p>
        </div>
    </li >;
}

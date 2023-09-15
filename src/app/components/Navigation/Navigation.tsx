import Image from 'next/image';
import styles from './navigation.module.css';

export const Navigation = () => {
    return <div className={styles?.['navigation']}>
        <Image src='/img/basis-logo.svg' alt='Basis' width='100' height='25' />
    </div >;
}

'use client'
import { useRouter } from 'next/navigation';
import styles from './search.module.css';
import { useState } from 'react';

export const Search = () => {
    const [waitTimer, setWaitTimer] = useState<ReturnType<typeof setTimeout> | undefined>();
    const router = useRouter();
    const onChangeSearch = (e: { target: { value: string } }) => {
        if (waitTimer) clearTimeout(waitTimer);
        setWaitTimer(setTimeout(() => {
            router.push(`?q=${e.target.value}`);
        }, 1000))
    }


    return <div className={styles?.['search']}>
        <input onChange={onChangeSearch} type="text" />
    </div >;
}

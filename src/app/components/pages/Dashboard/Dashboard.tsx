'use client'
import { useSearchParams } from 'next/navigation';
import { ReactElement } from "react";
import Movie from "../../Movie";
import { MovieI } from "../../../types/Movie";
import Search from "../../Search";
import { useDataApi } from '../../../hooks/Data';
import { API_SERVICE_URLS } from '../../../utils/constants/api';


export const Dashboard = (): ReactElement => {
    const params = useSearchParams();
    const q = params.get('q');
    const { data } = useDataApi(API_SERVICE_URLS.movieEndpoint.split('{query}').join(q || ''));
    return <>
        <Search />
        <ul>
            {data?.results?.map((movie: MovieI) => (<Movie key={movie.id} {...movie} />))}
        </ul>
    </>
}
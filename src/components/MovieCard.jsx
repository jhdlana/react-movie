import axios from '../api/axios';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import requests from '../api/requests';
import AuthContext from '../AuthContext';

const MovieCard = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext)

    useEffect(() => {
        setIsLoggedIn(true)
    }, [])

    const fetchUrl = requests.fetchPopular;

    const fetchMovieData = useCallback(async () => {
        try {
            const response = await axios.get(fetchUrl);
            setMovies(response.data.results);
            console.log(response);
            console.log(response.data.results);
        } catch (e) {
            setError(e);
        }
    }, [fetchUrl]);

    useEffect(() => {
        fetchMovieData();
    }, [fetchMovieData]);

    const navigate = useNavigate();
    const handleDetail = (movieId) => {
        navigate(`${movieId}`);
    }

    return (
        <UL>{
            movies.map((movie) => (
                <CardPoster key={movie.id}>
                    <div onClick={() => handleDetail(movie.id)}>
                        <div>
                            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={`${movie.title} Poster`} />
                        </div>
                        <div>
                            <h3>{movie.title}</h3>
                            <p>평점: {movie.vote_average}</p>
                        </div>
                    </div>
                </CardPoster>
            ))
        }</UL>
    )
}

export default MovieCard

const CardPoster = styled.div`
    width: 100%;
    cursor: pointer;

    img {
        width: 100%;
        border-radius: 10px;
        transition: transform 0.3s ease;
    }

    img:hover {
        transform: scale(1.05);
    }

    h3 {
        font-size: 1rem;
        margin-top: 8px;
    }

    p {
        font-size: 0.9rem;
        color: gray;
    }
`;

const UL = styled.ul`
    margin-top: 90px;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 16px;
    padding: 0 16px;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(4, minmax(0, 1fr)); // minmax(0, 1fr) 행,열의 간격 최소 0, 최대는 가용공간의 1 (가용공간 균등하게 나누기)
    }

    @media (max-width: 992px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: 576px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`;

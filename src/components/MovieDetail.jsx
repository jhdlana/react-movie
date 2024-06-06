import axios from '../api/axios';
import React, { useEffect, useState } from 'react';
import { generatePath, useLocation, useParams } from 'react-router-dom';
import styled from "styled-components";


const MovieDetail = () => {
    const { movieId } = useParams();
    const [movieDetail, setMovieDetail] = useState(null);




    const base_url = "https://image.tmdb.org/t/p/w200";

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`/movie/${movieId}`);
                setMovieDetail(response.data);
                console.log(response)
            } catch (error) {
                console.error("Failed to fetch movie details:", error);
            }
        }
        console.log('movieDetail~~~~~~')
        fetchData();
    }, [movieId]);

    if (!movieDetail) {
        return <div>Loading...</div>;
    }

    return (
        <Poster className='MovieDetail'>
            <Div>
            <ImgWrapper>
                <Img src={`${base_url}${movieDetail.poster_path}`} alt={`${movieDetail.title} Poster`} />
            </ImgWrapper>
            </Div>
            <Div>
            <DetailsWrapper>
                <Head>
                    <h2>{movieDetail.title}</h2>
                    <Rating>{movieDetail.vote_average}</Rating>
                </Head>
                <Genres>
                    {movieDetail.genres.map((genre) => (
                        <span className="genre-name" key={genre.id}>{genre.name}</span>
                    ))}
                </Genres>
                <Overview>{movieDetail.overview}</Overview>
            </DetailsWrapper>
            </Div>
        </Poster>
    );
}

export default MovieDetail;

const Poster = styled.div`
    margin-top: 150px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    padding: 0 20px;
    height: 700px;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;
const Div = styled.div `

`
const ImgWrapper = styled.div`
    flex: 1;
    img {
        width: 700px;
        max-width: 300px;
        border-radius: 8px;
    }

    @media (max-width: 768px) {
        max-width: 300px;
    }
`;
const Img = styled.img `
    
`
const DetailsWrapper = styled.div`
    flex: 2;
    max-width: 600px;
`;

const Head = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    h2 {
        margin: 0;
        font-size: 1.5em;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;

        h2 {
            margin-bottom: 8px;
        }
    }
`;

const Rating = styled.span`
    background-color: #ffd700;
    padding: 4px 8px;
    border-radius: 4px;
    font-weight: bold;
`;

const Genres = styled.div`
    margin-bottom: 16px;

    .genre-name {
        background-color: #eee;
        border-radius: 4px;
        padding: 4px 8px;
        margin-right: 8px;
    }
`;

const Overview = styled.p`
    line-height: 1.6;
`;

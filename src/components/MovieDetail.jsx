import axios from '../api/axios';
import React, { useEffect, useState } from 'react'
import { generatePath, useParams } from 'react-router-dom';
import styled from "styled-components"

const MovieDetail = () => {

    const {movieId} = useParams()
    console.log(useParams())
    console.log(movieId)

    const [movieDetail, setMovieDetail] = useState(null)

    const base_url = "https://image.tmdb.org/t/p/w200"

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`/movie/${movieId}`);
                console.log(response.data); // API 응답 데이터 확인
                setMovieDetail(response.data);
            } catch (error) {
                console.error("Failed to fetch movie details:", error);
            }
        }
        fetchData();
    }, [movieId]);

    if (!movieDetail) {
        return <div>Loading...</div>;
    }


    // const detail = MovieDetailJson

    // const base_url = "https://image.tmdb.org/t/p/w200"

    // // useEffect(() => {
    // //     setMovieDetail(details) // setter함수가 꼐속 실행되면서 빈배열로 초기화돼서
    // // }, [])


    // // const detail = movieDetail ? movieDetail : [];
    // console.log(detail)

    // const poster = detail.poster_path
    // const title = detail.title
    // const vote_average = detail.vote_average
    // const genre = detail.genres.map((genre) => genre.name)
    // const overview = detail.overview
    

  return (
    <Poster className='MovieDetail'>
    <div>
        <img src={`${base_url}${movieDetail.poster_path}`} />
    </div>
    <div>
        <Head>
            <h2>{movieDetail.title}</h2>
            <span>{movieDetail.vote_average}</span>
        </Head>
        
        <p>
            {movieDetail.genres.map((genre)=> (
                <span className="genre-name" key={genre.id}> {genre.name} </span>
                )    
            )}
        </p>
        <p>{movieDetail.overview}</p>
    </div>
    
</Poster>
  )
}

export default MovieDetail

const Poster = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const Head = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`


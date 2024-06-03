import MovieDetailJson from '../movieDetailData.json';
import React, { useEffect, useState } from 'react'
import styled from "styled-components"

const MovieDetail = ({details}) => {
    const [movieDetail, setMovieDetail] = useState({})

    const detail = MovieDetailJson

    const base_url = "https://image.tmdb.org/t/p/w200"

    // useEffect(() => {
    //     setMovieDetail(details) // setter함수가 꼐속 실행되면서 빈배열로 초기화돼서
    // }, [])


    // const detail = movieDetail ? movieDetail : [];
    console.log(detail)

    const poster = detail.poster_path
    const title = detail.title
    const vote_average = detail.vote_average
    const genre = detail.genres.map((genre) => genre.name)
    const overview = detail.overview
    

  return (
    <Poster className='MovieDetail'>
        <div>
            <img src={`${base_url}${poster}`} />
        </div>
        <div>
            <Head>
                <h2>{title}</h2>
                <span>{vote_average}</span>
            </Head>
            
            <p>{genre}</p>
            <p>{overview}</p>
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


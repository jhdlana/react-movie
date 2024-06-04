import axios from '../api/axios'
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import requests from '../api/requests'


const MovieCard = ({movie}) => {
    // const base_url = "https://image.tmdb.org/t/p/w200"
    // const src = `${base_url}${movie.poster_path}`
    // console.log(src)

    // console.log(movie)
    // console.log( movie.map((movie)=> movie.title))

    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)

    const fetchUrl = requests.fetchPopular

    const fetchMovieData = useCallback(async () => { //컴포넌트가 렌더링될 때마다 새로운 함수가 생성되는 것을 방지
        try {
            const response = await axios.get(fetchUrl)
            setMovies(response.data.results)
            console.log(response)
            console.log(response.data.results)
        } catch (e) {
            setError(e)
        }
    }, [fetchUrl])

    const id = (movies.map(movie => (
        console.log(movie.id)
    )
    ))

    useEffect(() => {
      fetchMovieData()
    }, [fetchMovieData])
    

    const navigate = useNavigate()
    const handleDetail = (movieId) => {
        navigate(`${movieId}`)
    }

  return (
    //    <UL className='grid grid-cols-5 gap-8'>{
    //             movie.map((movie) => (
    //                 <CardPoster onClick={handleDetail} >
    //                 <div>
    //                     <img src={`${base_url}${movie.poster_path}`} alt={`${movie.title} Poster`}/>
    //                 </div>
    //                 <div>
    //                     <h3>{movie.title}</h3>
            
    //                     <p>평점: {movie.vote_average}</p>     
    //                 </div>
    //             </CardPoster>
    //         ))
    //     }</UL> 
    <UL className='grid grid-cols-5 gap-8'>{
        movies.map((movie) => (
            <CardPoster  key={movie.id}>
                    {/* <div onClick={() => navigate(`/${movie.id}`)}> */}
                    <div onClick={() => handleDetail(movie.id)}>
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={`${movie.title} Poster`}/>
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

const CardPoster = styled.div `
    width: 100%;
`
const UL = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr)); /* 5개의 열을 갖는 그리드 */
  gap: 8px;
`

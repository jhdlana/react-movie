import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'


const MovieCard = ({movie}) => {
    const base_url = "https://image.tmdb.org/t/p/w200"
    const src = `${base_url}${movie.poster_path}`
    console.log(src)

    console.log(movie)
    console.log( movie.map((movie)=> movie.title))

    const navigate = useNavigate()
    const handleDetail = () => {
        navigate('/details')
    }

  return (
       <UL className='grid grid-cols-5 gap-8'>{
                movie.map((movie) => (
                    <CardPoster onClick={handleDetail} >
                    <div>
                        <img src={`${base_url}${movie.poster_path}`} alt={`${movie.title} Poster`}/>
                    </div>
                    <div>
                        <h3>{movie.title}</h3>
            
                        <p>평점: {movie.vote_average}</p>     
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

import React from 'react'
import styled from 'styled-components'
import MovieCard from '../../components/MovieCard'

const MainPage = ({movie}) => {

    console.log(movie)
  return (
    <div>
         {/* <UL className='grid grid-cols-5 gap-8'>{
                movie.map((movie) => (
                <MovieCard 
                id= {movie.id}
                title= {movie.title}
                vote_average = {movie.vote_average}
                poster={ movie.poster_path}
            />  
            ))
        }</UL> */}
        <MovieCard movie={movie}/>
    </div>
  )
}

export default MainPage

const UL = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr)); /* 5개의 열을 갖는 그리드 */
  gap: 8px;
`
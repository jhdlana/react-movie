import { useEffect, useState } from 'react'
import './App.css'
import movieListData from './movieListData.json'
import movieDetailData from './movieDetailData.json'
import MovieCard from './components/MovieCard'
import { Route, Routes } from 'react-router-dom'
import MovieDetail from './components/MovieDetail'
import styled from 'styled-components'

function App() {
  const [movies, setMovies] = useState([])
  const [details, setDetails] = useState([])

  useEffect(() => {
    setMovies(movieListData)
    setDetails(movieDetailData)
  }, [])
  
  
  console.log(movies.results)
  // const movie = movies.results
  // console.log(movie)
  const movie = movies.results ? movies.results : [];
  console.log(movie);
  const id = movie.map((movie) => movie.id)
  console.log(id)
  const title = movie.map((movie) => movie.title)
  console.log(title)
  return (
    <CardPoster>
      <Routes>
        <Route path='/' element={<UL className='grid grid-cols-5 gap-8'>{
          movie.map((movie) => (
          <MovieCard 
          id= {movie.id}
          title= {movie.title}
          vote_average = {movie.vote_average}
          poster={ movie.poster_path}
          />  
        ))
        }</UL>}/>
        <Route path='/details' element={<MovieDetail details={details}/>}/>
      </Routes>
    </CardPoster>
  )
}

export default App

const CardPoster = styled.div `
    width: 100%;
`

const UL = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr)); /* 5개의 열을 갖는 그리드 */
  gap: 8px;
`
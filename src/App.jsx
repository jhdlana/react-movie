import { useEffect, useState } from 'react'
import './App.css'
import movieListData from './movieListData.json'
import movieDetailData from './movieDetailData.json'
import MovieCard from './components/MovieCard'
import { Route, Routes } from 'react-router-dom'
import MovieDetail from './components/MovieDetail'
import styled from 'styled-components'
import DetailPage from './pages/DetailPage'
import MainPage from './pages/MainPage'

function App() {
  const [movies, setMovies] = useState([])
  const [details, setDetails] = useState([])

  useEffect(() => {
    setMovies(movieListData)
    setDetails(movieDetailData)
  }, [])
  
  
  console.log(movies.results)
  const movie = movies.results ? movies.results : [];
  console.log(movie);
  const id = movie.map((movie) => movie.id)
  console.log(id)
  const title = movie.map((movie) => movie.title)
  console.log(title)
  return (
    <CardPoster>
    <Routes>
      <Route path='/' element={<MainPage movie={movie} />}/>
      <Route path='/details' element={<DetailPage/>}/>
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
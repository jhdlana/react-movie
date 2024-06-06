import { useEffect, useState } from 'react'
import './App.css'
import movieListData from './movieListData.json'
import movieDetailData from './movieDetailData.json'
import MovieCard from './components/MovieCard'
import { Outlet, Route, Routes } from 'react-router-dom'
import MovieDetail from './components/MovieDetail'
import styled from 'styled-components'
import DetailPage from './pages/DetailPage'
import MainPage from './pages/MainPage'
import Nav from './components/Nav'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import SearchPage from './pages/SearchPage'
import { AuthProvider } from './AuthContext'
import MyPage from './pages/MyPage'

const Layout = () => {
  return (
    <>
      <Nav />

      <Outlet />
    </>
  )
}

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
  // const id = movie.map((movie) => movie.id)
  // console.log(id)
  // const title = movie.map((movie) => movie.title)
  // console.log(title)

  return (
    <AuthProvider>
    <CardPoster>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<LoginPage/>}/>
        <Route path='main' element={<MainPage movie={movie} />}/>
        <Route path='main/:movieId' element={<DetailPage/>}/>
        <Route path='signup' element={<SignUpPage/>}/>
        <Route path='search' element={<SearchPage/>}/>
        <Route path='mypage' element={<MyPage/>}/>
      </Route>
    </Routes>
  </CardPoster>
  </AuthProvider>
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
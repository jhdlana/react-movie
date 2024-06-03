import { useEffect, useState } from 'react'
import './App.css'
import movieListData from './movieListData.json'
import movieDetailData from './movieDetailData.json'
import MovieCard from './components/MovieCard'
import { Route, Routes } from 'react-router-dom'
import MovieDetail from './components/MovieDetail'

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
    <div>
      <Routes>
        <Route path='/' element={<ul className='grid grid-cols-5 gap-8'>{
          movie.map((movie) => (
          <MovieCard 
          id= {movie.id}
          title= {movie.title}
          vote_average = {movie.vote_average}
          poster={ movie.poster_path}
          />  
        ))
        }</ul>}/>
        <Route path='/details' element={<MovieDetail details={details}/>}/>
      </Routes>
    </div>
  )
}

export default App

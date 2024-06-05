import React, { useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'
import useDebounce from '../hooks/useDebounce'
import Axois from '../api/axios'
import 'bootstrap/dist/css/bootstrap.css'
import './MovieSearch.css'

const MovieSearch = () => {
    console.log(useLocation())
    const location = useLocation()
    const navigate = useNavigate()

    const [searchResults, setSearchResults] = useState([])

    const useQuery = () => {
        return new URLSearchParams(location.search)
    }

    const query = useQuery()

    // debounceSearchTerm : 지연된 사용자의 입력 값
    const debounceSearchTerm = useDebounce(query.get('영화제목'), 500) // get : query에 대한 영화제목(key)의 값(value)를 가져오기
    console.log('MovieSearch : ' + debounceSearchTerm)

    useEffect(() => {
        if(debounceSearchTerm) {
            fetchSearchMovie(debounceSearchTerm) // 사용자가 입력한 값은 동적?느낌이므로 fetch함수에 인자로 받기
        }
    }, [debounceSearchTerm])

    const fetchSearchMovie = async (searchTerm) => { // 사용자가 입력한 것에 대해 요청을 보내야하므로 매개변수로 설정해서 그에 따른 요청 url을 동적으로 관리
        try {
            const response = await Axois.get(`/search/multi?include_adult=false&query=${searchTerm}`)
            console.log(response)
            setSearchResults(response.data.results)
        } catch(error) {
            console.log(error)
        }
    }

    if(searchResults.length > 0 ) {
        return (
            <section className='search-container'>
                {searchResults.map((movie) => {
                    if(movie.backdrop_path !== null && movie.media_type !== "person") {
                        const movieImageUrl = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path

                        return (
                            <div className="movie" key={movie.id}>
                                <div
                                    onClick={() => navigate(`/${movie.id}`)}
                                    className='movie__column-poster'
                                >
                                    <img
                                        src={movieImageUrl}
                                        alt='movie'
                                        className='movie__poster'
                                    />
                                </div>
                            </div>
                        ) 
                    }
                })}
            </section>
          )
    } else  {
        return (
            <section className='no-results'>
                <div className='no-results__text'>
                    <p>
                        찾고자 하는 검색어 {debounceSearchTerm}에 맞는 영화가 없습니다.
                    </p>
                </div>

            </section>
        )
    }
  
}

export default MovieSearch
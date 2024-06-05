import axios from 'axios';
// import { TMBD_API_KEY }from '../config';

// axios를 사용하여 영화 데이터베이스에 접근 & 사용할 기본 설정
const Axois = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: { // !!요청!!할때 사용할 기본 !!정보!!
        api_key: import.meta.env.VITE_MOVIE_TMDB_API_KEY, // 이 값을 사용하여, 영화 데이터 베이스에 접근
        language: "ko-KR", // 한국어로 데이터 요청
    }
})

export default Axois
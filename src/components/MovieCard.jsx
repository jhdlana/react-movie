import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const MovieCard = ({id, title, vote_average, poster}) => {
    const base_url = "https://image.tmdb.org/t/p/w200"
    const src = `${base_url}${poster}`
    console.log(src)

    const navigate = useNavigate()
    const handleDetail = () => {
        navigate('/details')
    }

  return (
    // <div>
    //      <ul>
    //         <li key={id}>
    //             <img src={`${base_url}${poster}`} alt={`${title} Poster`}/>
                
    //             <h3>{title}</h3>
    //             <p>평점: {vote_average}</p>
    //         </li>
    //     </ul>     
    // </div>
    <CardPoster onClick={handleDetail} >
        <div>
            <img src={`${base_url}${poster}`} alt={`${title} Poster`}/>
        </div>
        <div>
            <h3>{title}</h3>
            <p>평점: {vote_average}</p>     
        </div>
    </CardPoster>
  )
}

export default MovieCard

const CardPoster = styled.div `
    width: 100%;
`

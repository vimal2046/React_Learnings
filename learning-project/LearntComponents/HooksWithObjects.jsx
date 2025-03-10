import React from 'react'
import { useState } from 'react'

const HooksWithObjects = () => {
    const [movie, setMovie] = useState([{
        movie:"hydra",
        year:2020,
        ratings: 9,
    },{
        movie:"vimal",
        year:1012,
        ratings: 3,
    }])

    //const updateRating = () => setMovie({...movie, ratings : 10})
    const handleClick = () =>{
        setMovie(movie.map((m)=> m.movie === "vimal" ? {...movie, movie:"puli"} : m))
    } 

  return (
    <section>
        <button onClick={handleClick}>update</button>
        {movie.map((m) => (
            <li key={Math.random()}> {m.movie}</li>
        ))}
    </section>
  )
}

export default HooksWithObjects
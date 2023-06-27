import React from 'react'

const Slider = ({ movies }) => {
  return (
    <div>
      <div className="slider">
            
                {
                    movies.map(movie=>{
                        return (
                        <div className="slide-card" key={movie.id}><img src={movie.cardImg} alt={movie.title} /></div>
                        
                    )})
                }
            
      </div>
    </div>
  )
}

export default Slider

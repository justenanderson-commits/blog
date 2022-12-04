import React from 'react'
import './Card.css'

const Card = ({ title, description, id, deleteIdea }) => {
  return (
    <div className="card--idea">
      <h3>{title}</h3>
      <p>{ description }</p>
      <button onClick={ () => deleteIdea(id) }>Delete</button>
    </div>
  )
}

export default Card
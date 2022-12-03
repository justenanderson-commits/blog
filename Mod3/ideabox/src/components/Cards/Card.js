import React from 'react'
import './Card.css'

const Card = ({ title, description, id }) => {
  return (
    <div className="card--idea">
      <h3>{title}</h3>
      <p>{ description }</p>
      <button>Delete</button>
    </div>
  )
}

export default Card
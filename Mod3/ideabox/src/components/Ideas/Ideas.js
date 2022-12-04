import React from 'react'
import Card from '../Cards/Card'
import './Ideas.css'

const Ideas = ({ props }) => {

  const ideaCards = props.map(idea => {
    return (
      <Card 
      title={idea.title}
      description={idea.description}
      key={idea.id}
      id={idea.id}
     />
    )
  })

  return (
    <div className="container--ideas">
      { ideaCards }
    </div>
  )
}

export default Ideas
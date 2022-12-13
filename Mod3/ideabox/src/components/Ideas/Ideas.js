import React from 'react'
import Card from '../Cards/Card'
import './Ideas.css'

const Ideas = ({ ideas, deleteIdea }) => {
  const ideaCards = ideas.map(idea => {
    return (
      <Card
        title={idea.title}
        description={idea.description}
        key={idea.id}
        id={idea.id}
        deleteIdea={deleteIdea}
        />
      )
    }
  )

  return (
    <div>
      <h2>Your awesome list of ideas</h2>
      <div className="container--ideas">
      { ideaCards }
      </div>
    </div>
  )
}

export default Ideas

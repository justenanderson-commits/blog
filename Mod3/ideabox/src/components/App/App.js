import React from 'react'
import './App.css'
import Form from '../Form/Form'
import Ideas from '../Ideas/Ideas'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      ideas: []
    }
  }

  addIdea = (newIdea) => {
    this.setState({ideas: [...this.state.ideas, newIdea] })
  }

  deleteIdea = id => {
    console.log('Deleted idea id: ', id)
    const filteredIdeas = this.state.ideas.filter(idea => idea.id !== id)
    this.setState({ ideas: filteredIdeas})
  }

  fetchIdeas = () => {
    fetch('http://localhost:3001/api/v1/ideas')
      .then(response => {
          if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json()
      })
      .then(data => {
        console.log("data: ", data)
        this.setState({ ideas: data})
    })
            
      .catch(error => {
        console.log("Error message: ", error.message)
        this.state.error = error.message
      })
  }

  componentDidMount = () => {
    this.fetchIdeas() 
  }

  render() {
    return(
      <main className="app">
        <h1>Idea Box Extraordinaire!</h1>
        <Form addIdea={this.addIdea} />
        {!this.state.ideas.length && <h3>Add some fresh ideas!</h3>}
        <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea} />
      </main>
    )
  }
}

export default App
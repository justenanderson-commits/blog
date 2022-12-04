import React from 'react'
import Form from '../Form/Form'
import Ideas from '../Ideas/Ideas'
import './App.css'
import brain from '../../../src/images.png'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      ideas: [
        { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
        { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
        { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' }
      ]
    }
  }

  addIdea = newIdea => {
    this.setState({ ideas: [...this.state.ideas, newIdea]})
  }

  render() {
    return (
      <main>
        <div className="container--image">
          <img src={brain} className="App-logo"></img>
        </div>
        <h1>Idea Box</h1>
        <Form addIdea={this.addIdea}/>
        {!this.state.ideas.length && <h2>Add a new idea!</h2>}
        <Ideas props={this.state.ideas} />
      </main>

    )
  }
}

export default App

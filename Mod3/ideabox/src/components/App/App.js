import React from 'react'
import Form from '../Form/Form'
import Ideas from '../Ideas/Ideas'
import './App.css'
import brain from '../../../src/images.png'

class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <main>
        <img src={brain} className="App-logo"></img>
        <h1>Idea Box</h1>
        <Form />
        <Ideas />
      </main>

    )
  }
}

export default App

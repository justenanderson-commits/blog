import React from 'react'
import Form from '../Form/Form'
import Ideas from '../Ideas/Ideas'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h1>Idea Box</h1>
        <Form />
        <Ideas />
      </div>

    )
  }
}

export default App

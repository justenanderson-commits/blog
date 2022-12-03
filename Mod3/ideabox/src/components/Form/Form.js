import React from 'react'
import './Form.css'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h2>Form content</h2>
        <input type="text"></input>
        <input type="text"></input>
        <button>Submit</button>
      </div>
    )
  }
}

export default Form